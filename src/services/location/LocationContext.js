//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 10:10:17
 */
import * as React from "react";
import { useState, createContext, useEffect } from "react";
import { LocationInfo } from "../../flow-types/LocationTInfo";

import { requestLocation } from "./LocationService";
import * as Location from "expo-location";

export const LocationContext: React.Context<any> = createContext();

export const LocationContextProvider = (
  {
    children,
  }: {
    children: ?Object,
  } = { children: null }
): React.Element<*> => {
  const [queryLocation, setQueryLocation] = useState("antwerp");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(new LocationInfo());
  useEffect(() => {
    if (!queryLocation) {
      return;
    }
    setIsLoading(true);
    requestLocation(queryLocation)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
        setError(errorInfo);
      });
  }, [queryLocation]);
  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setError("Permission to access location was denied");
          return;
        }

        const result = await Location.getCurrentPositionAsync({});
        const loc = new LocationInfo();
        loc.geometry.lat = result.coords.latitude;
        loc.geometry.lng = result.coords.longitude;
        setLocation(loc);
      } catch (errorInfo) {
        setError(errorInfo.message);
      }
    })();
  }, []);
  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, queryLocation, setQueryLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};
