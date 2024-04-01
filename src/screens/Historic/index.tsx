import React from "react";
import { ScrollView } from "react-native";
import { Header } from "./components/Header";
import { useHistoric } from "./hook";
import { Card } from "./components/Card";

import * as U from "./utils";

export const HistoricScreen: React.FC = () => {
  const { states, actions } = useHistoric();

  return (
    <>
      <Header value={states.searchValue} onChangeText={actions.onChangeText} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", width: "100%" }}
      >
        {U.HistoricList.map((item) => (
          <Card
            key={item.id}
            amount={item.amount}
            category={item.category}
            date={item.date}
            name={item.name}
            price={item.price}
          />
        ))}
      </ScrollView>
    </>
  );
};
