<template>
    <div class="p-8 bg-amber-200">
      <div class="text-4xl font-bold mb-4">Ingredients</div>
      <router-link :to="{ name: 'byIngredient', params :{ingredient: ingredient.strIngredient}}" v-for="ingredient of ingredients" :key="ingredient.idIngredient"
           class=" mb-3 p-3 rounded shadow">
      <h3 class=" text-2xl font-bold mb-2">{{ingredient.strIngredient}}</h3>
      <p>{{ ingredient.strDescription }}</p>
      </router-link>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import axiosClient from "../axiosClient";
  
  
  const ingredients = ref([])
  
  
  onMounted(()=>{
    axiosClient.get('list.php?i=list')
      .then(({data}) => {
        ingredients.value = data.meals
      })
  })
  
  </script>
  
  <style>
  
  </style>