<template>
    <BreadCrumbs />
    <section class="section">
        <h1 class="title has-text-centered is-size-12">一起购物吧！</h1>
        <CollectionList />
    </section>
</template>

<script>
import BreadCrumbs from "@/components/BreadCrumbs.vue"
import CollectionList from "@/components/CollectionList.vue"

export default {
  name: "ShoppingPage",
  components: {
    BreadCrumbs,
    CollectionList
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