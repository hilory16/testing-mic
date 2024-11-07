import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import "./common/i18n";

import AppRouter from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<React.Suspense fallback="loading">
			<AppRouter />
		</React.Suspense>
	</React.StrictMode>
);
