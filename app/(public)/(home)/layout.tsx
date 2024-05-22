import React from "react";

const LayoutHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="size-full overflow-auto dark:bg-black">
      <div className="mx-auto size-full ">{children}</div>
    </div>
  );
};

export default LayoutHome;
