import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1 bg-stone-100">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;