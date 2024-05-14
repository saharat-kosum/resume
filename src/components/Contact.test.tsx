import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "./Contact";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

vi.mock("@emailjs/browser");
vi.mock("sweetalert2");

describe("Contact Component", () => {
  beforeEach(() => {
    render(<Contact />);
    import.meta.env.VITE_SERVICE_ID = "test_service_id";
    import.meta.env.VITE_TEMPLATE_ID = "test_template_id";
    import.meta.env.VITE_EMAIL_PUBLIC_KEY = "test_public_key";
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the form and text correctly", () => {
    expect(screen.getByText(/Contact Me!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Looking to connect\? You're in the right place./i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  it("updates form state on input change", () => {
    const nameInput = screen.getByPlaceholderText("Your name");
    const emailInput = screen.getByPlaceholderText("Your email");
    const messageInput = screen.getByPlaceholderText("Message");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello there!" } });

    expect((nameInput as HTMLInputElement).value).toBe("John Doe");
    expect((emailInput as HTMLInputElement).value).toBe("john@example.com");
    expect((messageInput as HTMLInputElement).value).toBe("Hello there!");
  });

  it("state reset after sending email success", async () => {
    const nameInput = screen.getAllByPlaceholderText("Your name");
    const emailInput = screen.getAllByPlaceholderText("Your email");
    const messageInput = screen.getAllByPlaceholderText("Message");

    fireEvent.change(nameInput[0], { target: { value: "John Doe" } });
    fireEvent.change(emailInput[0], { target: { value: "john@example.com" } });
    fireEvent.change(messageInput[0], { target: { value: "Hello there!" } });

    const sendFormMock = vi.spyOn(emailjs, "sendForm").mockResolvedValueOnce({
      status: 0,
      text: "success",
    });

    fireEvent.submit(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => expect(sendFormMock).toHaveBeenCalled());

    expect((nameInput[0] as HTMLInputElement).value).toBe("");
    expect((emailInput[0] as HTMLInputElement).value).toBe("");
    expect((messageInput[0] as HTMLInputElement).value).toBe("");
  });

  it("handles form submission successfully", async () => {
    const sendFormMock = vi.spyOn(emailjs, "sendForm").mockResolvedValueOnce({
      status: 0,
      text: "success",
    });

    fireEvent.submit(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => expect(sendFormMock).toHaveBeenCalled());
    expect(Swal.fire).toHaveBeenCalledWith({
      title: "Success!",
      text: "Email have been sent!",
      icon: "success",
    });
  });

  it("handles form submission failure", async () => {
    const sendFormMock = vi
      .spyOn(emailjs, "sendForm")
      .mockRejectedValueOnce(new Error("Failed to send"));

    fireEvent.submit(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => expect(sendFormMock).toHaveBeenCalled());
    expect(Swal.fire).toHaveBeenCalledWith({
      title: "Failed!",
      text: "Sent E-mail Failed!",
      icon: "error",
    });
  });
});
