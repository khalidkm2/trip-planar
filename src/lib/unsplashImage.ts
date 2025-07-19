import axios from "axios";

const UNSPLASH_ACCESS_KEY = "Bb6t1Mt8qgeUR8V0eK6xVHN4reQ0z3xlXvckY-IXwwc";

export const getImageFromUnsplash = async (keyword: string) => {
  try {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: keyword,
        per_page: 1,
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });

    const imageUrl = res.data.results?.[0]?.urls?.regular;
    return imageUrl || null;
  } catch (error) {
    console.error("Failed to fetch image:", error);
    return null;
  }
};
