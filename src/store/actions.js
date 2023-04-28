import axiosClient from "../axiosClient"

export const searchMeals = ({commit},keyword) => {
    axiosClient.get(`/search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setSearchedMeals', data.meals)
    })

}
export const searchMealsByLetter = ({commit}, letter) => {
    axiosClient.get(`/search.php?f=${letter}`)
    .then(({data}) => {
        commit('setMealsByLetter', data.meals)
    })

}
export const searchMealsByIngredient = ({commit}, ing) => {
    axiosClient.get(`/filter.php?i=${ing}`)
    .then(({data}) => {
        commit('setMealsByIngredient', data.meals)
    })

}