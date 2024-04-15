"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
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
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Chart } from "./ui/chart"

export default function Resultaat() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">

                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="../dashboard">Dashboard</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="#">Resultaten</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    
                </header>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                        <Tabs defaultValue="terugverdientijd">
                            <div className="flex items-center">
                                <TabsList>
                                    <TabsTrigger value="terugverdientijd">Terugverdientijd</TabsTrigger>
                                    <TabsTrigger value="investering">Uw investering</TabsTrigger>
                                    <TabsTrigger value="year">Year</TabsTrigger>
                                </TabsList>
                                <div className="ml-auto flex items-center gap-2">

                                </div>
                            </div>
                            <TabsContent value="terugverdientijd">
                                <Card x-chunk="dashboard-05-chunk-3">
                                    <CardHeader className="px-7">
                                        <CardTitle>Terug verdienen!</CardTitle>
                                        <CardDescription>
                                            Hieronder ziet u een grafiek, deze grafiek laat zien hoelang het zal duren voordat uw energie zichzelf heeft terugbetaald
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Chart />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="investering">
                                <Card x-chunk="dashboard-05-chunk-3">
                                    <CardHeader className="px-7">
                                        <CardTitle>Terug verdienen!</CardTitle>
                                        <CardDescription>
                                            Hieronder ziet u een grafiek, deze grafiek laat zien hoelang het zal duren voordat uw energie zichzelf heeft terugbetaald
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Chart />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-1 mt-11 ">
                       
                                
                            
                                <Card className="min-h-[691px]">
                                    <CardHeader className="px-7">
                                        <CardTitle>Uw energie label</CardTitle>
                                        <CardDescription>
                                            Hieronder ziet u uw uitgerekende energie label, daaronder ziet u ook de waardes waar u aan moet voldoen om een hoger energie label te krijgen.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <h1 className="text-5xl mt-3 text-center">C</h1>
                                        <Separator className="mt-5" />
                                        <h1 className="text-3xl mt-5 ml-9">G = 380</h1>
                                        <h1 className="text-3xl mt-3 ml-9">F = 335</h1>
                                        <h1 className="text-3xl mt-3 ml-9">E = 290</h1>
                                        <h1 className="text-3xl mt-3 ml-9">D = 250</h1>
                                        <h1 className="text-3xl mt-3 ml-9">C = 190</h1>
                                        <h1 className="text-3xl mt-3 ml-9">B = 160</h1>
                                        <h1 className="text-3xl mt-3 ml-9">A = 105</h1>
                                    </CardContent>
                                </Card>
                    
                    </div>



                </main>
            </div>
        </div>

    )
}
