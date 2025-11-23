import { fileToBase64 } from "@/utils";
import type { ChangeEventHandler } from "react";
import { useDropzone } from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";

export function RecipeImageField({ ...rest }) {
	const { control } = useFormContext();
	return (
		<Controller
			name="image"
			control={control}
			render={({ field: { onChange } }) => (
				<DropZone
					{...rest}
					onChange={async (e) => {
						const file = e.target.files?.[0] ?? null;
						if (file) {
							const base64file = await fileToBase64(file);
							onChange(base64file);
						}
					}}
				/>
			)}
		/>
	);
}

export function DropZone({
	onChange,
	...rest
}: {
	onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
	const { getRootProps, getInputProps } = useDropzone({ multiple: false });

	return (
		<div
			{...getRootProps()}
			className="bg-gray-50 border-dashed border-gray-300 rounded-md w-full h-44 grid place-items-center cursor-pointer"
		>
			<input {...getInputProps({ onChange })} {...rest} />
			<span className="text-gray-400">
				Arraste ou solte a imagem (png, jpeg, ou webp)
			</span>
		</div>
	);
}
