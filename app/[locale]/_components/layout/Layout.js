import Header from "./Header/Header";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <div className=" mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
