import React from "react";
import render from "react-dom";
import { createRoot } from 'react-dom/client';

import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />, );
