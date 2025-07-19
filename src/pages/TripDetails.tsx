import DayCard from "@/components/DayCard";
import HotelCard from "@/components/HotelCard";
import { TripContext } from "@/lib/context";
import { getImageFromUnsplash } from "@/lib/unsplashImage";
import  { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TripDetails = () => {
  const { aiTrip }:any = useContext(TripContext);
  const [titleUrl, setTitleUrl] = useState("");
  const navigate = useNavigate();

  // const isLoading = (aiTrip) => {
  //   return (
  //     !aiTrip ||
  //     (typeof aiTrip === "string" && aiTrip === "[object Object]") ||
  //     (typeof aiTrip === "object" &&
  //       !Array.isArray(aiTrip) &&
  //       Object.keys(aiTrip).length === 0)
  //   );
  // };
  // if (isLoading(aiTrip)) {
  //   return <p>Loading...</p>;
  // }
  if(!aiTrip){
    navigate("/create-trip")
    // console.log("navigate")
  }

  const jsonData = JSON.parse(aiTrip);

  useEffect(() => {
    const getImage = async () => {
      const url = await getImageFromUnsplash(
        jsonData?.overview?.title_image_keyword
      );
      setTitleUrl(url);
    };
    getImage();
  }, [aiTrip]);

  return (
    <motion.div
      className="p-10 md:px-20 lg:px-44 xl:px-56"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      {/* Header Image */}
      <motion.div variants={itemVariant}>
        <img
          src={titleUrl}
          className="h-[340px] w-full object-cover rounded-xl"
        />

        <div className="flex justify-between items-center">
          <div className="my-5 flex flex-col gap-2">
            <h2 className="font-bold text-2xl">
              {jsonData?.overview?.title_image_keyword}
            </h2>
            <div className="hidden sm:flex gap-5">
              <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
                📅 {jsonData?.overview?.ideal_duration}
              </h2>
              <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
                💰 {jsonData?.overview?.budget}
              </h2>
              <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
                🥂 No. Of Traveler: {jsonData?.overview?.companions}
              </h2>
            </div>
          </div>

          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"></path>
            </svg>
          </button>
        </div>
      </motion.div>

      <motion.div variants={itemVariant}>
        <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>
        <motion.div
          className="grid grid-cols-2 my-5 md:grid-cols-3 xl:grid-cols-4 gap-5"
          variants={containerVariant}
        >
          {jsonData?.hotel_recommendations.map((data:any) => (
            <motion.div key={data.name} variants={itemVariant}>
              <HotelCard data={data} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariant}>
        <h2 className="font-bold text-lg">Places to Visit</h2>
        <motion.div variants={containerVariant}>
          {jsonData?.daily_plan.map((data:any, index:any) => (
            <motion.div key={index} variants={itemVariant}>
              <DayCard data={data} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TripDetails;
