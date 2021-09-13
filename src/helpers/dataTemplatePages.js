import {
  DoorIcon,
  SettingIcon,
  LikeIcon,
  StatsIcon,
  RocketIcon,
} from "../icons";
import { sharing } from "../sharing-method";
import { APP_IMG_SHARING_STORIES, APP_ID_DEFAULT } from "../constants";

export const dataTemplatePages = [
  {
    name: "home",
    icon: <DoorIcon />,
    header: "Привет!",
    title:
      "Наше приложение не является официальным и не может предоставлять точную статистику*",
    description:
      "* Приблизительные цифры высчитываются по формуле разработанной при анализе специальной фокус группы.",
    buttonName: "Ок",
    next: "access-request",
  },
  {
    name: "access-request",
    icon: <SettingIcon />,
    header: "Разрешите доступ",
    title: "Это необходимо для того, чтобы я смог получить твои данные",
    description: "",
    buttonName: "Хорошо",
    next: "like",
  },
  {
    name: "like",
    icon: <LikeIcon />,
    header: "Отлично",
    title: "Теперь я могу проверить твои данные",
    description: "",
    buttonName: "Начать анализ",
    next: "search",
  },
  {
    name: "search",
    icon: <StatsIcon />,
    header: "Провожу анализ",
    title: "Ищу дату регистрации...",
    description: "",
    buttonName: "",
    next: "result",
    fn: (action) =>
      setTimeout(() => {
        action("result");
      }, 3000),
  },
  {
    name: "result",
    icon: <RocketIcon />,
    header: "Анализ завершён",
    title: "Ну что, посмотрим, сколько времени отняло у тебя Вконтакте?",
    description: "",
    buttonName: "Опубликовать анализ в истории",
    next: "result",
    fn: () =>
      sharing(
        "story",
        null,
        null,
        APP_IMG_SHARING_STORIES[globalURLSharing.url],
        null,
        7949046
      ),
  },
];
