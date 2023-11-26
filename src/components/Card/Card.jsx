import React from "react";

export default function Card({ title, id, hideImage }) {
  return (
    <div className="container">
      <div className="left">
        <div className="id">{id}</div>
        <div className="title">{title}</div>
        <div className="actions">
          <div className="action">
            <span className="action-text">---</span>
          </div>
          <div className="action">
            <div className="circle" />
            <span className="action-text">Feature Request</span>
          </div>
        </div>
      </div>

      {hideImage && (
        <div className="right">
          <img src="/assets/profile.jpeg" />
        </div>
      )}
      <style jsx>
        {`
          .container {
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            padding: 4%;
            padding-top: 0;
            width: 300px;
            margin: 1rem 0;
            border-radius: 8px;
          }

          .container img {
            width: 30px;
            height: 30px;
            border-radius: 15px;
          }

          .left > div,
          .right {
            padding-top: 4%;
          }

          .id {
            color: #65676f;
          }

          .actions {
            display: flex;
            gap: 5px;
          }

          .action {
            border: 1px solid #b8bbc6;
            border-radius: 4px;
            font-size: 14px;
            padding: 5px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            color: #65676f;
          }

          .circle {
            background-color: #65676f;
            border-radius: 4px;
            width: 8px;
            height: 8px;
            margin-right: 3px;
            margin-top: -1px;
          }

          @media only screen and (max-width: 330px) {
            .container {
              width: calc(100vw - 16px);
              margin-left: 8px;
              margin-right: 8px;
            }
          }

          @media only screen and (max-width: 210px) {
            .action {
              font-size: 10px;
            }
            .title {
              font-size: 12px;
            }
          }
        `}
      </style>
    </div>
  );
}
