"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CreateBussiness = () => {
const router  = useRouter()
  const [businessName, setBusinessName] = useState<string>();
  const onCreateBusiness = () => {
    console.log(businessName);
    router.push('/dashboard')

  };
  return (
    <div className="p-14 items-center flex flex-col gap-20 my-10">
      <Image src="/business.png" alt="business" width={200} height={200} />
      <div className="flex flex-col items-center gap-4 max-w-3xl">
        <h2 className="text-4xl">What should we call your business</h2>
        <p className="text-slate-500">
          You can always change this later from settings
        </p>
        <div className="w-full">
          <Label htmlFor="" className="text-slate-400">
            Team Name
          </Label>
          <Input
            placeholder="Enter your team name"
            className="mt-2"
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>
        <Button onClick={onCreateBusiness} className="w-full" disabled={!businessName}>
          Create Busness
        </Button>
      </div>
    </div>
  );
};

export default CreateBussiness;
