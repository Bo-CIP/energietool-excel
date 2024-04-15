import React from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"
import { Terminal } from "lucide-react"
import { CircleAlert } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function Stap5() {

    return (
        <>

            <div className="flex justify-center mt-6">
                <form className="min-w-[500px] max-w-[500px]">
                    <div className="grid w-full items-center gap-4">
                        <Alert>
                            <CircleAlert />
                            <AlertTitle className="ml-2">Tip!</AlertTitle>
                            <AlertDescription className="ml-2">Ga bij elke stap langs zodat u zeker weet of alle velden zijn ingevuld en zo ja, zorg dat alle informatie juist is!

                            </AlertDescription>
                        </Alert>

                        <div className="grid grid-cols-2 gap-4 mt-16 justify-items-center">
                            <div className="col-span-2">
                                <div className="flex flex-col space-y-1.5">
                                    <Link href="dashboard/resultaat">
                                <Button className="items-center">Ga naar uw resultaten</Button>
                                </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}