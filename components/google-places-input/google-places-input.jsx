import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GooglePlacesInput = ({apiKey}) => {
  return (
    <GooglePlacesAutocomplete
      GooglePlacesDetailsQuery={{fields: "geometry"}} // fetch data from geometry field
      placeholder="Search"
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details?.geometry?.viewport); // get latitude and longitude
      }}
      query={{
        key: apiKey,
        language: "en",
      }}
    />
  );
};

export default GooglePlacesInput;
