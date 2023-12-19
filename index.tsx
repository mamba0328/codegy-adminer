import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import "./src/styles/styles.css"

import App from "./src/App";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render React component instead
const root = createRoot(document.getElementById('app')!);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);