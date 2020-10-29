import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("Testing ContactForm.js", () => {
    test("Render form without errors", () => {
        render (<ContactForm />);
    });

    test("User can fill out and submit form without errors", async () => {
        render (<ContactForm />);

        const firstNameInput = screen.getByLabelText(/First Name/i)
        fireEvent.change(firstNameInput, {target:{name:"firstName", value: "Gregg"}})

        const lastNameInput = screen.getByLabelText(/Last Name/i)
        fireEvent.change(lastNameInput, {target:{name:"lastName", value: "Greggerson"}})

        const emailInput = screen.getByLabelText(/Email/i)
        fireEvent.change(emailInput, {target:{name:"email", value: "realemail@email.com"}})

        const messageInput = screen.getByLabelText(/Message/i)
        fireEvent.change(messageInput, {target:{name:"message", value: "testing message input"}})

        const button = screen.getByRole("button", {name:/Submit/i})
        fireEvent.click(button)

        const newFirstName = screen.findByText("Gregg")
        expect(newFirstName).toBeTruthy();

        const newLastName = screen.findByText("Greggerson")
        expect(newLastName).toBeTruthy();

        const newEmail = screen.findByText("realemail@email.com")
        expect(newEmail).toBeTruthy();

        const newMessage = screen.findByText("testing message input")
        expect(newMessage).toBeTruthy();
    })
})