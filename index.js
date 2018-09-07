// Code your solution in this file!
function logDriverNames(drivers) {

  for (const x of drivers) {
    console.log(x.name)
  }
}

function logDriversByHometown(drivers, location) {
  debugger;
  for (const driver of drivers.filter(function (x) {return x.hometown === location})) {
    console.log(driver.name)
  }
}
