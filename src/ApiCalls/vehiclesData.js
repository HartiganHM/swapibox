const fetchVehicles = async () => {
  const fetchedVehicles = await fetch('https://swapi.co/api/vehicles/');
  const jsonVehicles = await fetchedVehicles.json();
  const vehicles = cleanVehicleData(jsonVehicles.results);

  return vehicles;
};

const cleanVehicleData = vehicles => {
  const unresolvedPromises = vehicles.map(vehicle => {
    return {
      name: vehicle.name,
      list: {
        Model: vehicle.model,
        Class: vehicle.vehicle_class,
        Passengers: vehicle.passengers
      }
    };
  });

  return Promise.all(unresolvedPromises);
};

export default fetchVehicles;
