import { Outlet } from "react-router";
import { NavBar } from "../navbar";

export default function RootLayout() {
	return (
		<div>
			<NavBar />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
