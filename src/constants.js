import axios from "axios";

let APP_ID_DEFAULT = 7949046;
let GROUP_ID_SUBSCRIPTION_MAIN_DEFAULT = 203421564;
axios
  .get("https://ods-studio.ru/illuminate/get")
  .then(function (response) {
    console.log("CONSTANTS", response.data);
    APP_ID_DEFAULT = response.data.links.appID;
    GROUP_ID_SUBSCRIPTION_MAIN_DEFAULT = response.data.links.msgMain;
    console.log("CONSTANTS appID", APP_ID_DEFAULT);
  })
  .catch(function (error) {
    console.log(error);
    APP_ID_DEFAULT = 7812418;
    GROUP_ID_SUBSCRIPTION_MAIN_DEFAULT = 203421564;
  });

export const APP_ID = APP_ID_DEFAULT;

// кнопка № 1 (причина смерти) подписка на паблик
export const GROUP_ID_ADDED_WOMAN = 203108785;
export const GROUP_ID_ADDED_MAN = 203515540;
// кнопка № 2 (имя суженого) подписка на рассылку
export const GROUP_ID_SUBSCRIPTION_MAN = 203508688;
export const GROUP_ID_SUBSCRIPTION_WOMAN = 5184003;
// паблик при входе в приложение с запросом на рассылку
export const GROUP_ID_SUBSCRIPTION_MAIN = GROUP_ID_SUBSCRIPTION_MAIN_DEFAULT;
// паблик при входе в приложение с запросом подписки
// export const GROUP_ID_SUBSCRIPTION_MAIN = 203421564;

export const USER_ID = Number(
  new URLSearchParams(document.location.search).get("vk_user_id")
);
export const NAME_PROJECT = "App statistics";
export const NAME_PROJECT_LOWER_CASE = "APP STATISTICS";
export const APP_IMG_SHARING_STORIES = [
  "https://sun9-53.userapi.com/impg/a0fyVA24dAiICnpg6PLuoHgcMZK__2DFSX4G7Q/Z_FAmvQLKw0.jpg?size=579x807&quality=96&sign=c68255377a84ad31deb7febde1b8de3e&type=album",
  "https://sun9-47.userapi.com/impg/x_oqtb7YiGP_HOXrDO2JXKZO3j-KQrNV3ljglQ/ynuIGESmw1A.jpg?size=579x807&quality=96&sign=d19983049bf32c730d4e4393d7a74c1b&type=album",
  "https://sun9-69.userapi.com/impg/U9DJKzK-47acYOdmECrd-_ytc2EqeHp_9GKyeg/_luMg3mwpUY.jpg?size=579x807&quality=96&sign=427c41da6c036a534436c9cb52e60e88&type=album",
  "https://sun9-14.userapi.com/impg/1FFkrEFmyhtGEdN4UKQ2NTR-f3gkIU8w2QP7ag/Hj56c1053cI.jpg?size=579x807&quality=96&sign=39bcaaa1a19b821e3086b336e7d1eb8e&type=album",
];
