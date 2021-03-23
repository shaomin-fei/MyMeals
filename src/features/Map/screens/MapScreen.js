//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 15:56:30
 */
import * as React from "react";
import { useEffect, useState } from "react";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import styled from "styled-components";
import { MapSearchBar } from "../components/MapSearchBar";
import { restaurantContext } from "../../../services/restaurant/restaurant.context";
import { LocationContext } from "../../../services/location/LocationContext";
import { LocationInfo } from "../../../flow-types/LocationTInfo";
import { RestaurantInfoDetail } from "../../../flow-types/RestaurantInfoType";
import { MapCallout } from "../components/MapCallout";
const StyledMap = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = ({
  navigation,
}: {
  navigation: Object,
}): React.Element<*> => {
  const { location }: { location: LocationInfo } = React.useContext(
    LocationContext
  );
  const {
    restaurants,
  }: { restaurants: RestaurantInfoDetail[] } = React.useContext(
    restaurantContext
  );
  const initRegion = {
    latitude: location.geometry.lat,
    longitude: location.geometry.lng,
    latitudeDelta:
      location.viewport.northeast.lat - location.viewport.southwest.lat,
    longitudeDelta: 0.002,
  };
  useEffect(() => {
    const region = {
      latitude: location.geometry.lat,
      longitude: location.geometry.lng,
      latitudeDelta:
        location.viewport.northeast.lat - location.viewport.southwest.lat,
      longitudeDelta: 0.002,
    };
    setMapRegion(region);
  }, [location]);
  //   function onRegionChange(region) {
  //     setMapRegion({ ...region });
  //   }
  const [mapRegin, setMapRegion] = useState(initRegion);
  return (
    <>
      <MapSearchBar />
      <StyledMap region={mapRegin}>
        {restaurants.map((restaurant, index) => {
          return (
            <Marker
              key={"map_" + restaurant.name + "_" + index.toString()}
              coordinate={{
                latitude: restaurant.latlng.lat,
                longitude: restaurant.latlng.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurantDetail: restaurant,
                  })
                }
              >
                <MapCallout restaurantDetail={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </StyledMap>
    </>
  );
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });
