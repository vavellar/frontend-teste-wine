<template>
  <div class="header">
    <div class="content">
      <div class="logo">
        <img src="../assets/Wine logo.svg" alt="">
      </div>
      <div class="menu">
        <p class="menu-item">Clube</p>
        <p class="menu-item">Loja</p>
        <p class="menu-item">Produtores</p>
        <p class="menu-item">Ofertas</p>
        <p class="menu-item">Eventos</p>
      </div>
    </div>
    <div class="cart" @click="openCartEvent">
      <img src="../assets/Carrinho.svg" alt="">
      <img src="../assets/Oval 2.svg" alt="" class="number-cart-items">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teste: 5
    }
  },

  computed: {
    numberCartItens() {
      return this.teste
    }
  },

  methods: {
    openCartEvent() {
      console.log('cai aqui')
      this.$emit('open-cart')
    }
  }

}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px;
  background-color:#FFFFFF
}

.content {
  display: flex;
  flex-direction: row;
}

.menu {
  display: flex;
  flex-direction: row;
  margin-left: 60px;
  position: relative;
  top: -15px
}

.menu-item {
  margin-left: 40px;
  color: #666666;
  font-size: 20px;
  line-height: 24px;
}

.number-cart-items {
  position: relative;
  left: -25px;
}

</style>