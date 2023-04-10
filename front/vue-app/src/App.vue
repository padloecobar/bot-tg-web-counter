<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Button from "primevue/button"

</script>

<template>
  <div class="main">
    <div>
      HELO WORLD
    </div>
    <div>
      <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />

      </div>
      <div class="card">
        <div class="flex flex-wrap card-container blue-container" style="max-width: 500px">
          <div class="flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 border-round" style="min-width: 200px; min-height: 100px">1</div>
          <div class="flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 border-round" style="min-width: 200px; min-height: 100px">2</div>
          <div class="flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 border-round" style="min-width: 200px; min-height: 100px">3</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
