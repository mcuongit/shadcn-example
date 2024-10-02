import { Outlet } from "react-router-dom";
import { GlobalErrorBoundary } from "./error-boundary";
import Footer from "./footer";
import Header from "./header";

export default function Layout() {
  return (
    <GlobalErrorBoundary>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </GlobalErrorBoundary>
  );
}
