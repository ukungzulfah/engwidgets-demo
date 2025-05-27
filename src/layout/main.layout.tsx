import { Outlet } from "react-router";
import Sidebar from "../components/sidebar.comp";

export default function MainLayout() {
  return Root({
    child: Column({
      children: [
        Sidebar(),
        Widget(Outlet)
      ]
    })
  }).builder()
}
