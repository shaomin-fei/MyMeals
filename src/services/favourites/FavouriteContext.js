//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 19:16:49
 */
import * as React from "react";
import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { RestaurantInfoDetail } from "../../flow-types/RestaurantInfoType";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@favourite", jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@favourite");
    const result = jsonValue != null ? JSON.parse(jsonValue) : [];
    //Flow type casting
    return (result: RestaurantInfoDetail[]);
  } catch (e) {
    // error reading value
  }
};

export class FavouriteContexValues {
  addFavourtie: (RestaurantInfoDetail) => void;
  removeFavourite: (RestaurantInfoDetail) => void;
  favourites: RestaurantInfoDetail[];
}
export const FavouriteContext: React.Context<any> = createContext();

export const FavouriteContextProvider = (props: Object): React.Element<*> => {
  const [favourites, setFavourites] = useState(([]: RestaurantInfoDetail[]));
  useEffect(() => {
    getData()
      .then((data) => {
        data && setFavourites(data);
      })
      .catch((error) => {
        console.error("get favourite error", error);
      });
  }, []);
  useEffect(() => {
    storeData(favourites);
  }, [favourites]);
  const addFavourtie = (restaurant: RestaurantInfoDetail) => {
    setFavourites([...favourites, restaurant]);
  };
  const removeFavourite = (restaurant: RestaurantInfoDetail) => {
    const filtered = favourites.filter((res) => {
      return res.placeId !== restaurant.placeId;
    });
    setFavourites(filtered);
  };
  const passValue = new FavouriteContexValues();
  passValue.addFavourtie = addFavourtie;
  passValue.removeFavourite = removeFavourite;
  passValue.favourites = favourites;
  return (
    <FavouriteContext.Provider value={passValue}>
      {props.children}
    </FavouriteContext.Provider>
  );
};
