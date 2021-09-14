import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'


 const newMeetup = () => {

    const addMeetupHandler = (enteredMeetupData) => {
        console.log("enteredMeetupData", enteredMeetupData)
    }

    return (
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
}

export default newMeetup
