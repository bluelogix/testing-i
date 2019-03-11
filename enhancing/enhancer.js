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

// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
function fail(item) {
  let e = item.enhancement
  let d = item.durability

  if( e < 15) {
    return {
      ...item, 
      durability: d - 5
    }
  } else if ( e === 15 ) {
    return {
      ...item,
      durability: d - 10
    }
  } else if ( e >= 16 ) {
    return {
      ...item,
      durability: d - 10,
      enhancement: --e 
    }
  }
  
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
