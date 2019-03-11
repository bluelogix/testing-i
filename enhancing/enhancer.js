//production code

module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const repairItems = {
      ...item,
  durability: 100
  }
  return repairItems;
}

//optional- STRETCH
function get(item) {
  return { ...item };
}
