"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getCookie, setCookie } from "./cookie";

const languages = [
  { value: "en", label: "English" },
  { value: "bn", label: "বাংলা" },
];

export default function TweakLanguage() {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<any>(languages[0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cookieValue: any = getCookie("locale");

      if (cookieValue) {
        const fromCookie = languages.filter(
          (language: any) => language.value === cookieValue
        )[0];
        setSelectedLanguage(fromCookie);
      } else {
        setCookie("locale", selectedLanguage.value, 5);
      }
      setIsClient(true);
    }
  }, []);

  return !isClient ? null : (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex justify-between items-center gap-2"
        >
          <Globe className="h-4 w-4" />
          <span className="pl-2">{selectedLanguage.label}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  onSelect={() => {
                    setSelectedLanguage(language);
                    setCookie("locale", language.value, 5);
                    setOpen(false);
                    window.location.reload();
                  }}
                >
                  {language.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
