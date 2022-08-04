import * as React from "react";
import { createRoot } from "react-dom/client";

import Main from "./main";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
}
