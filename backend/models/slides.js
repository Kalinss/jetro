const MongoClient = require('mongodb').MongoClient;


class Slides {
    static getSlides(callback) {
        MongoClient.connect('mongodb://127.0.0.1:27017', (err, database) => {
            err ? console.log(err) : null;
            const db = database.db('jetro');

            db.collection('presentSlides').find().sort({_id: -1}).limit(6).toArray((err, result) => {
                err ? console.log(err) : null;
                database.close();
                callback(result);
            });
        })
    }

}

module.exports = Slides;