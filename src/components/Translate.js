import React, { useState } from "react";
import DropDown from "./Dropdown";
import Convert from './Convert'

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabin",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "French",
    value: "fr",
  }
];

const Translate = () => {
  const [language, selectLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
            <label >Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <DropDown
        label="Select a Language"
        selected={language}
        onSelectedChange={selectLanguage}
        options={options}
      ></DropDown>
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert text={text} lan={language}></Convert>
    </div>
  );
};

export default Translate;
