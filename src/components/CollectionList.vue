<template>
    <div class="container">
        <div class="columns mt-5 is-8 is-variable">
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
        </div>
    </div>
</template>

<script>
import CollectionItem from "./CollectionItem.vue"

export default {
  name: "CollectionList",
  components:{
      CollectionItem
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img{
    display: flex;
}
</style>