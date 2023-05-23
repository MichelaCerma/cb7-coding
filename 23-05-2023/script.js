import { createEl, loginIn } from "./utils/fn.js";

export const root = document.querySelector("#root");

root.append(loginIn());
