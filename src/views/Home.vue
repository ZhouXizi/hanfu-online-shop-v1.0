<template>
  <BreadCrumbs />
  <section>
    <h1>这是主页</h1>
  </section>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs.vue"

export default {
  name: "Home",
  components: {
    BreadCrumbs
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
