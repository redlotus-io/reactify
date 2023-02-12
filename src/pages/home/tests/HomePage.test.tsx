import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { HomePage } from "pages";

describe("HomePage tests", () => {
  it("the title is visible", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const welcomeText = screen.getByText(/Home/i);

    expect(welcomeText).toBeInTheDocument();
  });
});
