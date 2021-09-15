import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const dummyMeetups = [
  {
    id: "m1",
    title: "first Meetup",
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    address: "42 ass Street",
    description: "First meetup",
  },
  {
    id: "m2",
    title: "second Meetup",
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    address: "43 ass Street",
    description: "second meetup",
  },
];

const HomePage = () => {
  return (
    <>
      <MeetupList meetups={dummyMeetups} />
    </>
  );
};

export default HomePage;
