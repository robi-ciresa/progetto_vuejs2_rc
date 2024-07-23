<template>
  <div>
    <SearchBar v-model:searchQuery="searchQuery" />
    <div class="container">
      <div class="row">
        <ProductItem 
          v-for="product in filteredProducts" 
          :key="product.name" 
          :product="product" 
          @add-to-cart="addToCart" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import ProductItem from '../components/ProductItem.vue';
import { useCartStore } from '../store';

export default {
  components: { SearchBar, ProductItem },
  setup() {
    const products = ref([]);
    const searchQuery = ref('');
    const cartStore = useCartStore();

    const fetchProducts = async () => {
      const response = await fetch('https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json');
      products.value = await response.json();
    };

    const addToCart = (product) => {
      cartStore.addToCart(product);
    };

    const filteredProducts = computed(() => {
      return products.value.filter(product => 
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    onMounted(fetchProducts);

    return { products, addToCart, searchQuery, filteredProducts };
  }
};
</script>