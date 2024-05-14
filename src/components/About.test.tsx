import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import RefContextProvider from "../context/refContext";
import About from "./About";

// const renderWithProviders = (ui: React.ReactElement) => {
//   return render(<RefContextProvider>{ui}</RefContextProvider>);
// };

describe("About Component", () => {
  it("render About Component with correct text", () => {
    render(<About />);

    expect(screen.getByText(/about me/i)).toBeInTheDocument();
    expect(
      screen.getByText(/as a frontend developer with one year of experience/i)
    ).toBeInTheDocument();
  });
});
