import $ from 'jquery';
window.$ = window.jQuery = $;
import * as R from 'ramda'
import slick from 'slick-carousel'

// Подключение модулей
import initSlider from './slider'
import {clearLoaders} from './loader'
import initShowMore from './showMore'
import initSidebar from './sidebar'


// Основные переменные событий
const gallery = $('.js-gallery');
const blogSlider = $('.js-blog-slider');
const blogArticle = $('.blog__item');
const loaders = $('.js-loader');
const showMore = $('.js-show-more');
const sidebar = $('.js-sidebar');
// Функции на инициализацию


// проверка существования основных переменных
// если существует -> подключить инициализацию модуля

document.addEventListener("DOMContentLoaded", () => {
    blogSlider.length > 0 ? initSlider(window.jQuery, blogSlider) : null;
});
$(document).ready(() => {
    loaders.length > 0 ? clearLoaders(loaders) : null;
    showMore.length > 0 ? initShowMore(showMore) : null;
    sidebar.length > 0 ? initSidebar(sidebar) : null;
});




