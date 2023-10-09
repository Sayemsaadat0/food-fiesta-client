import Footar from "@/Shared/Footar/Footar";
import Navbar from "@/Shared/Navbar/Navbar";
import { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
  }
  
  const MainLayout = ({ children }: MainLayoutProps) => {
    return (
      <div>
        <Navbar></Navbar>
        {children}
        <Footar></Footar>
      </div>
    );
  };
  
  export default MainLayout;