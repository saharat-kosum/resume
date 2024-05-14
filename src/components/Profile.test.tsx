import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

describe("Profile Component", () => {
  beforeEach(() => {
    render(<Profile />);
  });
  it("renders profile image", () => {
    const profileImage = screen.getByRole("img", { name: /profile/i });
    expect(profileImage).toBeInTheDocument();
  });

  it("renders correct name", () => {
    expect(screen.getByRole("heading", { name: /Saharat Kosum/i }));
  });

  it("renders tech stack images", () => {
    const stackImages = screen.getAllByRole("img", { name: /stack/i });
    expect(stackImages.length).toBe(5);
  });

  it("renders the introduction text", () => {
    expect(
      screen.getByText(
        /Hi, I'm Saharat Kosum, but you can call me Phai. I'm a passionate front-end developer based in Bangkok, Thailand, eager to expand my skills to become a full-stack developer./i
      )
    ).toBeInTheDocument();
  });
});
