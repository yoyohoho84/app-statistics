import React, { useState } from "react";

import { Panel, PanelHeader, Button } from "@vkontakte/vkui";

import { TemplatePage } from "../../components/TemplatePage/index";
import "./Home.scss";
import { dataTemplatePages } from "../../helpers";

const Home = ({
  id,
  setActivePanel,
  snackbar,
  fetchedUser,
  setTemplatePage,
  templatePage,
}) => {
  const [renderTemplate, setRenderTemplate] = useState(null);

  return (
    <Panel id={id}>
      {fetchedUser &&
      [554966402, 616935572, 73606509].includes(fetchedUser.id) ? (
        <PanelHeader
          left={
            <>
              {fetchedUser && (
                <>
                  {[554966402, 616935572, 73606509].includes(fetchedUser.id) ? (
                    <Button
                      onClick={() => setActivePanel("admin-panel")}
                      style={{
                        width: "150px",
                        height: "30px",
                        backgroundColor: "#ff6781",
                        borderRadius: "15px",
                        marginLeft: "10px",
                      }}
                    >
                      Админ панель
                    </Button>
                  ) : (
                    ""
                  )}
                </>
              )}
            </>
          }
        ></PanelHeader>
      ) : (
        ""
      )}

      {dataTemplatePages.map((item, index) => {
        if (item.name === templatePage) {
          return (
            <TemplatePage
              key={index}
              icon={item.icon}
              header={item.header}
              title={item.title}
              description={item.description}
              buttonName={item.buttonName}
              next={item.next}
              setTemplatePage={setTemplatePage}
              fn={item.fn && item.fn}
            />
          );
        }
      })}

      {snackbar}
    </Panel>
  );
};

export { Home };
