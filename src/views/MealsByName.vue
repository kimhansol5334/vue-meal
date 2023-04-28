<template>
  <div class=" p-8 pb-0">
    <input type="text" class="rounded border-2 border-gray-200 w-full" 
    v-model="keyword"
    placeholder="search for meals"
    @change='searchMeals'/>

  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for=" meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
  <div v-if="!meals.length" class="p-3 flex justify-center items-center">
    there are no meals!
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store'
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue'

const route = useRoute();
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)



const searchMeals = () => {
  if(keyword.value){
  store.dispatch('searchMeals', keyword.value)
  }
  else{
    store.commit('setSearchedMeals',[])
  }
}

onMounted(()=>{
  keyword.value = route.params.name
  keyword.value && searchMeals()
})


</script>

