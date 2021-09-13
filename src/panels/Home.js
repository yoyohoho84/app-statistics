import React from "react";

import {
  Panel,
  PanelHeader,
  Button,
  Div,
  Group,
  FormItem,
  NativeSelect,
  Select,
} from "@vkontakte/vkui";
import { dataInput } from "../helpers";
// import { InputItem } from "../components";

const Home = ({
  id,
  go,
  getRandomImg,
  setIMGresult,
  setActivePanel,
  getPlatform,
  gotToken,
  snackbar,
  fetchedUser,
}) => {
  // const renderInputs = dataInput.map((item, index) => {
  //   return (
  //     <InputItem
  //       key={item.id}
  //       question={item.question}
  //       answer_1={item.answer_1}
  //       answer_2={item.answer_2}
  //       answer_3={item.answer_3}
  //       answer_4={item.answer_4}
  //     />
  //   );
  // });

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

      <Div>
        <Group>
          <Div className="container">
            <Div className="icon"></Div>
            <Div className="main">
              <Div className="header"></Div>
              <Div className="title"></Div>
              <Div className="description"></Div>

              <Button
                onClick={() => {
                  getRandomImg(0, 4);
                  gotToken && publishStories();
                  setActivePanel("result-panel");
                }}
                // onClick={publishStories}
                stretched
                style={{
                  //   width: "200px",
                  height: "60px",
                  backgroundColor: "white",
                  marginTop: "5px",
                  borderRadius: "40px",
                }}
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  Узнать результат
                </span>
              </Button>
            </Div>
          </Div>
        </Group>
      </Div>
      {snackbar}
    </Panel>
  );
};

export { Home };
