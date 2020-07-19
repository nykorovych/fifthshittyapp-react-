import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setIndex] = useState(null);
  const onTitleClick = (index) => {
    setIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : ''
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClick(index)} className={`${active} title`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`${active} content`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}

      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
