import { Outlet, NavLink } from "react-router-dom";
import "../css/style.css";
import "../css/colors-fonts.css";

function Layout() {
	const menuItemClass = ({ isActive }) =>
		isActive ? "menuItem activeMenuItem" : "menuItem";

	return (
		<div className="layout">
			<div className="header">
				<div className="logo"></div>
				<h1>ArtistFinder</h1>
			</div>
			<div className="menu">
				<div className="menuItemGroup">
					<NavLink to="/" className={menuItemClass}>
						Home
					</NavLink>
					<NavLink to="/artists" className={menuItemClass}>
						Artists
					</NavLink>
					<NavLink to="/addnew" className={menuItemClass}>
						Add new
					</NavLink>
				</div>
			</div>
			<div className="content">
				<Outlet />
			</div>
			<div className="footer">© Anders Hedström</div>
		</div>
	);
}

export default Layout;
