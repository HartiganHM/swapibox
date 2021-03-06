const fetchVehicles = async () => {
  try {
    const fetchedVehicles = await fetch('https://swapi.co/api/vehicles/');
    const jsonVehicles = await fetchedVehicles.json();
    const vehicles = cleanVehicleData(jsonVehicles.results);

    return vehicles;
  } catch (error) {
    return new Error('Failed to fetch vehicles data');
  }
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
