import React from "react";

import { render, fireEvent,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
//import "jest-dom/extend-expect";
// import FizzBuzz from "./FizzBuzz";
import App from "./App";
import './FizzBuzz'

it('renders counter start at 1', () => {
    render(<App />);

    expect(screen.getByTestId("fizz-buzz")).toHaveTextContent("1");
})

it('Should increment the counter to 1 when we click play', () => {
    render(<App />);
    fireEvent.click(screen.getByText("Play"));
    expect(screen.getByTestId("fizz-buzz")).toHaveTextContent("2")

    fireEvent.click(screen.getByText("Play"));
    expect(screen.getByTestId("fizz-buzz")).toHaveTextContent("fizz")

    fireEvent.click(screen.getByText("Play"));
    expect(screen.getByTestId("fizz-buzz")).toHaveTextContent("4")

    fireEvent.click(screen.getByText("Play"));
    expect(screen.getByTestId("fizz-buzz")).toHaveTextContent("buzz")

    fireEvent.click(screen.getByText("Play"));
    expect(screen.getByTestId("fizz-buzz")).toHaveTextContent("fizz")

    fireEvent.click(screen.getByText("Play"));
    expect(screen.getByTestId("fizz-buzz")).toHaveTextContent("7")

    fireEvent.click(screen.getByText("Play"));
    fireEvent.click(screen.getByText("Play"));
    fireEvent.click(screen.getByText("Play"));
    fireEvent.click(screen.getByText("Play"));
    fireEvent.click(screen.getByText("Play"));
    fireEvent.click(screen.getByText("Play"));

    expect(screen.getByTestId("fizz-buzz")).toHaveTextContent("fizz")
    for (let index = 13; index < 53; index++) {
        fireEvent.click(screen.getByText("Play"));
        if(index > 51){
            // eslint-disable-next-line jest/no-conditional-expect
            expect(screen.getByTestId("fizz-buzz")).toHaveTextContent("buzz")
        }
    }

})
