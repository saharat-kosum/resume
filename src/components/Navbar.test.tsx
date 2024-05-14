import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it("render navbar with correct text", () => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
