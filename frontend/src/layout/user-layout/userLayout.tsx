import { Outlet, useNavigate } from "react-router-dom";
import { SideBar } from "../sidebar";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

const Userlayout = () => {
  const navigate = useNavigate();
  const { accessToken, role } = useAuth();

  useEffect(() => {
    if (!accessToken || accessToken === undefined) {
      navigate("/signin");
    }
    if (accessToken && role === "admin") {
      navigate("/dashboard");
    }
  }, [accessToken, navigate, role]);

  return <Outlet />;
};

export default Userlayout;
