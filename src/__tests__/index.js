import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";

test("home displayed as expexted", async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/stackGen/i);
  const input = await screen.findByRole("textbox");
  expect(input).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("Stack container is displayed", () => {
  const { container } = render(<App />);
  const stack = container.querySelector(".stack");
  expect(stack).toBeInTheDocument();
});

test("search from could be used", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "notion" } });
  expect(input.target);
});

test("add first tech working as expected", async () => {
  const { container } = render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "notion" } });
  const stack = container.querySelector(".stack");
  const elementsNum = stack.childNodes.length;
  // screen.debug();
  expect(elementsNum).toEqual(2);
});

test("add new tech working as expected", async () => {
  const { container } = render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "notion" } });
  fireEvent.change(input, { target: { value: "js" } });
  const stack = container.querySelector(".stack");
  const elementsNum = stack.childNodes.length;
  // screen.debug();
  expect(elementsNum).toEqual(3);
});

test("atempt to add tech is already added", async () => {
  const { container } = render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "notion" } });
  fireEvent.change(input, { target: { value: "notion" } });
  const stack = container.querySelector(".stack");
  const elementsNum = stack.childNodes.length;
  // screen.debug();
  fireEvent.submit(input);
  const msg = container.querySelector(".msg");
  expect(msg.innerHTML).toMatch(/Este icono ya lo tienes/);
  expect(elementsNum).toEqual(2);
});

test("atempt add tech is not in the BBDD", async () => {
  const { container } = render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "alsdfjaksd" } });
  const stack = container.querySelector(".stack");
  const elementsNum = stack.childNodes.length;
  // screen.debug();
  fireEvent.submit(input);
  const msg = container.querySelector(".msg");
  expect(msg.innerHTML).toMatch(/Icono no disponible/);
  expect(elementsNum).toEqual(1);
});

test("correct icon added ", async () => {
  const path = "http://localhost/stack/notion.png";
  const { container } = render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "notion" } });
  const icon = container.querySelector(".icon");
  // screen.debug();
  expect(icon.src).toMatch(path);
});

test("all images displayed", async () => {
  const { container } = render(<App />);
  const images = await container.querySelectorAll("img");
  let result = false;

  for (let img in images) {
    result = img.src === "" ? true : false;
  }
  expect(result).toBe(false);
});

test("all images alt included", async () => {
  const { container } = render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "notion" } });
  fireEvent.change(input, { target: { value: "js" } });
  fireEvent.change(input, { target: { value: "ts" } });
  fireEvent.change(input, { target: { value: "css" } });
  const images = await container.querySelectorAll("img");
  let result = false;

  for (let img in images) {
    result = img.alt === "" ? true : false;
  }
  expect(result).toBe(false);
});
