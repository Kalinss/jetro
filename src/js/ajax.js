import $ from 'jquery';
window.$ = window.jQuery = $;

export default function(objConfig,callback,status){
    $.ajax({
        url:objConfig.url,
        method:objConfig.method,
        dataType:objConfig.dataType,
    })
}