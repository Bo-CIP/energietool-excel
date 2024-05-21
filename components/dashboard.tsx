"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Slider from "@/components/slider";

interface User {
  name: string;
  email: string;
}

interface DashboardProps {
  user: User | null;
}

const LandingsDashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 mt-10">
              <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <CardHeader className="pb-3">
                  <CardTitle>Berekenen</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Met de onderstaande knop kunt u een formulier openen waarmee
                    u uw energie berekeningen kan maken
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Maak een berekening</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[750px]">
                      <Slider />
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>Berekeningen</CardDescription>
                  <CardTitle className="text-4xl">561</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    136 meer dan gisteren
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>Gebruikers</CardDescription>
                  <CardTitle className="text-4xl">38</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    16 meer als vorig uur
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>
            <div className="flex items-center"></div>

            <Card x-chunk="dashboard-05-chunk-3" className="min-h-[680px]">
              <CardHeader className="px-7">
                <CardTitle>Berekeningen</CardTitle>
                <CardDescription>Uw recente berekeningen</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </div>
          <div className="mt-10">
            <Card
              className="overflow-hidden min-h-[878px]"
              x-chunk="dashboard-05-chunk-4"
            ></Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingsDashboard;
