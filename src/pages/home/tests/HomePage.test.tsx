import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { HomePage } from "pages";
import { render, screen } from "test/test-utils";

describe("HomePage tests", () => {
  it("the title is visible", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
