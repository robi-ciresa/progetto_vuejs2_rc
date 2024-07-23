<template>
  <div class="container">
    <div v-if="product" class="row">
      <ProductItem :product="product" :showDetails="true" buttonText="Add to Cart" @add-to-cart="addToCart" />
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '../store';
import ProductItem from '../components/ProductItem.vue';

export default {
  components: { ProductItem },
  setup() {
    const product = ref(null);
    const route = useRoute();
    const cartStore = useCartStore();

    const fetchProduct = async () => {
      const response = await fetch('https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json');
      const products = await response.json();
      product.value = products.find(p => p.name === route.params.name);
    };

    const addToCart = (product) => {
      if (product) {
        cartStore.addToCart(product);
      }
    };

    onMounted(fetchProduct);

    return { product, addToCart };
  }
};
</script>