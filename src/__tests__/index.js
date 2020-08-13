import React from "react";
import { render, fireEvent, screen, findByRole } from "@testing-library/react";
import App from "../App";

test("home displayed as expexted", async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/Stack generator/i);
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
  fireEvent.change(input, { target: { value: "sublime" } });
  expect(input.target);
});

test("add first tech working as expected", async () => {
  const { container } = render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "braquets" } });
  fireEvent.submit(input);
  const stack = container.querySelector(".stack");
  const elementsNum = stack.childNodes.length;
  expect(elementsNum).toEqual(1);
});

test("add new tech working as expected", async () => {
  const { container } = render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "linux" } });
  fireEvent.submit(input);
  fireEvent.change(input, { target: { value: "js" } });
  fireEvent.submit(input);
  fireEvent.change(input, { target: { value: "css" } });
  fireEvent.submit(input);
  const stack = container.querySelector(".stack");
  const elementsNum = stack.childNodes.length;
  /*   screen.debug(); */
  expect(elementsNum).toEqual(3);
});

test("atempt to add tech is already added", async () => {
  const { container } = render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "meteor" } });
  fireEvent.change(input, { target: { value: "meteor" } });
  const stack = container.querySelector(".stack");
  const elementsNum = stack.childNodes.length;
  // screen.debug();
  expect(elementsNum).toEqual(0);
});

test("atempt add tech is not in the BBDD", async () => {
  const { container } = render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "alsdfjaksd" } });
  const stack = container.querySelector(".stack");
  const elementsNum = stack.childNodes.length;
  expect(elementsNum).toEqual(0);
});

test("correct icon added ", async () => {
  const path = "http://localhost/stack/v1.1/js.png";
  const { container } = render(<App />);
  const images = await container.querySelectorAll("img");
  let result = false;

  for (let img in images) {
    if (img.src === path) result = true;
  }
  expect(result).toBe(false);
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
  fireEvent.change(input, { target: { value: "apple" } });
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
