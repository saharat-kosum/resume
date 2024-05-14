import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Project Component", () => {
  beforeEach(() => {
    render(<Projects />);
  });

  it("renders header", () => {
    expect(screen.getByRole("heading", { name: /Projects/i }));
  });

  it("renders GitHub links correctly", () => {
    const githubLinks = [
      "https://github.com/saharat-kosum/facebook-clone",
      "https://github.com/saharat-kosum/twitter-clone",
      "https://github.com/saharat-kosum/swensen-clone",
    ];

    githubLinks.forEach((link, index) => {
      const githubLink = screen.getAllByRole("link", { name: /Code/i });
      expect(githubLink[index]).toBeInTheDocument();
      expect(githubLink[index]).toHaveAttribute("href", link);
    });
  });

  it("renders project images correctly", () => {
    const projectImages = [
      "/src/assets/facebook.jpg",
      "/src/assets/twitter.jpg",
      "/src/assets/icecream.jpg",
    ];

    projectImages.forEach((src, index) => {
      const img = screen.getAllByRole("img", { name: /Project/i });
      expect(img[index]).toBeInTheDocument();
      expect(img[index]).toHaveAttribute("src", src);
    });
  });
});
