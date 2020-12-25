<template>
  <TheHeader />
  <Home />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import Home from "@/views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
    TheHeader
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
