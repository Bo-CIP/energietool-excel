import React from "react";
import LandingsDashboard from "@/components/dashboard";
import { fetchDataFromLaravel } from "@/components/ApiCall";



export default function LandingPage()
{
   

    fetchDataFromLaravel();

    return(
       
        <>
        <LandingsDashboard>
        </LandingsDashboard>
        </>
    )
}

