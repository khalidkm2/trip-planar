export const travelCompanions = [
  {
    id: 1,
    title: 'Just Me',
    desc: 'A sole traveler in exploration',
    icon: '✈️',
    people: '1',
  },
  {
    id: 2,
    title: 'A Couple',
    desc: 'Two travelers in tandem',
    icon: '🥂',
    people: '2',
  },
  {
    id: 3,
    title: 'Family',
    desc: 'A group of fun-loving adventurers',
    icon: '🏡',
    people: '3+',
  },
  {
    id: 4,
    title: 'Friends',
    desc: 'A bunch of thrill-seekers',
    icon: '⛵',
    people: '3+',
  },
];


export const budgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    desc: 'Stay conscious of costs',
    icon: '💵',
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Keep cost on the average side',
    icon: '💰',
  },
  {
    id: 3,
    title: 'Luxury',
    desc: "Don't worry about cost",
    icon: '💸',
  },
];

export const tripCreationPromt  = `You are a professional travel planning AI.

Using the following preferences provided by the user, generate a **personalized and realistic travel itinerary** in valid JSON format.

### User Preferences:
- Destination: {location}
- Days of Travel: {noOfDays}
- Budget: {budget} (options: Cheap, Moderate, Luxury)
- Travel Companions: {traveler} (options: Just Me, A Couple, Family, Friends)

### Your task:
Return a JSON response with the following structure and details:

{
  "overview": {
    "summary": "Short paragraph summarizing the trip style (adventurous, relaxing, romantic, etc.) based on the user's inputs.",
    "ideal_duration": "{days} days",
    "budget": "{budget}",
    "companions": "{traveler}",
    "title_image_keyword": "Descriptive keyword to search for an image of this destination (e.g., 'sunset view over Santorini cliffs')"
  },
  "hotel_recommendations": [
    {
      "name": "Hotel Name",
      "address": "Full address",
      "price_per_night": "$100-$200",
      "stars": 4,
      "image_keyword": "Descriptive keyword for hotel or surrounding view (e.g., 'luxury hotel near Eiffel Tower')"
    },
    ...
  ],
  "daily_plan": [
    {
      "day": 1,
      "activities": [
        {
          "time": "9:00 AM - 12:00 PM",
          "title": "Place Name",
          "description": "Short description of the place",
          "duration": "2-3 hours",
          "cost": "$28",
          "image_keyword": "Descriptive image keyword for the place (e.g., 'view from top of Tokyo Skytree')"
        },
        {
          "time": "12:00 PM - 1:00 PM",
          "title": "Lunch near [previous attraction]",
          "description": "Brief about the cuisine or nearby options",
          "duration": "1 hour",
          "cost": "Varies",
          "image_keyword": "Descriptive keyword (e.g., 'Japanese lunch bento box')"
        },
        ...
      ]
    },
    ...
  ],
  "highlights": [
    "Short bullet points of key highlights (max 5)"
  ]
}

### Guidelines:
- Use real locations, hotels, and landmarks.
- For all image fields, only return **descriptive keywords**, not actual URLs. These will be used to fetch images from sources like Unsplash, Wikimedia, or Pexels.
- Price and time estimates should be realistic.
- Adjust places and timing depending on the number of days: {noOfDays}
- Match activities to budget type: e.g., cheap = free or low-cost places, luxury = high-end or exclusive.
- Customize suggestions for the travel companions (e.g., family-friendly, romantic, solo experiences, etc.)
- If location is a remote or less-traveled place, focus on nature and local culture.

Only return valid JSON.
`;


