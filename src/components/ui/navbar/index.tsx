export function NavBar() {
	return (
		<nav className="bg-white border-b border-gray-200 flex justify-between px-12 py-6">
			<div className="flex items-center space-x-6">
				<span className="text-2xl font-bold text-orange-600">MyRecipes</span>
				<a href="#" className="text-sm text-gray-700 hover:text-orange-600">
					Receitas faboritas
				</a>
			</div>

			<button
				onClick={() => console.log("clicou")}
				className="bg-orange-600 hover:opacity-80 text-white font-semibold w-44 py-2 rounded-lg cursor-pointer"
			>
				Nova Receita
			</button>
		</nav>
	);
}
