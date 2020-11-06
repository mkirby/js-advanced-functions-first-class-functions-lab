// Code your solution in this file!
const returnFirstTwoDrivers = (arrayOfDrivers) => {
  const drivers = [...arrayOfDrivers].splice(0,2)
  return drivers
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
  const drivers = [...arrayOfDrivers].splice(-2,2)
  return drivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = fare => {
  return multiplier => fare * multiplier
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (array, fn) => {
  return fn(array)
}