<template>
  <div id="app">
    <div class="header-component">
      <header-component @open-cart="openCart"/>
    </div>
    <div class="container">
      <div class="banner">
        <img src="./assets/Banner.svg" alt="">
      </div>
      <div class="products">
        <products-card @update-cart="addProduct" :product="product" v-for="product in products" :key="product"/>
      </div>
    </div>
    <div class="cart-component">
      <cart :total="total" :cart="cart"/>
    </div>
  </div>
</template>

<script>
import Product from './services/products'
import ProductsCard from './components/ProductsCard.vue'
import HeaderComponent from './components/Header.vue'
import Cart from './components/Cart.vue'
export default {
  name: 'App',
  components: {
    ProductsCard,
    HeaderComponent,
    Cart
  },
  
  data() {
    return {
      products: [],
      cart: [],
      total: 0
    }
  },

  mounted() {
    Product.getProdutcs()
      .then(response => {
        this.products = response.data
      })
  },

  methods: {
    openCart() {
      const cart = document.querySelector('.cart-component')
      cart.style.display = "block"
    },

    addProduct(product) {
      console.log('add produto')
      this.cart.push(product)
      this.total++
      console.log(this.total)
      console.log(this.cart)
    }
    
  }
}
</script>

<style>
body {
  background-color:#F5F5F5;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.header-component {
  margin-bottom: 40px;
  width: 100% ; 
  background-color:#FFFFFF
}

.banner img {
  width: 1120px;
  margin-bottom: 60px;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
}

.cart-component {
  display: none;
}

</style>
