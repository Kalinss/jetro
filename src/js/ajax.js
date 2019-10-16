import $ from 'jquery';
window.$ = window.jQuery = $;
import * as R from 'ramda'

import testDate from '../../testServer/test/testDataBlog'
const request = (objConfig,success ,err) => {
    $.ajax({
        ...objConfig,
        statusCode:{
          200:success,
          404:err
        }
        //-> url: method: dataType: contentType: data
    })
};

 // export default  function(objConfig,succs ,err){
 //     JSON.stringify(testDate());
 // }
export default  R.curry(request)