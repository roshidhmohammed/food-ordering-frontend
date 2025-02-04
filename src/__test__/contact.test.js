import { render, screen } from "@testing-library/react"
import * as React from 'react'
import Contact from "../components/Contact"
import "@testing-library/jest-dom"


// it("Checking component loads or not", ()=>{
//     render(<Contact/>)
//     const submit  = screen.getByPlaceholderText("name")
//     // Assertion
//     expect(submit).toBeInTheDocument()
// })


describe("Checking component loads or not", ()=>{
    it("checking the input place holder text in contact comp", () =>{
        render(<Contact/>)
        const input  = screen.getByPlaceholderText("name")
        // Assertion
        expect(input).toBeInTheDocument()
    })
    it("checking the button name in contact comp", () =>{
        render(<Contact/>)
        const submit  = screen.getByText("Submit")
        // Assertion
        expect(submit).toBeInTheDocument()
    })
})
