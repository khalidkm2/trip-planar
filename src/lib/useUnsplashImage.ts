// /hooks/useUnsplashImage.js
import { useEffect, useState } from 'react';
import { getImageFromUnsplash } from '@/lib/unsplashImage';

export const useUnsplashImage = (query:any) => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = await getImageFromUnsplash(query);
        setImage(url);
      } catch (err) {
        console.error('Error fetching image:', err);
        setImage('/placeholder.jpg');
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchImage();
  }, [query]);

  return { image, loading };
};
