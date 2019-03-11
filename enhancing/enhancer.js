//production code

module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if( item.enhancement === 20) {
    return {
      ...item
    }
  } else {
    return {
      ...item,
    enhancement: item.enhancement + 1,
  
      }
  }
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
