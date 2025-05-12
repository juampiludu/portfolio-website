import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";
import emailjs from "@emailjs/browser";

vi.mock("@emailjs/browser", () => ({
  default: {
    sendForm: vi.fn(),
  },
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("ContactForm", () => {
  it("should submit the form and show a thank you message", async () => {
    emailjs.sendForm.mockResolvedValueOnce();

    render(<ContactForm />);

    await userEvent.type(screen.getByTestId("name"), "Alice");
    await userEvent.type(screen.getByTestId("email"), "alice@example.com");
    await userEvent.type(
      screen.getByTestId("message"),
      "Hello, this is a test."
    );

    await userEvent.click(
      screen.getByRole("button", { name: /send message/i })
    );

    expect(
      await screen.findByText(/thank you for your message/i)
    ).toBeInTheDocument();
  });

  it("should show error if promise is rejected", async () => {
    emailjs.sendForm.mockRejectedValueOnce(new Error("PROMISE REJECTED"));

    render(<ContactForm />);

    await userEvent.type(screen.getByTestId("name"), "Alice");
    await userEvent.type(screen.getByTestId("email"), "alice@example.com");
    await userEvent.type(
      screen.getByTestId("message"),
      "Hello, this is a test."
    );

    await userEvent.click(
      screen.getByRole("button", { name: /send message/i })
    );

    expect(await screen.findByText(/Something went wrong/i)).toBeInTheDocument();
  });
});
