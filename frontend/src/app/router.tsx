import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import DetailsPage from "./components/DetailsPage/detailsPage";
import SearchPage from "./components/SearchPage/SearchPage";

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Navigate replace to="/search" />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/details/:type" element={<DetailsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
