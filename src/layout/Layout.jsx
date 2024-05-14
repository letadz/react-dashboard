import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-2">{children}</main>
    </div>
  );
};

export default Layout;
