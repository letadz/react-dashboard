import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import { SidebarMenu } from "@/components/js/constants/SidebarMenu";
import { ErrorPage } from "../components/pages";

const renderMainRoute = (menu) => {
  if (menu.component) {
    return (
      <Route
        key={menu.url}
        path={menu.url}
        exact={menu.exact}
        element={<menu.component />}
      />
    );
  }
  return;
};

const renderSubMenuRoutes = (subMenu) =>
  subMenu.map((subMenuItem) => (
    <Route
      key={subMenuItem.url}
      path={subMenuItem.url}
      element={<subMenuItem.component />}
    />
  ));

const RoutesLayout = () => (
  <Router>
    <Layout>
      <Routes>
        {SidebarMenu.map((menu) => renderMainRoute(menu))}

        {SidebarMenu.filter((menu) => menu.subMenu).flatMap((menu) =>
          renderSubMenuRoutes(menu.subMenu)
        )}

        {/* Fallback route for handling 404 errors */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default RoutesLayout;
