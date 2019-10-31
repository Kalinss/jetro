import $ from 'jquery';
window.$ = window.jQuery = $;


const sliderConfig = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    adaptiveHeight: false,
    fade: true,
    cssEase: 'linear'
};

const createSlider = (item) => {
    const there = $(item);
    const itemParent = there.parent();
    there.slick({
        ...sliderConfig,
        nextArrow: itemParent.children('.js-next'),
        prevArrow: itemParent.children('.js-prev')
    })
};

const eachSliders = items => f => {
    $(items).each((index, item) => {
        f(item);
    })
};


export default function ($, item) {

    item.length > 1 ? eachSliders(item)(createSlider) : createSlider(item);
    //document.addEventListener("DOMContentLoaded", ()=>alert('123'));

}