import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className=" bg-green-200 p-4 flex-1 min-h-0 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AppLayout;
