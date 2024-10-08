import { Client } from "@googlemaps/google-maps-services-js";

const run = async () => {
  const client = new Client();

  const placeDetailsResponse = await client.placeDetails({
    params: {
      address: "",
      key: ""
    }
  });

  console.log("placeDetailsResponse => ", JSON.stringify(placeDetailsResponse.data));
};

run();
