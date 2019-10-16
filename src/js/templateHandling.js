import handlebars from 'handlebars/dist/cjs/handlebars'
import * as R from 'ramda'
import templateBlogText from './template/blogText'

const getTemplate = source => handlebars.compile(source);
const getResult = data => template => template(data);

const choiceTemplate = (obj) => { // -> obj.type -> template of type
    switch (obj.type) {
        case 'news':
            return templateBlogText(obj);
            break;
        default:

            break;
    }
};

//func::(arr) -> arr templates
export default function (data) {
    return data.map((item) => {
        return R.compose(getResult(item), getTemplate)(choiceTemplate(item))
    });
}

