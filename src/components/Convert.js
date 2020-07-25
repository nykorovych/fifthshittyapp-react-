import React, { useState, useEffect } from "react";
import axios from "axios";

// https://translation.googleapis.com/language/translate/v2
const Convert = ({ lan, text }) => {
  const [translatedText, doTranslate] = useState("");
  const [debouncedText, setDebouncedText] = useState(text)

  useEffect(() => {
     const timerID = setTimeout(() => {
        setDebouncedText(text)
     }, 1000 )
     return () => {
         clearTimeout(timerID)
     }
  }, [text])

  useEffect(() => {
    const doTranslation = async () => {
      const res = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: lan.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      doTranslate(res.data.data.translations[0].translatedText)
    };
    doTranslation()
  }, [lan, debouncedText]);
  return (
      <div>
          <h1 className="ui header">
            {translatedText}
          </h1>
      </div>
  )
};
export default Convert;
