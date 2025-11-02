import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "@/components/ui/root-layout";
import NotFunction from "@/pages/not-found";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <h1>Home</h1>,
			},
			{
				path: "/new-recipe",
				element: <h1>Nova receita</h1>,
			},
			{
				path: "/favorite-recipes",
				element: <h1>heceitas favoritas</h1>,
			},
			{
				path: "/recipe",
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
