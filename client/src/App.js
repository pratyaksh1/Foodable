import "./App.css";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./routes/Routes";
import { CircularProgress } from "@mui/material";
import AuthReducer from "./store/reducer/Auth";
import ProjectReducer from "./store/reducer/Project";
function App() {
	const persistConfig = {
		key: "root",
		storage: storage,
	};

	const rootReducer = combineReducers({
		Auth: AuthReducer,
		Project: ProjectReducer,
	});

	const persistedReducer = persistReducer(persistConfig, rootReducer);
	const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
	const persistedStore = persistStore(store);

	return (
		<div className="App">
			<Provider store={store}>
				<PersistGate
					persistor={persistedStore}
					loading={<CircularProgress color="secondary" />}
				>
					<Routes />
				</PersistGate>
			</Provider>
		</div>
	);
}

export default App;
