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
    ArrowRight
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
import { BarChart } from "./ui/barchart"
import { LineChart } from "./ui/linechart"

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
                                </TabsList>
                                <div className="ml-auto flex items-center gap-2">

                                </div>
                            </div>
                            <TabsContent value="terugverdientijd">
                                <Card className="min-h-[711px]">
                                    <CardHeader className="px-7">
                                        <CardTitle>Terug verdienen!</CardTitle>
                                        <CardDescription>
                                            Hieronder ziet u een grafiek, deze grafiek laat zien hoelang het zal duren voordat uw energie zichzelf heeft terugbetaald
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <BarChart />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="investering">
                                <Card x-chunk="dashboard-05-chunk-3">
                                    <CardHeader className="px-7">
                                        <CardTitle>Return on investment</CardTitle>
                                        <CardDescription>
                                            Hieronder ziet u uw Return on investment (ROI), dit laat zien wat u terugverdient na een bepaalde tijd, hier krijgt u een duidelijker overzicht van uw investeringen en ook wat u daarmee terugverdient.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <LineChart/>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-1 mt-11 ">



                        <Card className="">
                            <CardHeader className="px-7">
                                <CardTitle>Uw energie label</CardTitle>
                                <CardDescription>
                                    Hieronder ziet u uw uitgerekende energie label, daaronder ziet u ook de waardes waar u aan moet voldoen om een hoger energie label te krijgen.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                            <div className="flex items-center justify-between mb-9">
                                    <h1 className="text-5xl mt-5 ml-44 text-red-500">G</h1>
                                    <h1 className="text-5xl mt-5"><ArrowRight /> </h1>
                                    <h1 className="text-5xl mt-5 mr-44 text-yellow-500">D</h1>
                                </div>
                                <div className="flex items-center justify-between mt-9">
                                    <h1 className="text-3xl ml-9">Label</h1>
                                    <h1 className="text-3xl mr-16">kWh</h1>
                                    </div>
                                    <Separator className="mt-2" />
                                <div className="flex items-center justify-between mt-3">
                                    <h1 className="text-3xl ml-16 text-red-500">G</h1>
                                    <h1 className="text-3xl ml-11 text-center">=</h1>
                                    <h1 className="text-3xl mr-16">380</h1>
                                </div>
                                
                                <div className="flex items-center justify-between mt-3">
                                    <h1 className="text-3xl  ml-16 text-red-500">F</h1>
                                    <h1 className="text-3xl ml-12 text-center">=</h1>
                                    <h1 className="text-3xl  mr-16">335</h1>
                                </div>
                                
                                <div className="flex items-center justify-between  mt-3">
                                    <h1 className="text-3xl ml-16 text-yellow-500">E</h1>
                                    <h1 className="text-3xl  ml-12 text-center">=</h1>
                                    <h1 className="text-3xl  mr-16">290</h1>
                                </div>
                                
                                <div className="flex items-center justify-between mt-3">
                                    <h1 className="text-3xl ml-16 text-yellow-500">D</h1>
                                    <h1 className="text-3xl ml-11 text-center">=</h1>
                                    <h1 className="text-3xl mr-16">250</h1>
                                </div>
                                
                                <div className="flex items-center justify-between  mt-3">
                                    <h1 className="text-3xl ml-16 text-green-200">C</h1>
                                    <h1 className="text-3xl ml-10 text-center">=</h1>
                                    <h1 className="text-3xl mr-16">190</h1>
                                </div>
                                
                                <div className="flex items-center justify-between mt-3">
                                    <h1 className="text-3xl  ml-16 text-green-400">B</h1>
                                    <h1 className="text-3xl ml-10 text-center">=</h1>
                                    <h1 className="text-3xl mr-16">160</h1>
                                </div>
                                
                                <div className="flex items-center justify-between mt-3">
                                    <h1 className="text-3xl  ml-16 text-green-500">A</h1>
                                    <h1 className="text-3xl  ml-10 text-center">=</h1>
                                    <h1 className="text-3xl  mr-16">105</h1>
                                </div>
                                <div className="flex items-center justify-between mt-3">
                                    <h1 className="text-3xl  ml-16 text-green-500">A+</h1>
                                    <h1 className="text-3xl  ml-10 mr-9 text-center ">=</h1>
                                    <h1 className="text-3xl  mr-16">75</h1>
                                </div>
                                <div className="flex items-center justify-between mt-3">
                                    <h1 className="text-3xl  ml-16 text-green-500">A++</h1>
                                    <h1 className="text-3xl  ml-9 mr-12 text-center">=</h1>
                                    <h1 className="text-3xl  mr-16">50</h1>
                                </div>
                                <div className="flex items-center justify-between mt-3">
                                    <h1 className="text-3xl  ml-16 text-green-500">A+++</h1>
                                    <h1 className="text-3xl  mr-12">=</h1>
                                    <h1 className="text-3xl  mr-16">0</h1>
                                </div>
                                <div className="flex items-center justify-between mt-3">
                                    <h1 className="text-3xl  ml-16 text-green-500">A++++</h1>
                                    <h1 className="text-3xl  mr-24 ml-7">=</h1>
                                    <h1 className="text-3xl  mr-16">0</h1>
                                </div>
                                <div className="mb-3"></div>
                            </CardContent>
                        </Card>

                    </div>



                </main>
            </div>
        </div>

    )
}
