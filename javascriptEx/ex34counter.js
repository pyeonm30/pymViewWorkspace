let count = 0;

function increase() {
  count += 1;
}

function getCount() {
  return count;
}

module.exports.count = count;
module.exports.getCount = getCount;
module.exports.increase = increase;

//console.log(module);