'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/navigation'
import NavigationTwo from './navigation-sideway'
import Loading from '@/app/(app)/loading'
import React, { ReactNode } from 'react'

interface AppLayoutProps {
    children: ReactNode;
    header: ReactNode;

}

const AppLayout: React.FC<AppLayoutProps> = ({ children, header }) => {
    // Gebruik de useAuth hook zodat je de user kan krijgen
    const { user } = useAuth({ middleware: 'auth', redirectIfAuthenticated: null }) // Gebruik null voor het redirectIfAuthenticated aangezien het hier niet word gebruikt

    // Als de user niet beschikbaar is, laat laad indicatie zien
    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-100">
        {/*Render het navigatie component */}
        <NavigationTwo user={user}/>

        {/*Render de header */}
        <header>{header}</header>

        {/*Render de main content */}
        <main>{children}</main>


        </div>
    )

}

export default AppLayout;
