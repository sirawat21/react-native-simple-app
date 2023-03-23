import { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
// import * as Animatable from "react-native-animatable";
import { FontAwesome } from "@expo/vector-icons";
import {
  Avatar,
  Hotels,
  Attractions,
  Restaurants,
  UnImage,
  NotFound,
} from "../../assets";
import { API_GOOGLE_PLACE } from "@env";
import { GooglePlacesInput, Menu, ItemCard } from "../../components";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { getPlacesData } from "../../helpers";

const DiscoverScreen = () => {
  // State for last, long location
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTl_lat] = useState(null);
  const [tr_lng, setTl_lng] = useState(null); 
  // On press handler of Google Places for set las/long
  const onPressGooglePlacesInputHandler = (details) => {
    setBl_lat(details?.geometry?.viewport?.southwest?.lat);
    setBl_lng(details?.geometry?.viewport?.southwest?.lng);
    setTl_lat(details?.geometry?.viewport?.northwest?.lat);
    setTl_lng(details?.geometry?.viewport?.northwest?.lng);
    // console.log(details?.geometry?.viewport); // get latitude and longitude
    console.log(details?.geometry?.viewport);
  }
  // Adjusting navigation when layout was loaded; remove nav header
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // Menu lists
  const [type, setType] = useState("restaurants"); // menu selecte state
  // Loading
  const [isLoading, setIsLoading] = useState(false);
  // Data
  const [mainData, setMainData] = useState([]);

  // When component didmount load data
  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      setMainData(data);
      setInterval(setIsLoading(false), 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

  return (
    <SafeAreaView className="bg-white flex-1 relative mt-12">
      {/* First Section */}
      {/* Title & Avatar */}
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[36px]">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            className="w-full h-full object-cover rounded-md"
            source={Avatar}
          />
        </View>
      </View>
      {/* Second Section */}
      {/* Search box */}
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesInput apiKey={API_GOOGLE_PLACE} onPressHandler={onPressGooglePlacesInputHandler}/>
      </View>
      {/* Third Section */}

      {/* Start Loding Handler */}
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          {/* Menu Container */}
          <View className="flex-row items-center justify-between px-8 mt-8">
            <Menu
              key="hotels"
              title="Hotels"
              image={Hotels}
              type={type}
              setType={setType}
            />
            <Menu
              key="attractions"
              title="Attractions"
              image={Attractions}
              type={type}
              setType={setType}
            />
            <Menu
              key="restaurants"
              title="Restaurants"
              image={Restaurants}
              type={type}
              setType={setType}
            />
          </View>
          {/* Devided section */}
          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2 ">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>
            {/* Discovery Lists */}
            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData.map((data) => (
                    <ItemCard
                      image={data?.photo?.images?.medium?.url}
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>
              ) : (
                <View className="w-full h-[400px] items-center space-x-8 justify-center">
                  <Image className="w-32 h-32 object-cover" source={NotFound} />
                  <Text className="text-2xl text-[#428288] font-semibold">
                    Opps... No Data Not Found
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      )}
      {/* End Loading Handler */}
    </SafeAreaView>
  );
};

export default DiscoverScreen;
