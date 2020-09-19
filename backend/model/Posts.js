const firebase = require('./index')

class Posts {

    constructor() {
        this.db = firebase.database()
    }

    async create(content, title, topic, callback) {
        const newKey = firebase.database().ref("/Posts").push().key;

        const post = {
            content: content,
            title: title,
            topic: topic,
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