<script setup lang="ts">

import Button from "primevue/button"

let telegram: any = ((window as any).Telegram as any)

function handleExpand(){
  console.log("handleExpand ", telegram);
  telegram.WebApp.expand();
}
function handleConfirm(){
  console.log("handleConfirm ", telegram);

  telegram.WebApp.showConfirm('message', (r:any) => {
    console.log(r);
  })
}
</script>

<template>
  <div class="main">
    <div class="card flex justify-content-center flex-wrap gap-3">
      <Button label="Expand Webview" @click="handleExpand"/>
      <Button label="Confirm" severity="secondary" @click="handleConfirm"/>
<!--      <Button label="Success" severity="success"/>-->
<!--      <Button label="Info" severity="info"/>-->
<!--      <Button label="Warning" severity="warning"/>-->
<!--      <Button label="Help" severity="help"/>-->
<!--      <Button label="Danger" severity="danger"/>-->


    </div>
  </div>
</template>

<style scoped>

</style>
