import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GooglePlacesInput = ({ apiKey, onPressHandler }) => {

  return (
    <GooglePlacesAutocomplete
      GooglePlacesDetailsQuery={{ fields: "geometry" }} // fetch data from geometry field
      placeholder="Search"
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        onPressHandler(details);
      }}
      query={{
        key: apiKey,
        language: "en",
      }}
    />
  );
};

export default GooglePlacesInput;
