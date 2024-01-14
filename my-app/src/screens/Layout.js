import {NavLink, Outlet} from "react-router-dom";
import {Cart} from "../components/cart/Cart";

function Layout() {
    return (
        <div className="App">
            {/*<nav> */}
            {/*    <NavLink to="/">Home</NavLink>*/}
            {/*    <NavLink to="/About">About</NavLink>*/}
            {/*</nav>*/}
            <Cart/>
            <Outlet></Outlet>
        </div>
    );
}

export default Layout;
