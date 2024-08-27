import { Outlet, useNavigate } from "react-router-dom";
import { SideBar } from "../sidebar";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

const Adminlayout = () => {
  const navigate = useNavigate();
  const { accessToken, role } = useAuth();

  useEffect(() => {
    if (!accessToken || accessToken === undefined) {
      navigate("/signin");
    }
    if (accessToken && role === "user") {
      navigate("/user-dashboard");
    }
  }, [accessToken, navigate, role]);

  return <Outlet />;
};

export default Adminlayout;
