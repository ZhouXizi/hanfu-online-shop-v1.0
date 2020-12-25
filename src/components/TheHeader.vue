<template> 
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item" href="/">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </router-link>

    <a 
      @click="toogleShowNav" 
      role="button" 
      class="navbar-burger" 
      :class="navBurgerClasses"
      aria-label="menu" 
      aria-expanded="false" 
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasic" class="navbar-menu" :class="navBasicClasses">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">
        主页
      </router-link>

      <router-link to="/shoppingPage" class="navbar-item">
        服装系列
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          更多
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            关于品牌
          </a>
          <a class="navbar-item">
            联系
          </a>
          <a class="navbar-item">
            问题与帮助
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">

      <!-- 已登录用户 -->
      <div v-if="isAuth" class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          我的账户
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            我的订单
          </a>
          <a class="navbar-item">
            我的地址
          </a>
          <a class="navbar-item">
            我的售后
          </a>
        </div>
      </div>
      <a v-if="isAuth" class="navbar-item">
            购物车(0)
      </a>


      <!-- 未登录用户 -->
      <div v-if="!isAuth" class="navbar-item">
        <div class="buttons">
          <a class="button is-black">
            <strong>注 册</strong>
          </a>
          <a class="button is-light">
            登 录
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  </header>
  
</template>

<script>
import {ref, computed} from 'vue';

export default {
  name: "TheHeader",
  setup() {
    //汉堡导航按钮切换
    //汉堡导航按钮是否active
    let isNavBurgerActive = ref(false);

    const navBurgerClasses = computed(() => {
      return { 'is-active': isNavBurgerActive.value };
    })

    const navBasicClasses = computed(() => {
      return { 'is-active': isNavBurgerActive.value };
    })

    const toogleShowNav = () => {
      isNavBurgerActive.value = !isNavBurgerActive.value
      console.log(isNavBurgerActive)
    }

    //已登录用户与未登录用户
    let isAuth = ref(false);

    isAuth = true;


    return {
      navBurgerClasses,
      navBasicClasses,
      toogleShowNav,
      isAuth
    };
  }
};
</script>



<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
