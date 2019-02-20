const { from } = require('rxjs');

const numbers = [2, 67, 89];
const source = from(numbers);

source.subscribe(
    (value) => console.log(`value ${value}`),
    (e) => console.log(e),
    () => console.log('complete')
);