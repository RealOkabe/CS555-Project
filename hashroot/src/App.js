import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { AuthProvider, RequiresAuth } from "./hoc/Authentication";
import { USER_ROLES } from "./constants";

import Homepage from "./components/Homepage/Homepage";
import Layout from "./components/Layout";
import { Login } from "./components/Authentication";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/shared/NotFound";
import Profile from "./components/Profile";
import { Projects, CreateProject } from "./components/Projects";
import { CreateUser, Users } from "./components/Users";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <RequiresAuth>
                <Dashboard />
              </RequiresAuth>
            }
          />
          <Route path="/users" element={<Outlet />}>
            <Route
              index
              element={
                <RequiresAuth
                  roles={[
                    USER_ROLES.ADMIN,
                    USER_ROLES.SALES_REP,
                    USER_ROLES.GENERAL_CONTRACTOR,
                  ]}
                >
                  <Users />
                </RequiresAuth>
              }
            />
            <Route
              path="create"
              element={
                <RequiresAuth
                  roles={[
                    USER_ROLES.ADMIN,
                    USER_ROLES.SALES_REP,
                    USER_ROLES.GENERAL_CONTRACTOR,
                  ]}
                >
                  <CreateUser />
                </RequiresAuth>
              }
            />
          </Route>
          <Route path="/projects" element={<Outlet />}>
            <Route
              index
              element={
                <RequiresAuth
                  roles={[
                    USER_ROLES.CUSTOMER,
                    USER_ROLES.SALES_REP,
                    USER_ROLES.GENERAL_CONTRACTOR,
                    USER_ROLES.WORKER,
                  ]}
                >
                  <Projects />
                </RequiresAuth>
              }
            />
            <Route
              path="create"
              element={
                <RequiresAuth roles={[USER_ROLES.SALES_REP]}>
                  <CreateProject />
                </RequiresAuth>
              }
            />
          </Route>
          <Route
            path="/profile"
            element={
              <RequiresAuth>
                <Profile />
              </RequiresAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;