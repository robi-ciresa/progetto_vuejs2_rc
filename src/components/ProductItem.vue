<template>
  <div class="col-12 col-sm-6 col-md-4 mb-4">
    <div class="card h-100">
      <img :src="product.image" class="card-img-top" :alt="product.name">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p v-if="showDetails" class="card-text">{{ product.description }}</p>
        <p class="card-text">{{ product.price }} $</p>

        <div class="d-flex align-items-center">
          <button class="btn btn-outline-secondary" @click="decreaseQuantity">-</button>
          <input
            type="number"
            class="form-control mx-2"
            v-model.number="quantity"
            min="1"
            style="width: 50px;"
          />
          <button class="btn btn-outline-secondary" @click="increaseQuantity">+</button>
          <button class="btn btn-secondary ms-2 custom-btn" @click="addToCart">{{ buttonText }}</button>
          <router-link v-if="!showDetails" :to="{ name: 'product-detail', params: { name: product.name } }" class="btn btn-secondary ms-2 custom-btn">View Details</router-link>
        </div>
        <div v-if="showConfirmation" class="mt-2 alert alert-success">
          Added to cart!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../store';

export default {
  props: {
    product: Object,
    showDetails: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: 'Add to Cart'
    }
  },
  data() {
    return {
      quantity: 1,
      showConfirmation: false,
      buttonTextTemp: 'Add to Cart'
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      if (this.product && this.quantity > 0) {
        const cartStore = useCartStore();
        cartStore.addToCart({ ...this.product, quantity: this.quantity });
        
        this.showConfirmation = true;
        this.buttonTextTemp = 'Added!';
        
        setTimeout(() => {
          this.showConfirmation = false;
          this.buttonTextTemp = 'Add to Cart';
        }, 2000);
      } else {
        console.error('Product or quantity is invalid');
      }
    }
  },
  computed: {
    buttonTextComputed() {
      return this.showConfirmation ? 'Added!' : this.buttonText;
    }
  }
};
</script>

<style scoped>
.card-img-top {
  height: 250px;
  object-fit: cover;
}

.form-control {
  text-align: center;
}

.alert {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(120, 160, 85, 0.497);
}

.custom-btn {
  background-color: rgb(120, 160, 85);
  border-color: black;
  color: black;
}
</style>