import { Header } from "./components/header";
import { Outlet } from "react-router-dom";
function Layout() {

    return (
        <>
            <div className="App container-fluid">
                <div className="project-container container">
                    <Header />
                    <div className="content-container pt-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}


export { Layout }