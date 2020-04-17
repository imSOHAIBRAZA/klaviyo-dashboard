import Index from "../views/Index.js";
import Profile from "../views/examples/Profile.js";
import Maps from "../views/examples/Maps.js";
import Register from "../views/Register.js";
import Login from "../views/Login.js";
import AddPaper from "../views/AddPaper.js";
import ViewPaper from "../views/ViewPaper.js";
import EditPaper from "../views/EditPaper.js";
import Keywords from "../views/Keywords.js";
import Visualization from "../views/Visualization.js";

import Tables from "../views/examples/Tables.js";
import Icons from "../views/examples/Icons.js";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    display: "none"

  },
  {
    path: "/add-paper",
    name: "Add Paper",
    icon: "ni ni-fat-add text-orange",
    component: AddPaper,
    layout: "/admin",
    // display: "none"
  },
  {
    path: "/edit-paper/:id",
    name: "Edit Paper",
    icon: "ni ni-fat-add text-orange",
    component: EditPaper,
    layout: "/admin",
    display: "none"
  },
   {
    path: "/view-paper",
    name: "My Papers",
    icon: "fas fa-tasks text-blue",
    component: ViewPaper,
    layout: "/admin",
    // display: "none"
  },
  
   {
    path: "/keyword",   
    name: "Keyword",
    icon: "ni ni-archive-2 text-yellow",
    component: Keywords,
    layout: "/admin",
    // display: "none"
  },
   {
    path: "/visualization",
    name: "Visualization",
    icon: "fas fa-chart-pie text-green",
    component: Visualization,
    layout: "/admin",

  },
  
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin",
  //   display: "none"

  // },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-green",
    component: Profile,
    layout: "/admin",
    display: "none"

  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
    display: "none"

  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    display: "none"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
    display: "none"
    
  }
];
export default routes;
