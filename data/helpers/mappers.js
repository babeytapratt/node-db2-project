module.exports = {
    intToBoolean,
    booleanToint,
    carToBody,
  };

  function intToBoolean(int) {
    return int === 1 ? true : false;
  }

  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }

  function carToBody(car) {
    return {
      ...car,
      completed: intToBoolean(car.completed),
    };
  }
