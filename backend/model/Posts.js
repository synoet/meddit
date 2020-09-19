const firebase = require('./index')

class Posts {

    constructor() {
        this.db = firebase.database()
    }

    async create(content, title, topic, callback) {
        const newKey = firebase.database().ref("/Posts").push().key;

        const post = {
            title: title,
            description: description,
            content: content,
            topic: topic,
            symptoms: symptoms,
            timestamp: Date.now()
        }
        const updates = {};
        updates["/Posts/" + newKey] = post;

        await callback(newKey)

        return this.db.ref().update(updates);
    }

    getAll(){
        return this.db.ref('/Posts/').orderByChild("title")
            .once('value').then(snapshot => snapshot.val());
    }

    get(id){
        return this.db.ref('/Posts/' + id)
            .once('value').then(snapshot => snapshot.val());
    }
}

module.exports = Posts;