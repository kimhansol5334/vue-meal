<template>
      <div class=" bg-white shadow rounded-xl">
      <router-link :to="{ name:'mealDetails', params: {id : meal.idMeal}}">
        <img :src="meal.strMealThumb" alt="strMeal" class="rounded-t-xl h-48 w-full object-cover">
      </router-link>
      <div class="p-3">
      <h3 class=" font-bold" >{{ meal.strMeal }}</h3>
      <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum quis aut vero molestiae ipsa provident,</p>
    </div>
      <div class="p-3 flex justify-between">
        <YouTubeButton :href="meal.strYoutube">
          <template v-slot:youtube>
             You?Tube
          </template>
        </YouTubeButton>
      </div>
    </div>
</template>

<script setup>
import YouTubeButton from '../components/YouTubeButton.vue'
  const { meal} = defineProps({
    meal:Object
  })

</script>

<style>

</style>