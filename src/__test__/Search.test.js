import { render, screen, fireEvent } from "@testing-library/react";
import  React from "react";
import Body from "../components/Body";
import mockData from "../mocks/restaurantListMockData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../store/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockData);
    },
  });
});

it("Should search restaurant list for Cheesecake", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    );
  });

  const restaurantCardsBeforeSearch = screen.getAllByTestId("res-card")
  expect(restaurantCardsBeforeSearch.length).toBe(9)

  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput")

  fireEvent.change(searchInput, {target:{value:"Cheesecake"}})


  fireEvent.click(searchButton)

  const restaurantCardsAfterSearch= screen.getAllByTestId("res-card")

  console.log(restaurantCardsAfterSearch?.length)

  expect(restaurantCardsAfterSearch.length).toBe(1)

});

it("Should show top rated restaurants", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Body />
          </Provider>
        </BrowserRouter>
      );
    });
  
    const restaurantCardsBeforeFilter = screen.getAllByTestId("res-card")
    expect(restaurantCardsBeforeFilter.length).toBe(9)
  
    const filterRestaurants = screen.getByRole("button", { name: "Filter Restaurants" });
  
    // const searchInput = screen.getByTestId("searchInput")
  
    // fireEvent.change(searchInput, {target:{value:"Cheesecake"}})
  
  
    fireEvent.click(filterRestaurants)
  
    const restaurantCardsAfterFilter= screen.getAllByTestId("res-card")
  
  
    expect(restaurantCardsAfterFilter.length).toBe(6)
  
  });
