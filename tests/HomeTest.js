import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "../pages/index";

test("Check for Getting Started Text", () => {
  const { getByText } = render(<HomePage />);
  expect(getByText("Get started by editing")).toBeInTheDocument();
});
