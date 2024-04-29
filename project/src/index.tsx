import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store, { persiStore } from "./state/store";
import App from "./components/app/ui";
import { PersistGate } from "redux-persist/integration/react";
import React, {Suspense} from "react";
import "./css/tailwind/index.css";
import "./css/html/index.css";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/alerts/ui/loading";

const container = document.getElementById( "root" ) as HTMLDivElement;
const root = createRoot( container );

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Suspense fallback={<Loading/>}>
                    <PersistGate loading={<Loading/>} persistor={persiStore}>
                        <div className={"bg-main"}>
                            <App />
                        </div>
                    </PersistGate>
                </Suspense>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);