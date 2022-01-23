/*
You are working at a ride sharing app. It is a new ride sharing
app that prides itself in protecting its drivers, and paying fair
wages. As such there are a couple of things to keep in mind:

- There are 2 categories of drivers: X and XL.

- The driver pay for a trip follows the following formula:
    1. The driver is paid 10$ on pickup, regardless of the distance
       of the trip.
    2. Once the trip starts, the driver is paid per mile depending
       on the category that they drive.
         XL drivers are paid 1.50 per mile
         X drivers are paid 1.20 per mile

- The customers cost for the trip is the drivers pay + 5% for the company.
  So if the driver would have made $100, the cost of the trip is $105.

- There is no tipping, because all drivers are paid a living wage.

- When picking a driver for a trip, you should always pick the
  driver who has made the least money so far. This makes it
  so that all drivers have a chance to make money.

- When drivers are not driving (i.e. they are free), they are all
  parked at the same dispatch, so you do not need to consider
  the distance to the rider (customer).

- In order to protect drivers from asshole customers, the drivers and riders
  rating must be close. The rule is that a riders rating must be at most 0.5
  lower or 0.5 higher than the drivers rating. So if the driver is rated 4.5,
  they will only be considered for rides if the riders rating is between 4.0
  and 5.0.

You need to write the logic for finding a driver and for calculating
pay and cost.

The list of drivers look like this:

drivers = [
  {
    name: "John",
    category: "XL",
    milesDriven: 240,
    trips: 40,
    free: false,
    driverRating: 4.8,
  },
  ...
]
*/

function calculateDriverPay(driver) {
  // Given a driver, return how much this driver has made
}

function getAllAvailableDriverNames(drivers) {
  // Return the names of all drivers who are free
}

function findPossibleDriversForTrip(drivers, category, riderRating) {
  // Return the driver object for all drivers who can pick up
  // the given trip, according to the rules above.
}

function pickDriverForTrip(possibleDrivers) {
  // Given a list of possible drivers, return the driver who
  // will pick up the trip according to the rules above.
}

function calculateTotalPayForDrivers(drivers) {
  // At the end of the day, the company needs to pay all of its
  // drivers. Calculate how much they will need to pay in total.
}

module.exports = {
  calculateDriverPay,
  getAllAvailableDriverNames,
  findPossibleDriversForTrip,
  pickDriverForTrip,
  calculateTotalPayForDrivers,
};
