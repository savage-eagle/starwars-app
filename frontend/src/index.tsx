import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./app/router";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
	<QueryClientProvider client={queryClient}>
		<Router />
	</QueryClientProvider>
);
