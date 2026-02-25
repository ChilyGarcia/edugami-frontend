"use client";

import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import DashboardNavMenu from "./DashboardNavMenu";

const DashboardNavbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="absolute top-4 rounded-lg grid place-content-center left-4 bg-secondary z-10">
      <button className="" onClick={() => setToggle(true)}>
        <Bars3Icon className="h-12" />
      </button>
      <DashboardNavMenu setToggle={setToggle} toggle={toggle} />
    </div>
  );
};

export default DashboardNavbar;
