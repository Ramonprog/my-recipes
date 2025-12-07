import { Toaster } from "sonner";
import { Routes } from "./routes";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
          <ReactQueryDevtools />
          <Toaster position="top-right" richColors />
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
