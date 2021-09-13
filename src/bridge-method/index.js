import bridge from "@vkontakte/vk-bridge";
import axios from "axios";
import { GROUP_ID_SUBSCRIPTION, APP_ID } from "../constants";

const incrementCountButton = (type) => {
  axios
    .post("https://ods-studio.ru/illuminate/edit", {
      key: type,
      value: 1,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// получение токена пользователя
export function getUserToken(setUserToken, setGotToken, appID) {
  bridge
    .send("VKWebAppGetAuthToken", {
      app_id: appID,
      scope: "friends,wall,photos, stories",
    })
    .then((res) => {
      console.log("VKWebAppGetAuthToken res:", res);
      setUserToken(res.access_token);

      setGotToken(true);
    })
    .catch((err) => {
      bridge
        .send("VKWebAppGetAuthToken", {
          app_id: appID,
          scope: "friends,wall,photos, stories",
        })
        .then((response) => {
          console.log("VKWebAppGetAuthToken response:", response);
          setUserToken(response.access_token);

          setGotToken(true);
        })
        .catch((error) => {
          console.log("VKWebAppGetAuthToken error:", error);
        });
      console.log("VKWebAppGetAuthToken err:", err);
    });
}

// разрешение на отправку сообщений от имени группы
export function subscribeMessageFromGroupDefault(groupIDsubscription) {
  bridge
    .send("VKWebAppAllowMessagesFromGroup", {
      group_id: groupIDsubscription,
    })
    .then((res) => {
      // console.log("subscribeMessageFromGroup result", res);
    })
    .catch((err) => {
      bridge
        .send("VKWebAppAllowMessagesFromGroup", {
          group_id: groupIDsubscription,
        })
        .then((res) => {
          // console.log("subscribeMessageFromGroup result", res);
        })
        .catch((err) => {
          // console.log("subscribeMessageFromGroup result", err);
        });
    });
}

// разрешение на отправку сообщений от имени группы
export function subscribeMessageFromGroupTasks(
  openAlert,
  groupIDsubscription,
  typeState
) {
  bridge
    .send("VKWebAppAllowMessagesFromGroup", {
      group_id: groupIDsubscription,
    })
    .then((res) => {
      // console.log("subscribeMessageFromGroup result", res);
      typeState(true);
      incrementCountButton("stats.button2");
    })
    .catch((err) => {
      // console.log("subscribeMessageFromGroup result", err);

      openAlert(
        `Чтобы узнать результат, разрешите отправку сообщений от имени группы`,
        "red"
      );
      typeState(false);
    });
}

// подписка на группу
export function addGroup(openAlert, group_id, typeState) {
  console.log("add group");

  bridge
    .send("VKWebAppJoinGroup", { group_id: group_id })
    .then(({ result }) => {
      console.log("VKWebAppJoinGroup res", result);
      typeState(true);
      incrementCountButton("stats.button1");
      // if (result) {
      //   openAlert("Вы уже подписаны на группу");
      // }
    })
    .catch((err) => {
      openAlert("Подпишитесь на группу, чтобы узнать результат", "red");
      typeState(false);
    });
}

// добавление сервиса в сообщество
export function AddToCommunity() {
  bridge
    .send("VKWebAppAddToCommunity", {})
    .then((res) => {
      if (res.group_id) {
        console.log("AddToCommunity res:", res.group_id);
        return true;
      }
    })
    .catch((err) => {
      console.log("AddToCommunity err:", err);
      return false;
    });
}

// открытие др приложение
export function goToApp(appID) {
  bridge.send("VKWebAppOpenApp", { app_id: appID, location: "GLI" });
}
