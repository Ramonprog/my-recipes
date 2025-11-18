export function RecipesFormFields() {
	const fields = [{ name: "title", label: "Título" }];
	return (
		<div className="flex flex-col">
			{fields.map((f) => {
				return (
					<div className="" key={f.name}>
						<label htmlFor="title">Título</label>
						<input
							type="text"
							name="title"
							className="w-full border border-gray-200 rounded-sm py-2 bg-gray-100 outline-none"
						/>
					</div>
				);
			})}
		</div>
	);
}
