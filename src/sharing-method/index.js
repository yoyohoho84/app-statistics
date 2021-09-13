import bridge from "@vkontakte/vk-bridge";
import axios from "axios";
import { APP_ID, APP_IMG_SHARING_STORIES, USER_ID } from "../constants";

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

export function sharing(type, openAlert, e, urlSharing, typeState, appID) {
  switch (type) {
    case "share-link":
      shareLink();
      break;
    case "copy-link":
      copyLink(openAlert);
      break;
    case "story":
      story(urlSharing, appID);
      break;
    case "story-task":
      storyTask(urlSharing, openAlert, typeState, appID);
      break;
    case "share-wall":
      share(e, urlSharing);
      break;
    default:
      break;
  }
}

function shareLink() {
  const link = `https://vk.com/app${APP_ID}`;
  bridge.send("VKWebAppShare", {
    link: link,
  });
}

// Копирование в буфер
function copyLink(openAlert) {
  const link = `https://vk.com/app${APP_ID}`;
  bridge
    .send("VKWebAppGetClientVersion")
    .then((result) => {
      console.log(result.platform);
      if (result.platform === "web" || result.platform === "mobile-web") {
        window.navigator.clipboard.writeText(link).then(
          () => {
            console.log("successfully set", link);
            openAlert("Ссылка скопирована");
          },
          () => {
            console.log("write failed", link);
          }
        );
      } else {
        bridge.send("VKWebAppCopyText", { text: link });
        openAlert("Ссылка скопирована");
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
}

//  Поделиться в истории
function story(urlSharing) {
  const url = `https://vk.com/app${APP_ID}`;

  bridge.send("VKWebAppShowStoryBox", {
    background_type: "image",
    url: urlSharing,
    attachment: {
      text: "go_to",
      type: "url",
      url: url,
    },
  });
}

//  Поделиться в истории по заданию
function storyTask(urlSharing, openAlert, typeState, appID) {
  const url = `https://vk.com/app${appID}`;
  bridge
    .send("VKWebAppShowStoryBox", {
      background_type: "image",
      url: urlSharing,
      attachment: {
        text: "go_to",
        type: "url",
        url: url,
      },
    })
    .then((res) => {
      console.log("VKWebAppShowStoryBox res", res);
      typeState(true);
      incrementCountButton("stats.button3");
    })
    .catch((err) => {
      console.log("VKWebAppShowStoryBox err", err);
      openAlert(`Чтобы узнать результат, выполните данное задание`, "red");
      typeState(false);
    });
}

//  ДОБАВЛЕНИЕ РЕПОСТА НА СТЕНУ ПОЛЬЗОВАТЕЛЯ
function share(e, urlSharing) {
  e.preventDefault();

  const url = `https://vk.com/app${APP_ID}`;
  const urlPhotoWall = `${urlSharing},https://vk.com/app${APP_ID}`;
  const text = `Узнай если не боишься! Приложение - ${url}`;

  bridge.send("VKWebAppShowWallPostBox", {
    message: text,
    attachments: urlPhotoWall,
  });
}
