"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageToggleProps {
  multiLanguage?: {
    language: string;
    describe: string;
  }[];
}

export function LanguageToggle({
  multiLanguage = [
    { language: "TH", describe: "Thai" },
    { language: "EN", describe: "English" },
    { language: "JP", describe: "Japanese" },
  ],
}: LanguageToggleProps) {
  const [language, setLanguage] = useState("EN");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
        className="text-gray-900 dark:text-gray-100"
        variant="ghost" size="icon">
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {multiLanguage.map((item) => (
          <DropdownMenuItem
            key={item.language}
            onClick={() => setLanguage(item.language)}
          >
            {item.describe}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
