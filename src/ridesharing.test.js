ridesharing = require("./ridesharing");

const DRIVERS = [
  {
    name: "John",
    category: "XL",
    milesDriven: 240,
    trips: 40,
    free: false,
    driverRating: 4.8,
  },
  {
    name: "Callie",
    category: "X",
    milesDriven: 30,
    trips: 6,
    free: true,
    driverRating: 4.6,
  },
  {
    name: "Robert",
    category: "X",
    milesDriven: 56,
    trips: 15,
    free: false,
    driverRating: 4.7,
  },
  {
    name: "Jeremy",
    category: "XL",
    milesDriven: 38,
    trips: 10,
    free: true,
    driverRating: 4.7,
  },
  {
    name: "Ross",
    category: "X",
    milesDriven: 2,
    trips: 1,
    free: true,
    driverRating: 4.4,
  },
  {
    name: "Richard",
    category: "X",
    milesDriven: 16,
    trips: 5,
    free: true,
    driverRating: 3.8,
  },
  {
    name: "Angelina",
    category: "XL",
    milesDriven: 58,
    trips: 20,
    free: false,
    driverRating: 4.7,
  },
];

describe("ridesharing", () => {
  describe("calculateDriverPay", () => {
    test("Callie", () => {
      expect(ridesharing.calculateDriverPay(DRIVERS[1])).toStrictEqual(96);
    });

    test("Jeremy", () => {
      expect(ridesharing.calculateDriverPay(DRIVERS[3])).toStrictEqual(157);
    });
  });

  describe("getAllAvailableDriverNames", () => {
    test("empty list", () => {
      expect(ridesharing.getAllAvailableDriverNames([])).toStrictEqual([]);
    });

    test("multiple drivers free", () => {
      expect(ridesharing.getAllAvailableDriverNames(DRIVERS)).toStrictEqual([
        "Callie",
        "Jeremy",
        "Ross",
        "Richard",
      ]);
    });
  });

  describe("findPossibleDriversForTrip", () => {
    test("empty list", () => {
      expect(
        ridesharing.findPossibleDriversForTrip([], "XL", 4.5)
      ).toStrictEqual([]);
    });
    test("XL with good rating", () => {
      expect(
        ridesharing.findPossibleDriversForTrip(DRIVERS, "XL", 4.6)
      ).toStrictEqual([
        {
          category: "XL",
          driverRating: 4.7,
          free: true,
          milesDriven: 38,
          name: "Jeremy",
          trips: 10,
        },
      ]);
    });
    test("XL with bad rating", () => {
      expect(
        ridesharing.findPossibleDriversForTrip(DRIVERS, "XL", 2.3)
      ).toStrictEqual([]);
    });
    test("X with decent rating", () => {
      expect(
        ridesharing.findPossibleDriversForTrip(DRIVERS, "X", 4.3)
      ).toStrictEqual([
        {
          category: "X",
          driverRating: 4.6,
          free: true,
          milesDriven: 30,
          name: "Callie",
          trips: 6,
        },
        {
          category: "X",
          driverRating: 4.4,
          free: true,
          milesDriven: 2,
          name: "Ross",
          trips: 1,
        },
        {
          category: "X",
          driverRating: 3.8,
          free: true,
          milesDriven: 16,
          name: "Richard",
          trips: 5,
        },
      ]);
    });
  });

  describe("pickDriverForTrip", () => {
    test("no possible drivers", () => {
      expect(ridesharing.pickDriverForTrip([])).toBe(null);
    });
    test("X with decent rating", () => {
      expect(
        ridesharing.pickDriverForTrip([
          {
            category: "X",
            driverRating: 4.6,
            free: true,
            milesDriven: 30,
            name: "Callie",
            trips: 6,
          },
          {
            category: "X",
            driverRating: 4.4,
            free: true,
            milesDriven: 2,
            name: "Ross",
            trips: 1,
          },
          {
            category: "X",
            driverRating: 3.8,
            free: true,
            milesDriven: 16,
            name: "Richard",
            trips: 5,
          },
        ])
      ).toStrictEqual({
        category: "X",
        driverRating: 4.4,
        free: true,
        milesDriven: 2,
        name: "Ross",
        trips: 1,
      });
    });
  });

  describe("calculateTotalPayForDrivers", () => {
    test("no drivers", () => {
      expect(ridesharing.calculateTotalPayForDrivers([])).toBe(0);
    });
    test("all drivers", () => {
      expect(ridesharing.calculateTotalPayForDrivers(DRIVERS)).toBeCloseTo(
        1598.8,
        2
      );
    });
  });
});
