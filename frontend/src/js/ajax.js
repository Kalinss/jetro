import $ from 'jquery';
window.$ = window.jQuery = $;
import * as R from 'ramda'

const request = (objConfig,success ,err) => {
    $.ajax({
        ...objConfig,
        success:success,
        error:err,
        //-> url: method: dataType: contentType: data
    })
};

export default  R.curry(request)