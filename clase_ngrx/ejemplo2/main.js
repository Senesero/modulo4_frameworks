const { Observable } = require('rxjs');
const { map, filter } = require('rxjs/operators');

const numbers = [2, 67, 89];

const source = Observable.create((observer) => {
    for (let number of numbers) {
        if (number === 67) {
            observer.error('ERROOOOR');
        }
        observer.next(number);
    }
    observer.complete();
});

source.subscribe(
    (value) => console.log(`value ${value}`),
    (e) => console.log(e),
    () => console.log('complete')
);