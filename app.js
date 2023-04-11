const _ = require('lodash');

const items = [3, 2, [3, [4]]]

newItems = _.flattenDeep(items);
console.log(newItems);