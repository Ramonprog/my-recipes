import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "@/components/ui/root-layout";
import NotFunction from "@/pages/not-found";
import { PathRoutes } from "@/@types/enums";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: PathRoutes.HOME,
				element: <h1>Home</h1>,
			},
			{
				path: PathRoutes.NEW_RECIPE,
				element: <h1>Nova receita</h1>,
			},
			{
				path: PathRoutes.FAVOTIRE_RECIPES,
				element: <h1>heceitas favoritas</h1>,
			},
			{
				path: PathRoutes.RECIPE,
				element: <h1>heceita</h1>,
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
