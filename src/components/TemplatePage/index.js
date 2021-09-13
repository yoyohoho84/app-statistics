import React from "react";

import { Button } from "@vkontakte/vkui";
import "./TemplatePage.scss";

const TemplatePage = ({
  icon,
  header,
  title,
  description,
  buttonName,
  setTemplatePage,
  name,
  next,
  fn,
}) => {
  return (
    <div className="container">
      <div className="container__icon">{icon}</div>
      <div className="container__main">
        <div className="header">{header}</div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>

      <div className="buttons">
        {buttonName && (
          <Button
            onClick={() => {
              setTemplatePage(next);
              fn && fn();
              if (name === "search") {
                setTimeout(() => {
                  setTemplatePage(next);
                }, 5000);
              }
            }}
            // onClick={() => {
            //   getRandomImg(0, 4);
            //   gotToken && publishStories();
            //   setActivePanel("result-panel");
            // }}
            className="buttons"
            stretched
          >
            <span>{buttonName}</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export { TemplatePage };
