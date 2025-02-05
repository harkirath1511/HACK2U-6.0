import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { 
  BarChart2, 
  Globe, 
  Layers, 
  ShoppingCart, 
  Calendar, 
  Book, 
  Heart 
} from "lucide-react";

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="h-screen flex ">
      {/* Sidebar positioned to the left */}
      <div className=" absolute left-0 top-0 h-screen ">


        <Sidebar
          collapsed={collapsed}
          className={`h-full transition-all duration-300 ${
            darkMode ? "bg-[#000000] text-white" : "bg-gray-300 py-4 text-black"
          }`}
        >
           <div className="p-4 pt-20 pb-7 flex flex-col items-center">
            <div className=" bg-gradient-to-br from-custom-blue to-custom-pink p-4 rounded-xl text-center w-full">
              <button
                className="text-white text-lg font-bold flex items-center justify-center w-full h-6 p-1"
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? "➡️" : "⬅️ Collapse"}
              </button>
            </div>
          </div>
          <Menu>
            <MenuItem icon={<BarChart2 />} className="pt-22">Charts</MenuItem>
            <MenuItem icon={<Globe />} className="pt-7">Maps</MenuItem>
            <MenuItem icon={<Layers />} className="pt-7">Components</MenuItem>
            <MenuItem icon={<ShoppingCart />} className="pt-7">E-commerce</MenuItem>
            <MenuItem icon={<Calendar />} className="pt-7">Calendar</MenuItem>
            <MenuItem icon={<Book />} className="pt-7">Documentation</MenuItem>
            <MenuItem icon={<Heart />} className="pt-7 pb-20">Examples</MenuItem>
          </Menu>

          {/* Footer with Collapse Button */}
         
        </Sidebar>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-[250px]">
        <h1 className="text-2xl font-bold">Main Content Here</h1>
      </div>
    </div>
  );
};

export default SidebarComponent;
