import $ from 'jquery';
window.$ = window.jQuery = $;
import * as R from 'ramda'

import testDate from './../shared/test/testDataBlog'
const request = (objConfig,succs ,err) => {
    $.ajax({
        ...objConfig,
        success: succs || {},
        error: err || {}
        //url: method:dataType:contentType:data
    })
};

 export default  function(objConfig,succs ,err){
     JSON.stringify(testDate());
 }
// export default  R.curry(request)