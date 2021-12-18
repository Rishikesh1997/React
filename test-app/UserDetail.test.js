import { cleanup, render, screen } from "@testing-library/react";
import UserDetail from "./UserDetail";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  console.log("Hello");
})

test("should be present in document", () => {
  render(<UserDetail />);
  const element = screen.getByTestId("user-detail-id");
  expect(element).toBeInTheDocument();
});

test("should have text content", () => {
  const testData = {
    name: "Rishii...!",
  };
  render(<UserDetail name={testData.name} />);
  const element = screen.getByTestId("user-detail-id");
  expect(element).toHaveTextContent("Name: " + testData.name);
  expect(element).toContainHTML("h1");
});
