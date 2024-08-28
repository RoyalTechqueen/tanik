import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="mx-auto h-full w-full overflow-auto">
      <Outlet />
    </div>
  );
}
