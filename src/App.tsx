import { Toaster } from "sonner";
import { Routes } from "./routes";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Routes />
				<Toaster position="top-right" richColors />
			</PersistGate>
		</Provider>
	);
}

export default App;
