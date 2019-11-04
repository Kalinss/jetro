const Works = require('../models/works');
const Slides = require('../models/slides');

exports.getHome = (req, res) => {
    Works.getFirstFour((works) => {
        Slides.getSlides((slides)=>{
            res.render('home',{works:works,slides:slides,name:'home'});
        });
    });
};