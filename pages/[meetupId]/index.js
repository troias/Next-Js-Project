import MeetupDetail from '../../components/meetups/MeetupDetail'


const MeetUpDetails = (props) => {


    return (

        <MeetupDetail
            img=""
            title=""
            description=""
            address="" />
    )



}

export const getStaticPaths = async () => {
    return {
        fallback: false,
        paths: [
            {
                params: { meetupId: 'm1' },
                params: { meetupId: 'm2' }

            }
        ], 
        
    }
}

export const getStaticProps = async (ctx) => {

    console.log("ctx", ctx)
    const meetupId = ctx.params.meetupId
    console.log("meetupId", meetupId)
    return {
        props: {
            meetupData: {
                id: meetupId,
                title: "first Meetup",
                image:
                    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
                address: "42 ass Street",
                description: "First meetup",
            }
        },
        revalidate: 36000,
    }
}


export default MeetUpDetails