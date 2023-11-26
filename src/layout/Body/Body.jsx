import React from "react";
import Card from "../../components/Card/Card";
import { GoPlus } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import getGroupedAndOrderedData, { icons } from "./DataUtil";

export default function Body({ state }) {
  const data = getGroupedAndOrderedData(state);

  return (
    <div className="container">
      {data.categories.map((category) => (
        <div className="category" key={category.category}>
          <div className="row">
            <div className="left">
              {state.grouping === "User" ? (
                <div>
                  <img src="/assets/profile.jpeg" />
                </div>
              ) : (
                <>{icons[category.category]}</>
              )}
              <div className="title">{category.title}</div>
              <div className="gray">{data[category.category].length}</div>
            </div>
            <div>
              <GoPlus size={20} />
              <BsThreeDotsVertical size={20} />
            </div>
          </div>
          {data[category.category].map((card) => (
            <Card
              {...card}
              key={card.id}
              hideImage={state.grouping !== "User"}
            />
          ))}
        </div>
      ))}

      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            padding-top: 1rem;
          }
          .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .left {
            display: flex;
            align-items: center;
          }

          .title {
            margin: 0px 10px;
          }

          img {
            border-radius: 15px;
          }

          .gray {
            color: gray;
          }

          @media only screen and (max-width: 330px) {
            .row {
              margin-left: 8px;
              margin-right: 8px;
            }
          }
        `}
      </style>
    </div>
  );
}
