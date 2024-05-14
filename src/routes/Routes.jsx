import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import { SidebarMenu } from "../utils/SidebarMenu";
import { ErrorPage } from "../components/pages";

const renderMainRoutes = (menu) => (
  <Route
    key={menu.url}
    path={menu.url}
    exact={menu.exact}
    element={<menu.component />}
  />
);

const renderSubMenuRoutes = (subMenu) =>
  subMenu.map((subMenuItem, index) => (
    <Route
      key={index}
      path={subMenuItem.url}
      element={<subMenuItem.component />}
    />
  ));

const RoutesLayout = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Render routes for main menu items */}
          {SidebarMenu.map(renderMainRoutes)}

          {/* Render routes for sub-menu items */}
          {SidebarMenu.map((menu) =>
            menu.subMenu ? renderSubMenuRoutes(menu.subMenu) : null
          )}

          {/* Fallback route for handling 404 errors */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default RoutesLayout;
