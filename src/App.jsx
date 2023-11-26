import React, { useEffect, useReducer, useState } from "react";
import Header from "./layout/Header/Header";
import Body from "./layout/Body/Body";
import { reducer } from "./reducer/reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    grouping: localStorage.Grouping ? localStorage.Grouping : "Status",
    ordering: localStorage.Ordering ? localStorage.Ordering : "Priority",
    loading: true,
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await response.json();
      dispatch({ type: "Add-Data", payload: data });
    })();
  }, []);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <Header state={state} dispatch={dispatch} />
      <Body state={state} />
      <style jsx global>
        {`
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }

          .app-container {
            background-color: #f4f5f8;
            min-height: 100vh;
          }
        `}
      </style>
    </div>
  );
}
