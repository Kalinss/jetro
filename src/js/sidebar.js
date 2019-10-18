import * as R from 'ramda'
import FL from 'ramda-fantasy'
const IO = FL.IO;

const getCssForItem = (item) => {
    return {
        left: $(item).offset().left,
        width: 265,
        top: 0,
        position: 'fixed'
    }
};

const scrollTopPosition = (a) => $(a).scrollTop();
const equalsAandB = (a, b) => a > b;

const eventScroll = (item, position, document, option) => {
    const result = equalsAandB(
        scrollTopPosition(document),
        position
    );
    const fixedItem = (item, option) => {
        $(item).css({...option})
    };
    const notFixed = (item, option) => {
        $(item).css('position', 'inherit')
    };
    result ? fixedItem(item, option) : notFixed(item);
};

export default function (sidebar) {
    const option = getCssForItem(sidebar);
    const there = sidebar;
    const firstSection = $(document).children().find('section').first();
    const constPosition = firstSection.offset().top;

    $(document).on('scroll', () => {
        eventScroll(there, constPosition, document, option)
    });
}