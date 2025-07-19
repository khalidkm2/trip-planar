import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { budgetOptions, travelCompanions } from "@/lib/constants";
import { TripContext } from "@/lib/context";
import { createTripAi } from "@/lib/geminiCreation";
import  { useContext, useState } from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { useNavigate } from "react-router";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const CreateTrip = () => {
  const [place, setPlace] = useState("");
  const [days, setDays] = useState("");
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedTravelCompanions, setSelectedTravelCompanions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { aiTrip, setAiTrip }:any = useContext(TripContext);
  const navigate = useNavigate();

  const handleBudget = (data:any) => {
    setSelectedBudget(data.title);
    console.log(aiTrip)
  };

  const handleTravelCompanions = (data:any) => {
    setSelectedTravelCompanions(data.title);
  };

  const generateTrip = async () => {
    if (!place || !days || !selectedBudget || !selectedTravelCompanions) {
      toast("All fields are required");
      return;
    }

    const tripData = {
      location: place,
      noOfDays: days,
      budget: selectedBudget,
      traveler: selectedTravelCompanions,
    };

    try {
      setIsLoading(true);
      const response = await createTripAi(tripData);
      const realData = response
        ?.replace(/^```json\n/, "")
        .replace(/\n```$/, ""); // remove ending ```
      setAiTrip(realData);
      navigate("/trip-details");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-start px-4 sm:px-8 md:px-20 lg:px-56 gap-y-6 m-4 sm:m-8 md:m-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="font-bold text-2xl sm:text-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Tell us your travel preferences 🏕️🌴
      </motion.h1>

      <motion.p
        className="text-gray-500 text-base sm:text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </motion.p>

      <div className="mt-10 sm:mt-20">
        <motion.p
          className="font-medium text-lg sm:text-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          What is destination of choice?
        </motion.p>

        <ReactGoogleAutocomplete
          className="my-2 p-2 border w-full rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          apiKey={import.meta.env.VITE_GOOGLE_CLOUD_API_KEY}
          onPlaceSelected={(place) =>
            setPlace(place?.address_components[0]?.long_name)
          }
        />

        <motion.p
          className="font-medium mt-5 text-lg sm:text-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          How many days are you planning your trip?
        </motion.p>
        <Input
          onChange={(e) => setDays(e.target.value)}
          className="mt-2 border focus:ring-2 focus:ring-blue-500 rounded-xl"
          type="number"
          placeholder="Eg.3"
        />
      </div>

      <motion.p
        className="font-medium mt-5 text-lg sm:text-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        What is your budget?
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {budgetOptions.map((data) => (
          <div
            onClick={() => handleBudget(data)}
            key={data.id}
            className={`${
              selectedBudget == data.title ? "border-black" : ""
            } p-4 border-2 cursor-pointer shadow-md hover:shadow-2xl rounded-2xl transition-all`}
          >
            <h1 className="text-3xl">{data.icon}</h1>
            <p className="font-medium text-lg">{data.title}</p>
            <p className="text-sm text-gray-500">{data.desc}</p>
          </div>
        ))}
      </motion.div>

      <motion.p
        className="mt-5 font-medium text-lg sm:text-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        Who do you plan on traveling with on your next adventure?
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        {travelCompanions.map((data) => (
          <div
            onClick={() => handleTravelCompanions(data)}
            key={data.id}
            className={`${
              selectedTravelCompanions == data.title ? "border-black" : ""
            } p-4 border-2 shadow-md rounded-2xl cursor-pointer hover:shadow-2xl transition-all`}
          >
            <h1 className="text-3xl">{data.icon}</h1>
            <p className="font-medium text-lg">{data.title}</p>
            <p className="text-sm text-gray-500">{data.desc}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        {isLoading ? (
          <Button size="sm" disabled>
            <Loader2Icon className="animate-spin mr-2" />
            Please wait
          </Button>
        ) : (
          <Button onClick={generateTrip}>Generate Trip</Button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CreateTrip;
