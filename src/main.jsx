import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { AuthContextWrapper } from "./contexts/AuthContext";
import { PetContextWrapper } from "./contexts/PetContext";
import { ArticleContextWrapper } from "./contexts/ArticleContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <AuthContextWrapper>
          <PetContextWrapper>
            <ArticleContextWrapper>
              <App />
            </ArticleContextWrapper>
          </PetContextWrapper>
        </AuthContextWrapper>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
