//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-21 15:51:26
 */
import * as React from "react";
import { useState, createContext, useEffect } from "react";
import { restaurantRequest } from "./restaurant.service";

export const restaurantContext: React.Context<any> = createContext();
export const RestaurantContextProvider = ({
  children,
}: {
  children: Object,
}): React.Element<*> => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    restaurantRequest()
      .then((result) => {
        setIsLoading(false);
        setRestaurants(result);
      })
      .catch((errorInfo: string): void => {
        setIsLoading(false);
        setError(errorInfo);
        console.log("error get restaurants");
      });
  }, []);
  return (
    <restaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </restaurantContext.Provider>
  );
};
