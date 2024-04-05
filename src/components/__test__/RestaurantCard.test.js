import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Puliyogare Point");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted Label", () => {
  const Component = withPromotedLabel(RestaurantCard);
  render(<Component resData={MOCK_DATA} />);

  const label = screen.getByText("Puliyogare Point");

  expect(label).toBeInTheDocument();
});
