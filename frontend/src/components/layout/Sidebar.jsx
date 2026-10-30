import { NavLink, Link } from "react-router";
import logo from "../../assets/logo.png";
import { ChartColumnBig, ClipboardList, FilePlusCorner } from "lucide-react";

const linkClass = ({ isActive }) => {
  return (
    "flex items-center gap-3 rounded px-4 py-2 " +
    (isActive ? "bg-primary-700 text-white " : "hover:bg-primary-100")
  );
};
function Sidebar() {
  return (
    <aside className="flex flex-col w-64 p-6 gap-4">
      <Link to="/">
        <img src={logo} alt="Logo DemandFlow" />
      </Link>{" "}
      <NavLink to="/" end className={linkClass}>
        <ChartColumnBig size={20} aria-hidden="true" />
        Tableau de bord
      </NavLink>
      <NavLink to="/my-requests" className={linkClass}>
        <ClipboardList size={20} aria-hidden="true" />
        Mes demandes
      </NavLink>
      <NavLink to="/new-request" className={linkClass}>
        <FilePlusCorner size={20} aria-hidden="true" />
        Nouvelle demande
      </NavLink>
    </aside>
  );
}
export default Sidebar;
