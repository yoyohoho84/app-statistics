import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Panel,
  PanelHeader,
  Button,
  Div,
  Group,
  FormItem,
  NativeSelect,
} from "@vkontakte/vkui";
import Fade from "react-reveal/Fade";
import { getRandomInt } from "@vkontakte/vkjs";

//constants
import { APP_IMG_SHARING_STORIES } from "../constants";

import { nativeAds } from "../ads";
import { sharing } from "../sharing-method";
import { addGroup, subscribeMessageFromGroupTasks } from "../bridge-method";
import {
  causeofDeathData,
  nameBetrothedDataMan,
  sexPlaceData,
  nameBetrothedDataWoman,
} from "../helpers";

const ResultPanel = ({
  id,
  go,
  IMGresult,
  getPlatform,
  openAlert,
  snackbar,
  fetchedUser,
  getGroupId,
  appID,
}) => {
  const [death, setDeath] = useState(false);
  const [betrothed, setBetrothed] = useState(false);
  const [sex, setSex] = useState(false);
  const [deathRes, setDeathRes] = useState(
    causeofDeathData[getRandomInt(0, causeofDeathData.length - 1)]
  );
  const [betrothedManRes, setBetrothedManRes] = useState(
    nameBetrothedDataMan[getRandomInt(0, nameBetrothedDataMan.length - 1)]
  );
  const [betrothedWomanRes, setBetrothedWomanRes] = useState(
    nameBetrothedDataWoman[getRandomInt(0, nameBetrothedDataWoman.length - 1)]
  );
  const [sexRes, setSexRes] = useState(
    sexPlaceData[getRandomInt(0, sexPlaceData.length - 1)]
  );

  useEffect(() => {
    console.log("fetchedUser?.sex", fetchedUser?.sex);
    setTimeout(() => {
      // nativeAds();
    }, 1000);
  }, []);

  return (
    <Panel id={id}>
      <PanelHeader
        separator={false}
        left={
          <Div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Div
              onClick={() =>
                sharing(
                  "story",
                  null,
                  null,
                  APP_IMG_SHARING_STORIES[globalURLSharing.url],
                  null,
                  appID
                )
              }
              style={{
                background:
                  "linear-gradient(90deg, rgba(247,106,171,1) 0%, rgba(0,212,255,1) 100%)",
                borderRadius: "9px",
                marginLeft: "10px",
                fontSize: "14px",
                height: "28px",
                width: "170px",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
              }}
            >
              Поделиться в истории
            </Div>

            <Div></Div>
          </Div>
        }
      ></PanelHeader>

      <Div
        className={
          getPlatform === "web" ? "ResultPanelWeb" : "ResultPanelMobile"
        }
        style={{
          paddingBottom: "20px",
        }}

        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   justifyContent: "space-around",
        //   // height: "450px",

        //   // marginTop: "150px",
        // }}
      >
        <Div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            // marginTop: "150px",
          }}
        >
          {IMGresult}

          <Div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "300px",

              // marginTop: "150px",
            }}
          >
            <Div
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              ПРИЧИНА СМЕРТИ
            </Div>
            <Div>
              {" "}
              <Button
                onClick={() => {
                  addGroup(
                    openAlert,
                    // fetchedUser.sex === 2
                    //   ? GROUP_ID_ADDED_MAN
                    //   : GROUP_ID_ADDED_WOMAN,
                    fetchedUser?.sex === 2 ? getGroupId.subM : getGroupId.subW,
                    setDeath
                  );
                  // incrementCountButton("stats.button1");
                }}
                style={{
                  width: "60px",
                  height: "20px",
                  backgroundColor: "white",
                  marginTop: "5px",
                  borderRadius: "10px",
                }}
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  Узнать
                </span>
              </Button>
            </Div>
          </Div>
          {death && (
            <Fade left duration={3000}>
              <Div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "300px",
                  height: "60px",
                  border: "solid white 1px",
                  borderRadius: "15px",
                  margin: "8px",
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  // padding: "5px",
                }}
              >
                {deathRes}
              </Div>
            </Fade>
          )}

          <Div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "300px",

              // marginTop: "150px",
            }}
          >
            <Div
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              ИМЯ СУЖЕНОГО
            </Div>
            <Div>
              {" "}
              <Button
                onClick={() => {
                  subscribeMessageFromGroupTasks(
                    openAlert,
                    // fetchedUser.sex === 2
                    //   ? GROUP_ID_SUBSCRIPTION_MAN
                    //   : GROUP_ID_SUBSCRIPTION_WOMAN,
                    fetchedUser?.sex === 2 ? getGroupId.msgM : getGroupId.msgW,
                    setBetrothed
                  );
                  // incrementCountButton("stats.button2");
                }}
                style={{
                  width: "60px",
                  height: "20px",
                  backgroundColor: "white",
                  marginTop: "5px",
                  borderRadius: "10px",
                }}
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  Узнать
                </span>
              </Button>
            </Div>
          </Div>

          {betrothed && (
            <Fade right duration={3000}>
              <Div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "300px",
                  height: "30px",
                  border: "solid white 1px",
                  borderRadius: "15px",
                  margin: "8px",
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                }}
              >
                {fetchedUser?.sex === 2 ? betrothedWomanRes : betrothedManRes}
              </Div>
            </Fade>
          )}

          <Div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "300px",

              // marginTop: "150px",
            }}
          >
            <Div
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              МЕСТО ПЕРВОГО/СЛЕДУЮЩЕГО СЕКСА
            </Div>
            <Div>
              {" "}
              <Button
                onClick={() => {
                  sharing(
                    "story-task",
                    openAlert,
                    null,
                    APP_IMG_SHARING_STORIES[globalURLSharing.url],
                    setSex,
                    appID
                  );
                  // incrementCountButton("stats.button3");
                }}
                style={{
                  width: "60px",
                  height: "20px",
                  backgroundColor: "white",
                  marginTop: "5px",
                  borderRadius: "10px",
                }}
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  Узнать
                </span>
              </Button>
            </Div>
          </Div>

          {sex && (
            <Fade left duration={3000}>
              <Div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "300px",
                  height: "30px",
                  border: "solid white 1px",
                  borderRadius: "15px",
                  margin: "8px",
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                }}
              >
                {sexRes}
              </Div>
            </Fade>
          )}

          <Div>
            <Button
              onClick={go}
              data-to="home"
              style={{
                width: "300px",
                height: "40px",
                backgroundColor: "white",
                marginTop: "5px",
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Пройти еще раз
              </span>
            </Button>
          </Div>
        </Div>
      </Div>
      {snackbar}
    </Panel>
  );
};

export { ResultPanel };
