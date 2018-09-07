// Code your solution in this file!
function logDriverNames(drivers) {

  for (const x of drivers) {
    console.log(x.name)
  }
}

function logDriversByHometown(drivers, location) {
  const names = drivers.filter(function (x) {return x.hometown === location})
  for (const name of names) {
    console.log(name)
  }
}