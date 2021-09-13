import React, { useState, useEffect, useReducer } from "react";

import {
  PanelHeader,
  PanelHeaderBack,
  FixedLayout,
  Tabs,
  TabsItem,
  Div,
  Avatar,
  HorizontalScroll,
  PanelHeaderButton,
} from "@vkontakte/vkui";
import { Icon28RefreshOutline } from "@vkontakte/icons";

const AdminPanelHeader = ({ go, tab, activeTab, getStats }) => {
  return (
    <>
      <PanelHeader
        left={<PanelHeaderBack onClick={go} data-to="home" />}
        right={
          <PanelHeaderButton>
            <Icon28RefreshOutline width={20} height={20} color="red" />
          </PanelHeaderButton>
        }
      >
        <Div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              color: "#60c5f0",
            }}
          >
            {" "}
            Админ панель
          </h2>

          <PanelHeaderButton onClick={getStats}>
            <Icon28RefreshOutline fill="#60c5f0" />
          </PanelHeaderButton>
        </Div>
      </PanelHeader>

      <FixedLayout vertical="top" filled={true}>
        <Tabs>
          <HorizontalScroll>
            <TabsItem
              onClick={() => {
                tab("man");
              }}
              selected={activeTab === "man"}
            >
              Мужчинам
            </TabsItem>
            <TabsItem
              onClick={() => {
                tab("woman");
              }}
              selected={activeTab === "woman"}
            >
              Женщинам
            </TabsItem>
            <TabsItem
              onClick={() => {
                tab("stats");
              }}
              selected={activeTab === "stats"}
            >
              Статистика
            </TabsItem>
            <TabsItem
              onClick={() => {
                tab("main");
              }}
              selected={activeTab === "main"}
            >
              Основное
            </TabsItem>
          </HorizontalScroll>
        </Tabs>
      </FixedLayout>
    </>
  );
};

export { AdminPanelHeader };
