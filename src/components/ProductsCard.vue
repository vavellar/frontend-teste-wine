<template>
  <div class="products">
    <div class="products-card">
      <div class="products-card-available">
        <div class="product-img">
          <img :src="product.image"  alt="">
        </div>
        <div class="products-info">
          <p class="product-name">
            {{ product.name }}
          </p>
          <p class="product promotional-price">
            {{ product.pricePromotional | real }}
          </p>
          <div class="product-price-member">
            <p class="partner">Sócio wine</p>
            <p class="price-member">
              {{ product.priceMember | real }}
            </p>
          </div>
          <button class="products-button-add" @click="addToCart(product)">Adicionar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Product from '../services/products'
export default {
  props: ['product'],
  data() {
    // return {
    //   products: []
    // }
  },
  
  // mounted() {
  //   Product.getProdutcs()
  //     .then(response => {
  //       this.products = response.data
  //     })
  // },
  
  // computed: {
  //   productAvailable() {
  //     const productsAvailable = this.products.filter(this.returnAvailable)
  //     productsAvailable.forEach(productAvailable => {
  //       console.log(productAvailable)
  //     })
  //     return productsAvailable
  //   }
  // },

  methods: {
    // returnAvailable(product) {
    //   if(product.available === true)
    //   return product
    // },

    addToCart(product) {
      this.$emit('update-cart', product)
    }
  }

}
</script>

<style>

.products-card-available {
  display: flex;
  flex-direction: row;
}
.products {
  display: flex;
  flex-direction: row;
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px;
  background-color: #FFFFFF;
}
.products-card {
  display: flex;
  flex-direction: row;
}

.products-info {
  text-align-last: left;
  margin-left: 70px;
}

.products-button-add {
  width: 156px;
  height: 40px;
  border-radius: 4px;
  background-color: #B6116E;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  border: none;
  padding: 16px 12px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16px;
}

.promotional-price {
  color: #888888;
  font-size: 12px;
  line-height: 16px;
  text-decoration: solid;
  text-decoration: line-through;
}

.partner {
  text-transform: uppercase;
  font-size: 10px;
  line-height: 10px;
  font-weight: 700;
}

.price-member {
  color: #B6116E;
  font-weight: 700;
  font-size: 16px;
  line-height: 28pxs;
}

</style>