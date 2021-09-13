import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Panel } from "@vkontakte/vkui";
import { AdminPanelHeader, AdminPanelMain } from "/";
import { NAME_PROJECT, NAME_PROJECT_LOWER_CASE } from "../../constants";

const AdminPanel = ({
  go,
  id,
  openAlert,
  snackbar,
  getButtonStats,
  getStats,
}) => {
  const [manAddedGroupId, setManAddedGroupId] = useState("");
  const [manGroupMailingId, setManGroupMailingId] = useState("");
  const [womanAddedGroupId, setWomanAddedGroupId] = useState("");
  const [womanGroupMailingId, setWomanGroupMailingId] = useState("");
  const [mainGroupMailingManId, setMainGroupMailingManId] = useState("");
  const [mainGroupMailingWomanId, setMainGroupMailingWomanId] = useState("");
  const [appID, setAppID] = useState("");
  const [activeTab, setActiveTab] = useState("man");
  const typeLink = {
    "woman-added-group": womanAddedGroupId,
    "woman-group-mailing": womanGroupMailingId,
    "man-added-group": manAddedGroupId,
    "man-group-mailing": manGroupMailingId,
    "main-group-mailing-man": mainGroupMailingManId,
    "main-group-subscribe-woman": mainGroupMailingWomanId,
    "app-id": appID,
  };

  const typeLinkKey = {
    "woman-added-group": "links.subW",
    "woman-group-mailing": "links.msgW",
    "man-added-group": "links.subM",
    "man-group-mailing": "links.msgM",
    "main-group-mailing-man": "links.msgMainMan",
    "main-group-subscribe-woman": "links.subMainWoman",
    "app-id": "links.appID",
  };

  function tab(type) {
    switch (type) {
      case "man":
        setActiveTab(type);
        break;
      case "woman":
        setActiveTab(type);
        break;
      case "stats":
        setActiveTab(type);
        break;
      case "main":
        setActiveTab(type);
        break;
      default:
        break;
    }
  }

  function editLinkGroupMan(type) {
    // if (
    //   !manAddedGroupId ||
    //   !manGroupMailingId ||
    //   !womanAddedGroupId ||
    //   !womanGroupMailingId
    // ) {
    //   openAlert("Вы не ввели ссылку на группу", "red");
    // }

    axios
      .post("https://ods-studio.ru/illuminate/edit", {
        key: typeLinkKey[type],
        value: typeLink[type],
      })
      .then(function (response) {
        console.log(response);
        if (response.data === "ok") {
          openAlert(
            type === "app-id"
              ? "Вы успешно изменили ссылку на приложение"
              : "Вы успешно изменили ссылку на группу"
          );
        } else {
          openAlert("Вы указали невалидную ссылку", "red");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function onChangeAction(e, type) {
    const value = e.target.value.trim();

    switch (type) {
      case "woman-added-group":
        setWomanAddedGroupId(value);
        break;
      case "woman-group-mailing":
        setWomanGroupMailingId(value);
        break;
      case "man-added-group":
        console.log("man-added-group:", value);
        setManAddedGroupId(value);
        break;
      case "man-group-mailing":
        console.log("man-group-mailing:", value);
        setManGroupMailingId(value);
        break;
      case "main-group-mailing-man":
        console.log("main-group-mailing-man:", value);
        setMainGroupMailingManId(value);
        break;
      case "main-group-mailing-woman":
        console.log("main-group-mailing-woman:", value);
        setMainGroupMailingWomanId(value);
        break;
      case "app-id":
        console.log("app-id:", value);
        setAppID(value);
        break;
      default:
        break;
    }
  }

  return (
    <Panel id={id}>
      <AdminPanelHeader
        go={go}
        tab={tab}
        activeTab={activeTab}
        getStats={getStats}
      />
      <AdminPanelMain
        activeTab={activeTab}
        onChangeAction={onChangeAction}
        editLinkGroupMan={editLinkGroupMan}
        NAME_PROJECT={NAME_PROJECT}
        manAddedGroupId={manAddedGroupId}
        manGroupMailingId={manGroupMailingId}
        womanAddedGroupId={womanAddedGroupId}
        womanGroupMailingId={womanGroupMailingId}
        getButtonStats={getButtonStats}
      />

      {snackbar}
    </Panel>
  );
};

export { AdminPanel };
