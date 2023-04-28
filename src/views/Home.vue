<template>
  <div class="flex flex-col p-8 justify-center items-center">
    <router-link :to="{name: 'byIngredient', params :{ingredient: ingredient.strIngredient} }" v-for="ingredient of ingredients" :key="ingredient.idIngredient" class=" mb-3">{{ ingredient.strIngredient }}</router-link>
  </div>
</template>

<script setup>
import {computed , onMounted, ref} from 'vue'
import store from '../store/index'
import axiosClient from '../axiosClient'


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const ingredients = ref([])

onMounted(async () => {
    try{
    const response = await axiosClient.get('/list.php?i=list')
      console.log(response)
      ingredients.value = response.data.meals}
      catch(error){
        console.log(error)
      }
}) 


</script>

<style>

</style>