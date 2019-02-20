const { Observable } = require('rxjs');
const { map, filter } = require('rxjs/operators');

const numbers = [2, 67, 89];

const source = Observable.create((observer) => {
    let index = 0;
    const produceValue = () => {
        observer.next(numbers[index++])
        if (index < numbers.length) {
            setTimeout(produceValue, 2000);
        } else {
            observer.complete();
        }
    }
    produceValue();
}).pipe(
    map((n) => n * 2),
    filter((n) => n > 22)
);

source.subscribe(
    (value) => console.log(`value ${value}`),
    (e) => console.log(e),
    () => console.log('complete')
);