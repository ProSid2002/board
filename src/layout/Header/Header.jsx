import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineTune } from "react-icons/md";
import Dropdown from "../../components/Dropdown";
import dataOperations from "./constants";

export default function Header({ state, dispatch }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="dropdown">
        <button className="btn" onClick={() => setOpen((open) => !open)}>
          <MdOutlineTune size={15} />
          <span>Display</span>
          <IoIosArrowDown size={15} />
        </button>
        <div
          className={`dropdown-content ${
            open ? "scale-final" : "scale-initial"
          }`}
        >
          {dataOperations.map((operation) => (
            <div key={operation.id} className="row">
              <div className="title">{operation.title}</div>
              <Dropdown
                value={state[operation.title.toLowerCase()]}
                dispatch={dispatch}
                data={operation.data}
                title={operation.title}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>
        {`
          .header {
            background-color: #fff;
            padding: 20px;
          }

          .btn {
            display: flex;
            justify-content: space-evenly;
            width: 100px;
            padding: 0.5rem 0 0.5rem 0;
            cursor: pointer;
            background-color: #fff;
            border: none;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
              rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
            border-radius: 4px;
          }

          .dropdown {
            position: relative;
          }

          .dropdown-content {
            position: absolute;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
              rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
            background-color: #f9f9fa;
            width: 250px;
            border-radius: 5px;
            margin-top: 0.8rem;
            padding: 0.6rem 1rem 0.6rem 1rem;
            transition: scale 300ms ease-in-out;
          }

          .row {
            display: flex;
            justify-content: space-between;
            padding: 0.4rem 0 0.4rem 0;
            align-items: center;
          }

          .title {
            color: #65676f;
          }

          .scale-initial {
            scale: 0;
          }

          .scale-final {
            scale: 1;
          }

          @media only screen and (max-width: 280px) {
            .dropdown-content {
              width: 140px;
              left: -12px;
            }
            .row {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
}
