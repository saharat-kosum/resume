import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import RefContextProvider, { RefContext } from "./refContext";
import { useContext } from "react";

describe("RefContext", () => {
  it("provides the correct default values", () => {
    let contextValue: any;

    const TestComponent = () => {
      contextValue = useContext(RefContext);
      return null;
    };

    render(
      <RefContextProvider>
        <TestComponent />
      </RefContextProvider>
    );

    expect(contextValue).not.toBeNull();
    expect(contextValue.homeRef).toBeDefined();
    expect(contextValue.aboutRef).toBeDefined();
    expect(contextValue.projectRef).toBeDefined();
    expect(contextValue.contactRef).toBeDefined();
    expect(contextValue.scrollIntoView).toBeInstanceOf(Function);
  });

  it("scrollIntoView function calls scrollIntoView on the ref", () => {
    let contextValue: any;

    const TestComponent = () => {
      contextValue = useContext(RefContext);
      return <div ref={contextValue.homeRef}>Home</div>;
    };

    render(
      <RefContextProvider>
        <TestComponent />
      </RefContextProvider>
    );

    if (contextValue.homeRef.current) {
      contextValue.homeRef.current.scrollIntoView = vi.fn();
      contextValue.scrollIntoView(contextValue.homeRef);

      expect(contextValue.homeRef.current.scrollIntoView).toHaveBeenCalled();
    }
  });
});
