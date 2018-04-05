import configureStore from "./configureStore";

it("runs without errors", () => {
  const store = configureStore();
  expect(store).toBeDefined();
});
