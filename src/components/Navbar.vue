<template>
      <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{ name: 'home'}" class=" inline-flex items-center px-5">
        Home
      </router-link>
      <div class=" flex gap-1 items-center">
        <router-link :to="{ name: 'byName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
          Search Meals 
        </router-link> 
        <router-link :to="{ name: 'byLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
          Meals By Letter 
        </router-link> 
        <router-link :to="{ name: 'ingList'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
          Meals By Ingrediens
        </router-link>
      </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>