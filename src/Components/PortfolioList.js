import React from "react";

function PortfolioList({ title, id, active, setSelected }) {
  return (
    <li
      onClick={() => setSelected(id)}
      className={active ? "portfolioList actived" : "portfolioList"}
    >
      {title}
    </li>
  );
}

export default PortfolioList;
