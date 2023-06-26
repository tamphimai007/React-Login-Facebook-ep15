import React, { useEffect, useState } from "react";
import SideBar from "../layout/SideBar";
import HeaderBar from "../layout/HeaderBar";
import { Box } from "@mui/material";
import { Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentAdmin } from "../functions/auth";
import Notfound404 from "../components/pages/Notfound404";

const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (user && user.user.token) {
      currentAdmin(user.user.token)
        .then((r) => {
         // console.log(r);
            setOk(true)
        })
        .catch((err) => {
          console.log(err)
          setOk(false)
        });
    }
  }, [user]);

  console.log("adminroute", user.user.role);

  const text = "No Permission!!!"

  return ok ? (
    <div className="app">
      <SideBar />
      <main className="content">
        <HeaderBar />
        <div className="content_body">
          <Box m="20px">{children}</Box>
        </div>
      </main>
    </div>
  ) : <Notfound404  text={text}/>
};

export default AdminRoute;
