import React from "react";
import TopNav from "@/components/top-nav";

const LayoutHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="size-full overflow-auto dark:bg-black">
      {/* <TopNav /> */}
      <div className="mx-auto size-full ">{children}</div>
    </div>
  );
};

export default LayoutHome;
