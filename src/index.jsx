import * as React from "react";
import { StrictMode } from 'react';
import { createRoot }from "react-dom/client";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from "./App";
import Main from "./main"



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
