import React from 'react'
import Head from 'next/head'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'

const newMeetup = () => {
    const router = useRouter()
    const addMeetupHandler = async (enteredMeetupData) => {

        const request = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: { 'Content-Type': 'application/json' }
        })
        const response = await request.json()
        console.log("response", response)
        router.push('/')
    }

    return (
        <>
            <Head>
                <title> React Meetups</title>
                <meta name="description" content="Add your own meetup" />

            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}

export default newMeetup
