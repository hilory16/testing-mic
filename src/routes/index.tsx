import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";

const AppRouter: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<About />} path="/about" />
			</Routes>
		</Router>
	);
};

export default AppRouter;
