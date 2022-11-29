let cars = [
  {
    mark: "audi",
  },
  {
    mark: "audi",
  },
  {
    mark: "bmw",
  },
];

let type = "bmw";

let filteredCars = cars.filter((car) => {
  return car.mark === type;
});
