import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("something truthy and falsy", () => {
  it("loads items eventually", async () => {
    render(<App />);

    const item = await screen.findByText("React Capactior Boilerplate");
    expect(item.tagName).toEqual("H1");
  });
});
