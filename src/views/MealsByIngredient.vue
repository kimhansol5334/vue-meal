<template>
  <div class="p-8 grid grid-cols-1 md:grid-cols-3 gap-5">

      <MealItem v-for=" meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
  <div v-if="!meals.length"> 
    there are no meals
  </div>
</template>

<script setup>
import { computed, onMounted, watch} from "vue";
import { useRoute } from "vue-router";
import MealItem from '../components/MealItem.vue'
import store from "../store";

const route = useRoute()
const meals = computed(()=> 
  store.state.mealsByIngredient
)


onMounted(()=> {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})


</script>

<style>

</style>