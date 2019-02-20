const { interval } = require('rxjs');
const { take, map, filter, reduce } = require('rxjs/operators');

const items = ['1', '2', 'jai', '10', 'bar', '4', '16', '4', 'ter', '25', ];

const source = interval(400).pipe(
    take(10),
    map((index) => items[index])
);

const result = source.pipe(
    map((x) => parseInt(x)),
    filter((x) => !isNaN(x)),
    reduce((acc, value) => acc + value, 0)
);

result.subscribe((r) => console.log(r))