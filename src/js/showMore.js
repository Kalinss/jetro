//---> function
import request from './ajax'
import {addloaderForShowMore, clearLoaderForShowMore} from './loader'
import template from './templateHandling'
import initSlider from './slider'
import * as R from 'ramda'

let button; // side effect

// setting request
const configRequest = {
    type: 'POST',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded; charset = UTF-8',
    data: JSON.stringify({blog: 'more'}),
    url: "http://localhost:4000/blog",
};
const configRequestCheck = {
    type: 'POST',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded; charset = UTF-8',
    data: JSON.stringify({blog: 'more'}),
    url: "http://localhost:4000/check",
};

// function request
const requestFunction = request(configRequest);
const checkRequestFunction = request(configRequestCheck);

const success = (data, status) => {
    console.log(status);
    const a = template(data);
    $('.js-content-blog').append(a);

    const newSlider = $('.js-blog-slider').not($('.slick-initialized'));
    initSlider(window.jQuery,newSlider);
    checkRemainArticles();
};
const successCheck = (data, status) => {

    if(data.articles > 0){
        $('.js-content-blog').append(button);
        clearLoader(button);
    }else{
        $(button).fadeOut(300).hide(600);
    }
};
const err = (XHR, status) => {
    alert('ошибка запроса');
    clearLoader(button);
};
const requestSend = () => {
    requestFunction(success, err)
};
const checkRemainArticles = () => {
    checkRequestFunction(successCheck, err)
};

// function sideEffect button showmore
const addLoader = (item) => addloaderForShowMore(item);
const clearLoader = (item) => clearLoaderForShowMore(item);


const eventClick = (event) => {
    const there = event.target;
    button = there; // side effect
    addLoader(there);
    requestSend();

    // запрос -> loader -> ответ -> шаблонизация -> clearLoader -> вставка результата
    //                           -> clearLoader -> вставка ошибки
};


export default function (item) {
    const there = $(item);
    there.on('click', eventClick);
}