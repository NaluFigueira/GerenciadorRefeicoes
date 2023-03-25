import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainMenuItem from "./components/MainMenuItem";
import Recipes from "./components/Recipes";
import ReloadPrompt from "./components/ReloadPrompt";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="h-full flex flex-col space-y-20 items-center justify-center">
        <h1 className="text-2xl md:text-6xl">Gerenciador de refeições</h1>
        <div className="grid grid-rows-3 gap-5 lg:grid-cols-3 lg:gap-4 lg:grid-rows-none">
          <MainMenuItem pageRoute="receitas" title="Receitas" />
          <MainMenuItem pageRoute="cardapio" title="Cardápio" />
          <MainMenuItem pageRoute="compras" title="Lista de Compras" />
        </div>
      </div>
    ),
  },
  {
    path: "receitas",
    element: <Recipes />,
  },
  {
    path: "cardapio",
    element: <div>Cardápio</div>,
  },
  {
    path: "compras",
    element: <div>Lista de Compras</div>,
  },
]);

function App() {
  return (
    <div className="bg-gray-700 h-screen text-white m-0">
      <RouterProvider router={router} />
      <ReloadPrompt />
    </div>
  );
}

export default App;
