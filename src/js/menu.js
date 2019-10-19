import * as R from 'ramda';
import FL from 'ramda-fantasy';
const IO = FL.IO;

const toggleClass = (classItem, item) => {
    item.map((i) => i.toggleClass(classItem)).runIO();
};


const menuEvent = (wrapperM, navM, body) => {
    toggleClass('opacity', wrapperM);
    toggleClass('open', navM);
    toggleClass('notScroll', body);
};

export default function (item) {
    const navigation = IO(() => $('.nav'));
    const wrapperPage = IO(() => $('.wrapper'));
    const body = IO(() => $('body'));

    $(item).on('click', () => {
        menuEvent(wrapperPage, navigation, body);
    })
}