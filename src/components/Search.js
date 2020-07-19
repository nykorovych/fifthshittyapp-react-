import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("cat");
  const [results, setResult] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
  }, [term]);
  
  useEffect(() => {
    const search = async () => {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: debouncedTerm,
          },
        });
        setResult(data.query.search);
      };
      search()
  }, [debouncedTerm])

  
  const renderedResults = results.map((i) => {
    return (
      <div className="item" key={i.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${i.pageid}`}
            className="ui button"
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{i.title}</div>
          <span dangerouslySetInnerHTML={{ __html: i.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter to serach</label>
          <input
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            className="input"
          ></input>
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};
export default Search;
