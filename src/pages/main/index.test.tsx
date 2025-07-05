import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Root from "./index";

describe("Root", () => {
  it("must have h1", async () => {
    render(<Root />);

    const item = await screen.findByText("React Capactior Boilerplate");
    expect(item.tagName).toEqual("H1");
  });
});
