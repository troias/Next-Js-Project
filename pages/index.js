
import { MongoClient } from "mongodb"
import MeetupList from "../components/meetups/MeetupList";


console.log("process.env.MONGO_DB_USERNAME", process.env.NEXT_PUBLIC_MONGO_DB_HOST)




const HomePage = (props) => {

  return (
    <>
      <MeetupList meetups={ props.meetups} />
    </>
  );
};

export const getStaticProps = async (ctx) => {

  const client = await MongoClient.connect(`${process.env.NEXT_PUBLIC_MONGO_DB_HOST}${process.env.NEXT_PUBLIC_MONGO_DB_USERNAME}:${process.env.NEXT_PUBLIC_MONGO_DB_PASS}${process.env.NEXT_PUBLIC_MONGO_DB_HOST_CLUSTER}`)
  const db = client.db()
  const meetupCollection = db.collection('meetups')
  const meetups = await meetupCollection.find().toArray()
  console.log(meetups)
  client.close()
  

  return {
    props: {
      meetups: meetups.map(x => ({
        title: x.title,
        address: x.address,
        image: x.image,
        id: x._id.toString(),
      }))
    },
    revalidate: 36000,
  }
}


export default HomePage;
