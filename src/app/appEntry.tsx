import * as React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "@/pages/main";
import { EditEmployeeModal } from "@/features/employee/modal";
import { store } from "./store";
import "./styles/global.scss";
import "./styles/normalize.scss";

const container = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "staff/:id",
        element: <EditEmployeeModal />,
      },
    ],
  },
]);

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
