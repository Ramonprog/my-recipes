import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "@/components/ui/root-layout";
import NotFunction from "@/pages/not-found";
import { PathRoutes } from "@/@types/enums";
import { NewRecipesPage } from "@/pages/new-recipes";
import { HomePage } from "@/pages/home";
import { Recipe } from "@/pages/recipe";
import { FavoriteRecipes } from "@/pages/favorite-recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: PathRoutes.HOME,
        element: <HomePage />,
      },
      {
        path: PathRoutes.NEW_RECIPE,
        element: <NewRecipesPage />,
      },
      {
        path: PathRoutes.FAVOTIRE_RECIPES,
        element: <FavoriteRecipes />,
      },
      {
        path: PathRoutes.RECIPE,
        element: <Recipe />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFunction />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
