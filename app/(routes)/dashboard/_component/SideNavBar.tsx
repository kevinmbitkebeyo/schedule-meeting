"use client"

import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, Clock, Plus, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const SideNavBar = () => {
    const pathname = usePathname()
    const [activePath, setActivePath] = useState(pathname)

    useEffect(() => {
        pathname&&setActivePath(pathname)
    }, [pathname])

  const menu = [
    {
      id: 1,
      name: "Meeting Type",
      path: "/dashboard/meeting-type",
      icon: Briefcase,
    },
    {
      id: 2,
      name: "Schedule meeting",
      path: "/dashboard/schedule-meeting",
      icon: Calendar,
    },
    {
      id: 3,
      name: "Availability",
      path: "/dashboard/availability",
      icon: Clock,
    },
    {
      id: 4,
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="p-5 py-14">
      <div className="flex justify-center">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
      </div>
      <div>
        <Link href={"/create-meeting"}>
          <Button className="flex gap-2 w-full rounded-full mt-7">
          <Plus /> Create
        </Button>
        </Link>

        <div className="mt-5 flex flex-col gap-4">
            
            {menu.map((item, index) => (
                <Link href={item.path} key={index}>
              <Button
               variant="ghost"
                className={`flex gap-2 w-full justify-start mt-2 ${activePath === item.path&&"text-sky-600 bg-blue-100"}`}
              >
                <item.icon /> {item.name}
              </Button>
            </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
