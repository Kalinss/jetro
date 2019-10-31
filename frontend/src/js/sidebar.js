import * as R from 'ramda'
import FL from 'ramda-fantasy'
const IO = FL.IO;

//getLeftPosition:: m -> int // (for position left)
const getLeftPosition = (item) => item.map(el => el.offset().left).runIO();  // left position sidebar
//mainSectionPosition:: m(document) -> int // (for position top)
const mainSectionPosition = (doc) => doc.map(el => el.children().find('section').first().offset().top).runIO();
//getConfig:: int -> obj
const getConfig = (left) => {
    return {
        left: left,
        width: 265,
        top: 0,
        position: 'fixed'
    }
};
// getConfigThis :: item -> obj
const getConfigThis = R.compose(getConfig, getLeftPosition);
//fixedItem:: (m,option) -> sideEffect
const fixedItem = (m, option) => m.map(el => $(R.head(el)).css(option)).runIO();
//notFixed:: m->sideEffect
const notFixed = (m) => m.map(el => $(R.head(el)).css('position', 'inherit')).runIO();
//scrollTopPosition:: m -> int //(top position for sidebar)
const scrollTopPosition = (m) => m.map((item) => item.scrollTop()).runIO();
//equalsAandB::(a,b)->bool
const equalsAandB = (a, b) => a > b;


const eventScroll = (sidebarM, position, documentM, option) => {
    const result = equalsAandB(
        scrollTopPosition(documentM),
        position
    );
    result ? fixedItem(sidebarM, option) : notFixed(sidebarM);
};
export default function (sidebar) {
    const sidebarM = IO(() => $(sidebar));
    const documentM = IO(() => $(document));
    const option = getConfigThis(sidebarM);
    const constPosition = mainSectionPosition(documentM);

    $(document).on('scroll', () => {
        eventScroll(sidebarM, constPosition, documentM, option)
    });
}