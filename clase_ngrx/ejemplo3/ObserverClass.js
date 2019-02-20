const { Observable } = require('rxjs');

class ObserverClass extends Observable {
    constructor() {
        super();
    }

    next(value) {
        console.log(value);
    }

    error(e) {
        console.log(e);
    }

    complete() {
        console.log('done');
    }
}

module.exports = ObserverClass;