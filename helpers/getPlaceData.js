import axios from "axios";

export const getPlacesData = async (
  bl_lat = "",
  bl_lng = "",
  tr_lat = "",
  tr_lng = "",
  type
) => {
  const API_URL =
    `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  const API_HEADER = {
    "X-RapidAPI-Key": "397ef401e5msh18e022ba0503cefp10fb03jsnaf92ab94a2cf",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  };
  const API_PARAMS = {
    bl_latitude: bl_lat || "-34.11834699888443",
    tr_latitude: tr_lat || "-33.57814094522021",
    bl_longitude: bl_lng || "150.5209286026224",
    tr_longitude: tr_lng || "151.3430209458699",
    restaurant_tagcategory_standalone: "10591",
    restaurant_tagcategory: "10591",
    limit: "30",
    currency: "USD",
    open_now: "false",
    lunit: "km",
    lang: "en_US",
  };
  try {
    const {
      data: { data },
    } = await axios.get(API_URL, { params: API_PARAMS, headers: API_HEADER });
    return data;
  } catch (e) {
    return null;
  }
};
