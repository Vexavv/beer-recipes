import { create } from 'zustand'

export const useStore = create((set) => ({
    beerRecipes: [],
    page: 1, // current page

    fetchData: async (page = 1) => {
        try {
            const response = await fetch(
                `https://api.punkapi.com/v2/beers?page=${page}&per_page=15`
            );
            const newRecipes = await response.json();
            set((state) => ({ beerRecipes: newRecipes, page }));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },

    deleteBeerRecipe: (id) => {
        set((state) => {
            const updatedRecipes = state.beerRecipes.filter((recipe) => recipe.id !== id);
            if (updatedRecipes.length < 15) {
                // If after deleting the recipe there are less than 15 left, load a new page
                const nextPage = state.page + 1;
                state.fetchData(nextPage);
            }
            return { ...state, beerRecipes: updatedRecipes };
        });
    },
}));











