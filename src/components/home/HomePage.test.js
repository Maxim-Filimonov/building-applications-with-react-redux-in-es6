import HomePage from "./HomePage";
import { MemoryRouter } from "react-router";
import React from "react";
import { mount } from "enzyme";

describe("HomePage", () => {
  it("renders", () => {
    mount(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
  });
});
