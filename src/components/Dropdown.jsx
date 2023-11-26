import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Dropdown({ value, dispatch, data, title }) {
  const [open, setOpen] = useState(false);

  function handleClick(item) {
    dispatch({
      type: `Update-${title}`,
      payload: item.title,
    });
    setOpen(false);
  }

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={() => setOpen((open) => !open)}>
        <div>{value}</div>
        <IoIosArrowDown size={15} />
      </button>
      <div
        className={`dropdown-content ${
          open ? "height-final" : "height-initial"
        }`}
      >
        {data.map((item) => (
          <button
            key={item.id}
            className="item"
            onClick={() => handleClick(item)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <style jsx>
        {`
          .dropdown {
            width: 100px;
          }

          .dropdown-btn {
            display: flex;
            width: 100%;
            height: 30px;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #b8bbc6;
            cursor: pointer;
            border-radius: 4px;
            padding: 0 8px 0 8px;
            background-color: #fcfcfc;
            position: relative;
          }

          .dropdown-content {
            width: 100px;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            background-color: #fcfcfc;
            height: ${data.length * 30}px;
            justify-content: space-evenly;
            transition: height 200ms ease-in-out;
            overflow: hidden;
            z-index: 2;
          }

          .height-initial {
            height: 0px;
          }

          .height-final {
            height: ${data.length * 30}px;
          }

          .item {
            width: 100%;
            height: 30px;
            background-color: #fcfcfc;
            cursor: pointer;
            border: none;
          }

          .item:hover {
            background-color: #ece7e7;
            transition: background-color 100ms ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
