import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainMenuItem from "./components/MainMenuItem";
import MealPlan from "./components/MealPlan";
import Recipes from "./components/Recipes";
import ReloadPrompt from "./components/ReloadPrompt";
import ShoppingList from "./components/ShoppingList";

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
    element: <MealPlan />,
  },
  {
    path: "compras",
    element: <ShoppingList />,
  },
]);

function App() {
  useEffect(() => {
    // This is not as elegant as production code as we cannot use such in production.
    // But lets assume these envs are coming from a environment handler.
    // And this is only for sample case.
    if (import.meta.env.VITE_RECIPES_MICROFRONTEND_URL) {
      // This is where we set the payment remote's URL.
      window.recipesUrl = import.meta.env.VITE_RECIPES_MICROFRONTEND_URL;
    }
    if (import.meta.env.VITE_MEAL_PLAN_MICROFRONTEND_URL) {
      // This is where we set the payment remote's URL.
      window.mealPlanUrl = import.meta.env.VITE_MEAL_PLAN_MICROFRONTEND_URL;
    }
    if (import.meta.env.VITE_SHOPPING_LIST_MICROFRONTEND_URL) {
      // This is where we set the payment remote's URL.
      window.shoppingListUrl =
        import.meta.env.VITE_SHOPPING_LIST_MICROFRONTEND_URL;
    }
  }, []);

  return (
    <div className="bg-gray-700 h-screen text-white m-0">
      <RouterProvider router={router} />
      <ReloadPrompt />
    </div>
  );
}

export default App;
