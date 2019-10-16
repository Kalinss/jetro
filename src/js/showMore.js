//---> function
import request from './ajax'
const configRequest = {
    type: 'POST',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded; charset = UTF-8',
    data: JSON.stringify({blog: 'more'}),
    url:"http://localhost:4000/blog",
};
const requestFunction = request(configRequest);
const success = (data) => {
    console.log(data);
};
const err = ()=>{
    console.log('error');
};
const requestSend = () => {
    requestFunction(success, err)
};


const eventClick = () => {
    // запрос -> loader -> ответ -> шаблонизация -> clearLoader -> вставка результата
    //                           -> clearLoader -> вставка ошибки
    console.log(requestSend());
};


export default function (item) {
    const there = $(item);
    there.on('click', eventClick);
}