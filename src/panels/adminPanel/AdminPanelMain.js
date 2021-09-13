import React, { useState, useEffect, useReducer } from "react";
import {
  Group,
  Header,
  Cell,
  Div,
  Input,
  Button,
  Checkbox,
  Radio,
} from "@vkontakte/vkui";

const AdminPanelMain = ({
  activeTab,
  onChangeAction,
  editLinkGroupMan,
  manAddedGroupId,
  manGroupMailingId,
  womanAddedGroupId,
  womanGroupMailingId,
  getButtonStats,
}) => {
  return (
    <Div>
      {activeTab === "man" ? (
        <>
          <Group
            separator="hide"
            style={{ margin: "55px 20px 0px 20px" }}
            header={<Header mode="secondary">Подписка на группу</Header>}
          >
            <Input
              onChange={(e) => onChangeAction(e, "man-added-group")}
              type="text"
            ></Input>
            <Button
              style={{
                backgroundColor: "#165df5",
                color: "white",
                marginTop: "10px",
                height: " 35px",
              }}
              onClick={() => editLinkGroupMan("man-added-group")}
              mode="commerce"
              size="xl"
              stretched
            >
              Изменить
            </Button>
          </Group>

          <Group
            style={{ margin: "20px 20px 0px 20px" }}
            header={<Header mode="secondary">Подписка на рассылку</Header>}
          >
            <Input
              onChange={(e) => onChangeAction(e, "man-group-mailing")}
              type="text"
            ></Input>

            <Button
              style={{
                backgroundColor: "#165df5",
                color: "white",
                marginTop: "10px",
                height: " 35px",
              }}
              onClick={() => editLinkGroupMan("man-group-mailing")}
              mode="commerce"
              size="xl"
              stretched
            >
              Изменить
            </Button>
          </Group>
        </>
      ) : activeTab === "woman" ? (
        <>
          <Group
            separator="hide"
            style={{ margin: "55px 20px 0px 20px" }}
            header={<Header mode="secondary">Подписка на группу</Header>}
          >
            <Input
              onChange={(e) => onChangeAction(e, "woman-added-group")}
              type="text"
            ></Input>
            <Button
              style={{
                backgroundColor: "#ff6781",
                color: "white",
                marginTop: "10px",
                height: " 35px",
              }}
              onClick={() => editLinkGroupMan("woman-added-group")}
              mode="commerce"
              size="xl"
              stretched
            >
              Изменить
            </Button>
          </Group>

          <Group
            style={{ margin: "20px 20px 0px 20px" }}
            header={<Header mode="secondary">Подписка на рассылку</Header>}
          >
            <Input
              onChange={(e) => onChangeAction(e, "woman-group-mailing")}
              type="text"
            ></Input>

            <Button
              style={{
                backgroundColor: "#ff6781",
                color: "white",
                marginTop: "10px",
                height: " 35px",
              }}
              onClick={() => editLinkGroupMan("woman-group-mailing")}
              mode="commerce"
              size="xl"
              stretched
            >
              Изменить
            </Button>
          </Group>
        </>
      ) : activeTab === "stats" ? (
        <Group
          separator="hide"
          style={{
            margin: "55px 20px 0px 20px",
            backgroundColor: "#60c5f0",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <Div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Div>ПРИЧИНА СМЕРТИ:</Div>
            <Div>{getButtonStats?.button1}</Div>
          </Div>
          <Div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Div>ИМЯ СУЖЕНОГО :</Div>
            <Div>{getButtonStats?.button2}</Div>
          </Div>
          <Div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Div>История:</Div>
            <Div>{getButtonStats?.button3}</Div>
          </Div>
        </Group>
      ) : (
        <>
          <Group
            separator="hide"
            style={{ margin: "55px 20px 0px 20px" }}
            header={
              <Header mode="secondary">Укажите ссылку на приложения</Header>
            }
          >
            <Input
              onChange={(e) => onChangeAction(e, "app-id")}
              type="text"
            ></Input>
            <Button
              style={{
                backgroundColor: "#520559",
                color: "white",
                marginTop: "10px",
                height: " 35px",
              }}
              onClick={() => editLinkGroupMan("app-id")}
              mode="commerce"
              size="xl"
              stretched
            >
              Изменить
            </Button>
          </Group>

          <Group
            style={{ margin: "20px 20px 0px 20px" }}
            header={
              <Header mode="secondary">Ссылка для рассылки мужчинам</Header>
            }
          >
            <Input
              onChange={(e) => onChangeAction(e, "main-group-mailing-man")}
              type="text"
            ></Input>
            {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Radio   name="public" value="1" defaultChecked>
                Паблик
              </Radio>
              <Radio name="sub" value="2">
                Рассылка
              </Radio>
            </div> */}

            <Button
              style={{
                backgroundColor: "#520559",
                color: "white",
                marginTop: "10px",
                height: " 35px",
              }}
              onClick={() => editLinkGroupMan("main-group-mailing-man")}
              mode="commerce"
              size="xl"
              stretched
            >
              Изменить
            </Button>
          </Group>

          <Group
            style={{ margin: "20px 20px 0px 20px" }}
            header={
              <Header mode="secondary">Ссылка для подписки женщинам</Header>
            }
          >
            <Input
              onChange={(e) => onChangeAction(e, "main-group-mailing-woman")}
              type="text"
            ></Input>

            <Button
              style={{
                backgroundColor: "#520559",
                color: "white",
                marginTop: "10px",
                height: " 35px",
              }}
              onClick={() => editLinkGroupMan("main-group-subscribe-woman")}
              mode="commerce"
              size="xl"
              stretched
            >
              Изменить
            </Button>
          </Group>
        </>
      )}
    </Div>
  );
};

export { AdminPanelMain };
