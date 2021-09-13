import React, { useEffect } from "react";

import { FormItem, NativeSelect } from "@vkontakte/vkui";

const InputItem = ({ question, answer_1, answer_2, answer_3, answer_4 }) => {
  return (
    <FormItem top={question}>
      <NativeSelect>
        <option value="yes">{answer_1}</option>
        <option value="yes">{answer_2}</option>
        <option value="no">{answer_3}</option>
        {answer_4 && <option value="no">{answer_4}</option>}
      </NativeSelect>
    </FormItem>
  );
};

export { InputItem };
