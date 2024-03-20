import "../navigation/navigation.css";
import Home from "./home/navigation-home";
import Shop from "./shop/navigation-shop";
import About from "./about/navigation-about";
import Contact from "./contact/navigation-contact";

export function Navigation() {
  return (
    <div className="navigation-wrapper">
      <Home />
      <Shop />
      <About />
      <Contact />
    </div>
  );
}
export default Navigation;
