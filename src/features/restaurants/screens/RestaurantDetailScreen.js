//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-22 14:09:39
 */

import * as React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { RestaurantInfoDetail } from "../../../flow-types/RestaurantInfoType";

export const RestaurantDetailScreen = ({
  route,
}: {
  route: Object,
}): React.Element<*> => {
  const restaurantInfoDetail: RestaurantInfoDetail =
    route.params.restaurantDetail;

  const [expandBreakfast, setExpandBreakfast] = useState(true);
  const [expandLunch, setExpandLunch] = useState(true);
  const [expandDinner, setExpandDinner] = useState(true);
  const [expandDrink, setExpandDrink] = useState(true);
  return (
    <SafeAreaView>
      <RestaurantInfoCard restaurantInfoDetail={restaurantInfoDetail} />
      <ScrollView>
        <List.Section title="Accordions">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={expandBreakfast}
            onPress={() => setExpandBreakfast(!expandBreakfast)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={expandLunch}
            onPress={() => setExpandLunch(!expandLunch)}
          >
            <List.Item title="Burger w/ Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={expandDinner}
            onPress={() => setExpandDinner(!expandDinner)}
          >
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
            <List.Item title="Steak Frites" />
          </List.Accordion>

          <List.Accordion
            title="Drink"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={expandDrink}
            onPress={() => setExpandDrink(!expandDrink)}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
};
