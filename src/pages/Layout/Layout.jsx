import { Navbar } from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../contexts/userContext";

export function Layout() {
  return (
    <UserContextProvider>
      <main>
        <Navbar />
        <section className="body">
          <Outlet />
        </section>
      </main>
    </UserContextProvider>
  );
}