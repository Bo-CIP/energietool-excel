"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
  Calculator,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Chart } from "@/components/ui/chart";

export default function AccountBerekenDashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Home className="h-5 w-5" />
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
                  href="/dashboard/mijn-berekeningen"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Calculator className="h-5 w-5" />
                  <span className="sr-only">Berekeningen</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Berekeningen</TooltipContent>
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
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
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
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Mijn berekeningen</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="/placeholder-user.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card className="sm:col-span-6">
                <CardHeader className="pb-3">
                  <CardTitle>Bereken nu!</CardTitle>
                  <CardDescription className="text-balance leading-relaxed">
                    Introducing Our Dynamic Orders Dashboard for Seamless
                    Management and Insightful Analysis.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Maak berekening</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            value="Pedro Duarte"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input
                            id="username"
                            value="@peduarte"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </div>
            <Tabs defaultValue="berekening-user">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="berekening-user">
                    Mijn berekeningen
                  </TabsTrigger>
                  <TabsTrigger value="terugverdientijd">
                    Terugverdientijd
                  </TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1 text-sm"
                      >
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Sorteer op</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Sorteer op nieuwste
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Sorteer op oudste
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <TabsContent value="berekening-user">
                <Card>
                  <CardHeader className="px-7">
                    <CardTitle>Mijn eerdere berekeningen</CardTitle>
                    <CardDescription>
                      Zie uw recentelijke berekeningen
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Bedrijf/persoon</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Type
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Datum
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Sergio</TableCell>
                          <TableCell>Vernieuwing</TableCell>
                          <TableCell>04-04-2024</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="terugverdientijd">
                <Card>
                  <CardHeader className="px-7">
                    <CardTitle>Mijn eerdere berekeningen</CardTitle>
                    <CardDescription>
                      Zie uw recentelijke berekeningen
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart></Chart>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Bedrijf/persoons informatie
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Datum: `Placeholder datum`</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Bewerk</DropdownMenuItem>
                      <DropdownMenuItem>Exporteer</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Annuleer</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Bedrijfs gegevens</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Bedrijfs naam<span></span>
                      </span>
                      <span>Corporate I.P. BV</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Straat en huisnummer
                      </span>
                      <span>Van Weerden Poelmanweg 23a</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Postcode plaats
                      </span>
                      <span>Soest</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Telefoonnummer
                      </span>
                      <span>030 237 4300</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        E-mail adres
                      </span>
                      <span>bo@corporateip.nl</span>
                    </li>
                  </ul>
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <div className="font-semibold">pand/woning gegevens</div>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Bouwjaar van het pand/woning
                      </span>
                      <span>2004</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        m2 oppervlak
                      </span>
                      <span>130 m2</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Uw huidige verwarmingssysteem
                      </span>
                      <span>Luchtverwarming</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Vloerverwarming of radiator
                      </span>
                      <span>Vloer</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        De CV temperatuur
                      </span>
                      <span>40 °C</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Ventilatie methode
                      </span>
                      <span>WTW lokaal</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Spouw en/of vloer isolatie?
                      </span>
                      <span>Ja</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Soort glas</span>
                      <span>HR++</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Aantal zonnepanelen al aanwezig
                      </span>
                      <span>7</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">November 23, 2023</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
