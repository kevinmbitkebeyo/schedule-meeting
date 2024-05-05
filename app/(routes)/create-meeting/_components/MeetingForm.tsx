import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import React from "react";

const MeetingForm = () => {
  return (
    <div className="p-4">
      <h2>
        <ChevronLeft /> Cancel
      </h2>
      <div className="mt-4">
        <h2 className="font-bold text-2xl my-4">Create new Event</h2>
        <hr />
      </div>
      <div className="flex flex-col gap-3 my-4">
        <h2 className="font-bold">Event Name *</h2>
        <Input placeholder="Name of your meeting" />
        <h2>Duration *</h2>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="max-w-40">
              30 Min
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
       
            <DropdownMenuItem>15 Min</DropdownMenuItem>
            <DropdownMenuItem>30 Min</DropdownMenuItem>
            <DropdownMenuItem>45 Min</DropdownMenuItem>
            <DropdownMenuItem>60 Min</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
export default MeetingForm;
