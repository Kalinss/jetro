const img = require('./testImgBase64');

module.exports = function () {
    return {
        date: 1571206915000,
        tags: "test|test",
        comments: 10,
        head: "test string string",
        text: "test string string",
        img: img(),
        type:'news'
    }
};