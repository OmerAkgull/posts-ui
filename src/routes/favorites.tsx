import { Center } from "@chakra-ui/react";
import { useFavoriteStore } from "../stores/favorites-store"
import { Photo } from "./album";
import { useState, useEffect } from "react";

const Favorites = () => {
     const [favoritePhotos, setFavoritePhotos] = useState([]);

const { favorites } = useFavoriteStore();


useEffect(() => {
    const fetchFavoritePhotos = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await response.json();
      const filteredPhotos = data.filter((photo: Photo) => favorites.includes(photo.id));
      setFavoritePhotos(filteredPhotos);
    };

    fetchFavoritePhotos();
  }, [favorites]);

  return (
    <div>
      <Center>Your Favorite Photos</Center>
      {favoritePhotos.length > 0 ? (
        favoritePhotos.map((photo: Photo) => (
          <Center key={photo.id}>
            <img src={photo.url} alt={photo.title} />
          </Center>
        ))
      ) : (
        <Center>No favorite photos yet!</Center>
      )}
    </div>
  );
};

export default Favorites