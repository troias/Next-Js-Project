import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoClient, ObjectId } from 'mongodb'
import Head from 'next/head'

const MeetUpDetails = (props) => {


    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                img={props.meetupData.image}
                title={props.meetupData.title}
                description={props.meetupData.description}
                address={props.meetupData.address} />
        </>
    )



}

export const getStaticPaths = async () => {

    const client = await MongoClient.connect(`${process.env.NEXT_PUBLIC_MONGO_DB_HOST}${process.env.NEXT_PUBLIC_MONGO_DB_USERNAME}:${process.env.NEXT_PUBLIC_MONGO_DB_PASS}${process.env.NEXT_PUBLIC_MONGO_DB_HOST_CLUSTER}`)
    const db = client.db()
    const meetupCollection = db.collection('meetups')
    const meetups = await meetupCollection.find({

    }, {
        _id: 1
    }).toArray()

    client.close()

    return {
        fallback: 'blocking',
        paths: meetups.map(x => ({
            params: {
                meetupId: x._id.toString()
            }
        }))

    }
}

export const getStaticProps = async (ctx) => {

    const meetupId = ctx.params.meetupId
    const client = await MongoClient.connect(`${process.env.NEXT_PUBLIC_MONGO_DB_HOST}${process.env.NEXT_PUBLIC_MONGO_DB_USERNAME}:${process.env.NEXT_PUBLIC_MONGO_DB_PASS}${process.env.NEXT_PUBLIC_MONGO_DB_HOST_CLUSTER}`)
    const db = client.db()
    const meetupCollection = db.collection('meetups')
    const selectedMeetup = await meetupCollection.findOne({
        _id: ObjectId(meetupId)
    })

    client.close()

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
                address: selectedMeetup.address,
            }
        },
        revalidate: 36000,
    }
}


export default MeetUpDetails