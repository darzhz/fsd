"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navBar";
import { cn } from "@/lib/utils";

export function NavbarHex() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
     
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-white p-l-10 rounded-full", className)}
    >
        <div className="flex justify-between">
        <div className="p-2 flex justify-center">
                <img src="https://www.hexaarch.com/assets/img/Hexaarch%20Logo.png" alt="Hexaarch"  width={100} className="object-contain pl-2"/>
        </div>
      <Menu setActive={setActive}>
        
        <div className="flex items-center space-x-4">
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">ASSET MANAGEMENT</HoveredLink>
            <HoveredLink href="/interface-design">WEALTH MANAGEMENT</HoveredLink>
            <HoveredLink href="/seo">PROPERTY MANAGEMENT</HoveredLink>
            <HoveredLink href="/branding">LAND DEVELOPMENT</HoveredLink>
            <HoveredLink href="/branding">OVERSEAS SERVICES</HoveredLink>
            <HoveredLink href="/branding">HOSPITALITY SERVICES</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="What we offer">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Property Management"
              href="#"
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="We take care of your property from start to finish"
            />
            <ProductItem
              title="software Development"
              href="#"
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="We do enterprice software development"
            />
            <ProductItem
              title="Marketing"
              href="#"
              src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="We do marketing and branding"
            />
            <ProductItem
              title="Paper Work and Legal"
              href="#"
              src="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="We do all the hassle with paper work and legal services"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Locations">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Kochi</HoveredLink>
            <HoveredLink href="/individual">Canada</HoveredLink>
            <HoveredLink href="/team">Rio</HoveredLink>
            <HoveredLink href="/enterprise">Berlin</HoveredLink>
          </div>
        </MenuItem>
        </div>
      </Menu>
      </div>
    </div>
  );
}
