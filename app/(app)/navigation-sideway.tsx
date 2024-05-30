import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Home,
  LineChart,
  Settings,
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useAuth } from "@/hooks/auth";
import { useState } from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip"

interface User {
  name: string;
  email: string;
}

interface NavigationTwoProps {
  user: User | null;
}

const NavigationTwo: React.FC<NavigationTwoProps> = ({ user }) => {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

return (

  <>
<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
<nav className="flex flex-col items-center justify-center gap-4 px-2 sm:py-4 h-full">
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Home className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Dashboard</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">Dashboard</TooltipContent>
    </Tooltip>
  </TooltipProvider>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          <LineChart className="h-5 w-5" />
          <span className="sr-only">Analytics</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">Analytics</TooltipContent>
    </Tooltip>
  </TooltipProvider>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">Settings</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</nav>
        
          
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full w-[40px] h-[40px]"
              >
                {user?.name ? user.name.charAt(0).toUpperCase() : ""}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="mb-5">
              <DropdownMenuLabel><div>{user?.name}</div></DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Instellingen</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>Log uit</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        
        </nav>
      </aside>
      
        
</>
      )
    }

    export default NavigationTwo;
      