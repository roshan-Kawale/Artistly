"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";

interface TabNavigationProps {
  options: { id: string; label: string }[];
}

export function TabNavigation({ options }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState<string>(options[0].id);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (key : string , id : string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key , id);
    setActiveTab(id);
    router.push(`dashboard/?${params.toString()}`);
  }

  return (
    <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
      {options.map((option) => (
        <Button
          key ={option.id}
          variant={activeTab === option.id ? "default" : "ghost"}
          size="sm"
          onClick={()=>handleClick( "tab" , option.id)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
