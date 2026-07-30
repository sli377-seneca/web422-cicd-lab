import Home from "@/pages/index";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  test("renders the 'Vehicles UI' heading", () => {
    const { container } = render(<Home />);

    const heading = container.querySelector("h1");

    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe("Vehicles UI");
  });

  test("renders a link to the /vehicles page", () => {
    const { container } = render(<Home />);

    // collect every anchor rendered by the page
    const links = container.querySelectorAll("a");
    expect(links.length).toBeGreaterThan(0);

    // at least one of them should point at /vehicles
    let vehicleLinks = 0;
    links.forEach((link) => {
      if (link.getAttribute("href") === "/vehicles") vehicleLinks++;
    });

    expect(vehicleLinks).toBeGreaterThan(0);
  });
});
