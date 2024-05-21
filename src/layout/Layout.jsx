import Sidebar from "../components/Sidebar/Sidebar";
import { Footer, Navbar } from "@/components/pages";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen min-w-full overflow-auto">
      <Sidebar />

      <main className="flex-1">
        <Navbar />
        <div className="flex-1 min-h-full bg-gray-100 p-6 px-4 sm:px-8">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
