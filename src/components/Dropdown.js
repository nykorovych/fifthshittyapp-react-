import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onselectChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef()

  useEffect(() => {
      document.body.addEventListener('click', (e) => {
          if(ref.current.contains(e.target)) {
            return  
        }
        setOpen(false)
          console.log(e)
      })
  }, [])
  const renderedOptions = options.map((o) => {
    if (o.value === selected.value) {
      return null;
    }
    return (
      <div onClick={() => onselectChange(o)} className="item">
        {o.label}
      </div>
    );
  });
  console.log(ref.current)
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a colour</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${ open? 'visible transition': ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
