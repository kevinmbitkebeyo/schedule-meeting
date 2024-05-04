import React from "react";
import SideNavBar from "./_component/SideNavBar";
import DashboardHeaderPage from "./_component/DashboardHeader";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="w-64 bg-slate-50 h-screen fixed">
        <SideNavBar />
      </div>
      <div className="md:ml-64">
        <DashboardHeaderPage />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
