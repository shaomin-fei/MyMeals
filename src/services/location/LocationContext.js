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
  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, queryLocation, setQueryLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};
