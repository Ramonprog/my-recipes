import localStorage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./features/recipes/recipesSlice";
import persistReducer from "redux-persist/es/persistReducer";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";


// ---------------------- CRIAÇÃO DO ROOT REDUCER --------------------------
const rootReducer = combineReducers({
	// Aqui registramos todos os reducers da aplicação
	// O estado final terá a propriedade "recipes"
	recipes: recipesSlice,
});


// ---------------------- CONFIGURAÇÃO DO REDUX PERSIST -------------------
const persistConfig = {
	// Nome da chave que será usada no localStorage
	key: "root",

	// Define que o storage usado será o localStorage do navegador
	storage: localStorage,

	// Lista branca: apenas estes reducers serão persistidos
	whitelist: ["recipes"],
};


// Envolve o rootReducer com persistência
// Isso faz o Redux Persist interceptar as ações e salvar o estado no storage
const persistedReducer = persistReducer(persistConfig, rootReducer);


// ---------------------- CONFIGURAÇÃO DA STORE ---------------------------
export const store = configureStore({
	// Usa o reducer persistido ao invés do rootReducer normal
	reducer: persistedReducer,

	// Configura os middlewares padrão
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignora ações do Redux Persist que não são serializáveis
				// Isso evita warnings no console
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});


// ---------------------- CRIAÇÃO DO PERSISTOR -----------------------------
export const persistor = persistStore(store);
// O persistor controla:
// - Reidratar o estado salvo no storage ao iniciar a aplicação
// - Manter o estado sincronizado com o localStorage


// ---------------------- TIPOS PARA TYPESCRIPT -----------------------------
export type RootState = ReturnType<typeof store.getState>;
// Esse tipo representa TUDO o que existe na store.
// Muito útil para usar no useSelector.

export type AppDispatch = typeof store.dispatch;
// Esse tipo representa o tipo do dispatch da aplicação.
// Usado principalmente no useDispatch.
