import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { toast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

// De `useAuth` hook biedt verschillende functionaliteiten voor authenticatie en gebruikersbeheer.
export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    // Initialiseer de router en parameters voor navigatie.
    const router = useRouter()
    const params = useParams()

    // Gebruik SWR om de gebruikersgegevens op te halen en bij te werken.
    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                // router.push('/verify-email') // Uncomment deze regel om door te sturen naar e-mailverificatie bij een 409 error.
            }),
    )

    // Gebruik SWR om de contactpersoon op te halen.
    const { data: contact, error: contactError, mutate: mutateContact } = useSWR('/dashboard', () =>
        axios
            .get('/dashboard')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
            }),
    )

    const { data: adres, error: adresError, mutate: adresContact } = useSWR('/dashboard', () =>
        axios
            .get('/dashboard')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
            }),
    )

    const { data: energielabel, error: energielabelError, mutate: mutateEnergielabel } = useSWR('/dashboard', () =>
        axios
            .get('/dashboard')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
            }),
    )

    const { data: gebouw, error: pandError, mutate: pandContact } = useSWR('/dashboard', () =>
        axios
            .get('/dashboard')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
            }),
    )

    // Haal een CSRF-token op om beveiligde verzoeken te kunnen sturen.
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    // Functie om een nieuwe gebruiker te registreren.
    const register = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .post('/register', props)
            .then(() => mutate()) // Bijwerken van de gebruiker gegevens na succesvolle registratie.
            .catch(error => {
                if (error.response.status == 422) {
                    toast({
                        title: "Er is een fout opgetreden",
                        description: "Dit email is al in gebruik, voer a.u.b een ander email adres in",
                    })
                }
                setErrors(error.response.data.errors)
            })
    }

    // Functie om pandgegevens op te slaan.
    const pand = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .post('/pand', props)
            .then(() => mutate()) // Bijwerken van de gebruiker gegevens na succesvolle pand registratie.
            .catch(error => {
                if (error.response.status == 422) {
                    toast({
                        title: "Er is een fout opgetreden",
                        description: "uw verzoek kon niet worden doorgezet",
                    })
                }
                setErrors(error.response.data.errors)
            })
    }

    // Functie om berekeningen op te slaan.
    const berekening = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .post('/berekening', props)
            .then(() => mutate()) // Bijwerken van de gebruiker gegevens na succesvolle berekening.
            .catch(error => {
                if (error.response.status == 422) {
                    toast({
                        title: "Er is een fout opgetreden",
                        description: "uw verzoek kon niet worden doorgezet",
                    })
                }
                setErrors(error.response.data.errors)
            })
    }

    // Functie om een gebruiker in te loggen.
    const login = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/login', props)
            .then(() => mutate()) // Bijwerken van de gebruiker gegevens na succesvolle login.
            .catch(error => {
                if (error.response.status == 422) {
                    toast({
                        title: "Er is een fout opgetreden",
                        description: "U heeft niet de juiste gegevens ingevoerd, probeer het nogmaals",
                    })
                }

                setErrors(error.response.data.errors)
            })
    }

    // Functie om de dashboardgegevens op te halen.
    const dashboard = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .get('/dashboard', props)
            .then(() => {
                mutate()
                mutateContact() // Mutate de contactgegevens ook bijwerken
            }) 
            .catch(error => {
                if (error.response.status == 422) {
                    toast({
                        title: "Er is een fout opgetreden",
                        description: "uw verzoek kon niet worden doorgezet",
                    })
                }
                setErrors(error.response.data.errors)
            }) 
    }

    // Functie om een wachtwoordreset aan te vragen.
    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status)) // Status updaten na succesvolle aanvraag.
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    // Functie om een wachtwoord te resetten.
    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: params.token, ...props })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)), // Omleiden naar login na succesvolle reset.
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    // Functie om de e-mailverificatie opnieuw te versturen.
    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status)) // Status updaten na succesvolle herverzending.
    }

    // Functie om uit te loggen.
    const logout = async () => {
        if (!error) {
            await axios.post('/logout').then(() => mutate()) // Bijwerken van de gebruiker gegevens na succesvolle logout.
        }

        window.location.pathname = '/login' // Omleiden naar de login pagina na logout.
    }

    // Gebruik useEffect om gebruikersgedrag en middleware te beheren.
    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated) // Omleiden als de gebruiker al ingelogd is en middleware 'guest' is.
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated) // Omleiden als de e-mail al is geverifieerd.
        if (middleware === 'auth' && error) logout() // Uitloggen als middleware 'auth' is en er een fout is.
    }, [user, error])

    // Retourneer alle functies en de gebruikersgegevens.
    return {
        user,
        contact, // Voeg contact toe aan de geretourneerde waarden
        adres,
        gebouw,
        energielabel,
        register,
        pand,
        berekening,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
        dashboard
    }
}
