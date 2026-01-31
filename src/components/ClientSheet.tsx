'use client';

import React, { useEffect } from 'react';
import { Menu } from "lucide-react";
import { usePathname } from 'next/navigation';

import { DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface ClientSheetProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  nameBtn: string;
}

export default function ClientSheet({ children, className, title, nameBtn }: ClientSheetProps) {
  const [open, setOpen] = React.useState(false);
  const pathName = usePathname();

  const toggleOpen = () => setOpen((prevState) => !prevState);

  useEffect(() => {
    if (open) setOpen(false);
  }, [pathName]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className={className} onClick={toggleOpen}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">{nameBtn}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-3/4">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        {children}
      </SheetContent>
    </Sheet>
  );
}