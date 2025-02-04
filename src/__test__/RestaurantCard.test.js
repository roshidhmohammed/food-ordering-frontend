import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import mockData from "../mocks/restaurantsCardMocks.json";
import {withPromotedlabel} from "../components/RestaurantCard"
import * as React from "react"
import "@testing-library/jest-dom"


// it("Should render restaurant card with mock data", () => {
//   render(<RestaurantCard restaurantData={mockData} />);

//   const name = screen.getByText("Cheesecake & Co.");

//   expect(name).toBeInTheDocument();
// });

it("Should render withPromotedLabel component", () =>{
    render(withPromotedlabel(<RestaurantCard/>))
})
