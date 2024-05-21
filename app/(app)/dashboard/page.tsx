'use client'

import React from "react";
import LandingsDashboard from "@/components/dashboard";
import Header from "../header";
import { useAuth } from "@/hooks/auth";
import Loading from "../loading"





export default function LandingPage()
{
    const { user } = useAuth({ middleware: 'auth', redirectIfAuthenticated: null }) // Gebruik null voor het redirectIfAuthenticated aangezien het hier niet word gebruikt

    // Als de user niet beschikbaar is, laat laad indicatie zien
    if (!user) {
        return <Loading />
    }
   

    

    return(
       
        <>
            <LandingsDashboard user={user} />
        </>
    )
}

