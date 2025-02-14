
import Header from "./Header"; // Navigation


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen py-4">
      
      <Header />

      {/* Page Content */}
      <main className="flex-1 container mx-auto w-full p-6">{children}</main>

      
    </div>
  );
};

export default Layout;
