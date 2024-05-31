import { menu } from "../_api/menu.json";
import Menu from "../raw-meat/page";

export default function Menupage() {
  return <Menu categories={menu} />;
}
