import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FavoritesState {
    favorites: number[];
    addToFavorites: (photoId: number) => void;
    removeFavorites: (photoId: number) => void,
  }
  
  export const useFavoriteStore = create<FavoritesState>(
    persist(
      (set) => ({
        favorites: [],
        addToFavorites: (photoId) =>
          set((state) => ({ favorites: [...state.favorites, photoId] })),
        removeFavorites: (photoId) =>
          set((state) => ({
            favorites: state.favorites.filter((id) => id !== photoId),
          })),
      }),
      {
        name: "favorite-store", 
        storage: createJSONStorage(() => localStorage)
      }
    )
  );