//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-21 15:51:26
 */
import * as React from "react";
import { useState, createContext, useMemo, useEffect } from "react";
import {
  restaurantDataTransform,
  restaurantRequest,
} from "./restaurant.service";

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
      })
      .catch((errorInfo: string): void => {
        setIsLoading(false);
        setError(errorInfo);
      });
  }, []);
  return (
    <restaurantContext.Provider
      value={{
        restaurants: [
          { title: "1", key: "0" },
          { title: "2", key: "1" },
          { title: "3", key: "2" },
          { title: "4", key: "3" },
        ],
      }}
    >
      {children}
    </restaurantContext.Provider>
  );
};
