import { Link, useNavigate } from "react-router";
import { PathRoutes } from "@/@types/enums";

export function NavBar() {
	const navigate = useNavigate();
	return (
		<nav className="bg-white border-b border-gray-200 flex justify-between px-12 py-6">
			<div className="flex items-center space-x-6">
				<Link
					to={PathRoutes.HOME}
					className="text-2xl font-bold text-orange-600"
				>
					MyRecipes
				</Link>
				<Link
					to={PathRoutes.FAVOTIRE_RECIPES}
					className="text-sm text-gray-700 hover:text-orange-600"
				>
					Receitas faboritas
				</Link>
			</div>

			<button
				type="button"
				onClick={() => navigate(PathRoutes.NEW_RECIPE)}
				className="bg-orange-600 hover:opacity-80 text-white font-semibold w-44 py-2 rounded-lg cursor-pointer"
			>
				Nova Receita
			</button>
		</nav>
	);
}
