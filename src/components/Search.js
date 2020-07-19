import React, { useState, useEffect } from "react";
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState("cat");
  const [results, setResult] = useState([])


  useEffect(() => {
    const search = async () => {
       const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term

            }
        })
        setResult(data.query.search)
    }
    search()
  

  }, [term])
  const renderedResults = results.map(i => {
      return (
          <div className="item" key={i.pageid}>
              <div className="content">
                <div className="header">
                    {i.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: i.snippet}}>

                </span>
              </div>
          </div>
        )
  })
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
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};
export default Search;
