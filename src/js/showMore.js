//---> function
import request from './ajax'
const configRequest = {
    method:'POST',
    dataType:'json',
    contentType:'application/json',
    data:JSON.stringify({blog:'more'}),
    url:"index.js",
};
const requestFunction = request(configRequest);
const requestSend = ()=>{
    requestFunction(()=>{},()=>{})
};


const eventClick = ()=>{
    // запрос -> loader -> ответ -> шаблонизация -> clearLoader -> вставка результата
    //                           -> clearLoader -> вставка ошибки
    console.log(requestSend());
};


export default function(item){
    const there = $(item);
    there.on('click',eventClick);
}