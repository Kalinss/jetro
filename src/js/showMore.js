//---> function
import request from './ajax'
import {addloaderForShowMore,clearLoaderForShowMore} from './loader'

import template from './templateHandling'

const configRequest = {
    type: 'POST',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded; charset = UTF-8',
    data: JSON.stringify({blog: 'more'}),
    url:"http://localhost:4000/blog",
};
const requestFunction = request(configRequest);
const success = (data,status) => {
    console.log(status);
    const a = template(data);
    $('.js-content-blog').append(a);
    console.log(button);
};
const disabled = (button)=>{
    $(button).hide();
};
const err = (XHR,status)=>{
    console.log(XHR);
    console.log(status);
};
const requestSend = (button) => {
    requestFunction(success, err)
};

const addLoader = (item)=> addloaderForShowMore(item);
const clearLoader = (item)=>clearLoaderForShowMore(item);



const eventClick = (event) => {
    const there = event.target;
    addLoader(there);
    // clearLoader(there);
    // console.log(handlebars);
    requestSend(there);
    // запрос -> loader -> ответ -> шаблонизация -> clearLoader -> вставка результата
    //                           -> clearLoader -> вставка ошибки
    //  console.log(requestSend());
};


export default function (item) {
    const there = $(item);
    there.on('click', eventClick);
}