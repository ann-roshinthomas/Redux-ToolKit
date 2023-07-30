import { Outlet } from "react-router-dom";
import NavBar from "./NavBarPanel";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar></NavBar>
        <main>
          <Outlet></Outlet>
        </main>
      </Provider>
    </>
  );
};
export default RootLayout;
