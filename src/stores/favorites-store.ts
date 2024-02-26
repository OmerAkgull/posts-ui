import { create } from "zustand";

interface FavoritesState {
    favorites: number[];
    addToFavorites: (photoId: number) => void;
    removeFavorites: (photoId: number) => void,
  }
  
  export const useFavoriteStore = create<FavoritesState>()((set) => ({
    favorites: [],
    addToFavorites: (photoId) => set((state) => ({ favorites: [...state.favorites, photoId] })),
    removeFavorites: (photoId) => set((state) => ({favorites: state.favorites.filter((id) => id !== photoId)})),
  }));