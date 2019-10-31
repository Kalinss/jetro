import handlebars from 'handlebars/dist/cjs/handlebars'
import * as R from 'ramda'

//templates
import templateBlogText from './template/blogText'
import templateBlogSlider from './template/blogSlider'
import templateBlogVideo from './template/blogVideo'

const getTemplate = source => handlebars.compile(source);
const getResult = data => template => template(data);

const choiceTemplate = (obj) => { // -> obj.type -> template of type
    switch (obj.type) {
        case 'news':
            return templateBlogText(obj);
            break;
        case 'slider':
            return templateBlogSlider(obj);
            break;
        case 'video':
            return templateBlogVideo(obj);
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

