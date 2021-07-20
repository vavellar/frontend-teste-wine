<template>
  <div class="cart">
    <div class="cart-title">
      <img src="../assets/seta-voltar.svg" alt=""> WineBox ({{ total }})
    </div>
    <div class="cart-content">
      {{ cart }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['total', 'cart'],
  data() {
    return {
    }
  },
}
</script>

<style>

</style>