/* eslint-disable no-alert */
import { meaningOfLife } from "@nighttrax/foo";
import React from "react";
import { ampli } from "@nighttrax/ampli";

export const Button = () => (
  <button
    type="button"
    onClick={() => {
      ampli.buttonClicked({ buttonName: "The button" });
      alert(`hi ampli ${meaningOfLife}`);
    }}
  >
    Click me
  </button>
);
