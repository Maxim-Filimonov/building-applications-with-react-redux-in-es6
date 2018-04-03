import App from "./App";
import React from "react";
import { shallow } from "enzyme";

describe("App", () => {
  it("renders", () => {
    shallow(
      <App>
        <h1>TEST</h1>
      </App>
    );
  });
});
