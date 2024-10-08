import { Outlet, useNavigate } from "react-router-dom";
import { SideBar } from "../sidebar";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

const Authlayout = () => {
  const navigate = useNavigate();
  const { accessToken, role } = useAuth();

  useEffect(() => {
    if (!accessToken || accessToken === undefined) {
      navigate("/signin");
    }
  }, [accessToken, navigate]);

  return (
    <div className="w-full flex">
      {role && <SideBar role={role} />}
      <div className="ml-60 w-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Authlayout;
