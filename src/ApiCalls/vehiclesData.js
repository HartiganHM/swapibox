const fetchVehicles = async() => {
    const fetchedVehicles = await fetch('https://swapi.co/api/vehicles/');
    const jsonVehicles = await fetchedVehicles.json();
    const vehicles = cleanVehicleData(jsonVehicles.results);

    return vehicles;
};

const cleanVehicleData = (vehicles) => {
    const unresolvedPromises = vehicles.map( vehicle => {
      return {
        name: vehicle.name,
        data: {
          model: vehicle.model,
          class: vehicle.vehicle_class,
          passengers: vehicle.passengers
        }
      }
    })

    return Promise.all(unresolvedPromises);
}

export default fetchVehicles;