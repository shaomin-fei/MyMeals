//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 19:16:49
 */
import * as React from "react";
import { useState, createContext, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { RestaurantInfoDetail } from "../../flow-types/RestaurantInfoType";
import {
  AuthContext,
  AuthcontextValue,
} from "../authentication/AuthenticationContext";

const storeData = async (value, uid: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`@favourite_${uid}`, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async (uid: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@favourite_${uid}`);
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
  const authContext: AuthcontextValue = useContext(AuthContext);
  let uid = "";
  if (authContext.user && authContext.user.user) {
    uid = authContext.user.user.uid.toString();
  }
  useEffect(() => {
    if (!uid) {
      return;
    }
    getData(uid)
      .then((data) => {
        data && setFavourites(data);
      })
      .catch((error) => {
        console.error("get favourite error", error);
      });
  }, [uid]);
  useEffect(() => {
    if (!uid) {
      return;
    }
    storeData(favourites, uid);
  }, [favourites, uid]);
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
