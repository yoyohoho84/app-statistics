import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  TabbarItem,
  Epic,
  Div,
  Tabbar,
  ConfigProvider,
  ActionSheet,
  ActionSheetItem,
  Snackbar,
  Avatar,
  CellButton,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { Icon16Done } from "@vkontakte/icons";
import { Icon16Cancel } from "@vkontakte/icons";

// import Icon16Done from "@vkontakte/icons/dist/16/done";
// import Icon16Cancel from "@vkontakte/icons/dist/16/cancel";

import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";

import "./styles/reset.sass";
import "./styles/panels.sass";
import "./styles/img.sass";

//constants
import {
  APP_IMG_SHARING_STORIES,
  APP_ID,
  USER_ID,
  GROUP_ID_SUBSCRIPTION_MAIN,
} from "./constants";

import { sharing } from "./sharing-method";
import { nativeAds } from "./ads";
import { subscribeMessageFromGroupDefault, addGroup } from "./bridge-method";

import { Home, DefaultPanel, ResultPanel, AdminPanel } from "./panels";
import axios from "axios";
import { getRandomInt } from "@vkontakte/vkjs";

window.globalURLSharing = {
  url: 0,
};

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState();
  const [IMGresult, setIMGresult] = useState(null);
  const [urlSharing, setUrlSharing] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [snackbar, setSnackbar] = useState(null);
  const [userToken, setUserToken] = useState("");
  const [getPlatform, setGetPlatform] = useState("");
  const [gotToken, setGotToken] = useState(false);
  const [getGroupId, setGetGroupId] = useState({});
  const [getButtonStats, setGetButtonStats] = useState({});
  const [mainGroupMailingId, setMainGroupMailingId] = useState("");
  const [mainGroupSubWoman, setMainGroupSubWoman] = useState("");
  const [appID, setAppID] = useState("");
  const [templatePage, setTemplatePage] = useState("home");

  const getStats = () => {
    axios
      .get("https://ods-studio.ru/illuminate/get")
      .then(function (response) {
        console.log("getStats", response.data);
        setGetGroupId(response.data.links);
        setGetButtonStats(response.data.stats);
        setMainGroupMailingId(response.data.links.msgMainMan);
        setMainGroupSubWoman(response.data.links.subMainWoman);

        setAppID(response.data.links.appID);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  // получение группы с сервера
  useEffect(() => {
    console.log("fetchedUser", fetchedUser?.sex);
    getStats();
  }, [fetchedUser]);

  useEffect(() => {
    // Определение ОС
    bridge
      .send("VKWebAppGetClientVersion")
      .then((result) => {
        setGetPlatform(result.platform);
      })
      .catch((err) => console.log(err));
  }, []);

  function openAlert(text, backgroundColor = "green") {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        duration="12000"
        layout="horizontal"
        onClose={() => setSnackbar(null)}
        before={
          <Avatar size={24} style={{ backgroundColor }}>
            {backgroundColor === "green" ? (
              <Icon16Done fill="#fff" width={14} height={14} />
            ) : (
              <Icon16Cancel fill="#fff" width={14} height={14} />
            )}
          </Avatar>
        }
      >
        {text}
      </Snackbar>
    );
  }

  function getRandomImg(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается

    globalURLSharing.url = result;
    setIMGresult(<Div className={`icon${result}`}></Div>);
  }

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <ConfigProvider isWebView={true}>
      <View activePanel={activePanel} popout={popout} modal={activeModal}>
        <Home
          id="home"
          fetchedUser={fetchedUser}
          go={go}
          setIMGresult={setIMGresult}
          getRandomImg={getRandomImg}
          setActivePanel={setActivePanel}
          getPlatform={getPlatform}
          gotToken={gotToken}
          openAlert={openAlert}
          snackbar={snackbar}
          fetchedUser={fetchedUser}
          templatePage={templatePage}
          setTemplatePage={setTemplatePage}
        />
        <DefaultPanel
          id="default-panel"
          fetchedUser={fetchedUser}
          go={go}
          openAlert={openAlert}
          setActivePanel={setActivePanel}
          snackbar={snackbar}
          getPlatform={getPlatform}
          fetchedUser={fetchedUser}
        />
        <ResultPanel
          id="result-panel"
          fetchedUser={fetchedUser}
          go={go}
          IMGresult={IMGresult}
          urlSharing={urlSharing}
          getPlatform={getPlatform}
          openAlert={openAlert}
          snackbar={snackbar}
          getGroupId={getGroupId}
          appID={appID}
        />
        <AdminPanel
          id="admin-panel"
          fetchedUser={fetchedUser}
          go={go}
          openAlert={openAlert}
          snackbar={snackbar}
          getButtonStats={getButtonStats}
          getStats={getStats}
        />
      </View>
    </ConfigProvider>
  );
};

export default App;
