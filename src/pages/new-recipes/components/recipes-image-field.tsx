import type { ChangeEventHandler } from "react";
import { useDropzone } from "react-dropzone";

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
