<template>
  <div id="app">
    <!-- <div class="container">
      <div class="columns">

        <div class="column is-3">
          <CartList />
        </div>

        <div class="column is-9">
          <ProductList />
        </div>

      </div>
    </div> -->

    <div>
        <SnipersList />
    </div>

  </div>
</template>

<script>
import CartList from './components/cart/CartList';
import ProductList from './components/product/ProductList';
import SnipersList from './components/sniper/SnipersList';

export default {
  name: 'App',
  components: {
    CartList,
    ProductList,
    SnipersList
  }
}
</script>

<style>
html, body {
  background: #F2F6FA;
}

#app {
  height: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
}

@media screen and (min-width: 769px) {
  html, body {
    height: 100%;
  }
}
</style>
