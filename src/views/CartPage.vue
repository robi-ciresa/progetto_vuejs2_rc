<template>
  <div class="cart-page">
    <h1>Your Cart</h1>
    <div v-if="cartItems.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <div v-if="!checkout">
        <div v-for="item in cartItems" :key="item.product.name" class="cart-item">
          <h3>{{ item.product.name }}</h3>
          <p>Price: ${{ item.product.price.toFixed(2) }}</p>
          <p>Quantity: {{ item.quantity }}</p>
          <button @click="removeFromCart(item.product)">Remove</button>
          <div class="quantity-controls">
            <button @click="decreaseQuantity(item.product)">-</button>
            <input type="number" v-model.number="item.quantity" min="1" />
            <button @click="increaseQuantity(item.product)">+</button>
          </div>
        </div>
        <div class="cart-total">
          <h3>Total: ${{ cartTotal.toFixed(2) }}</h3>
          <div v-if="discountApplied">
            <p>Discount Applied: 10% off</p>
            <h3>Discounted Total: ${{ discountedTotal.toFixed(2) }}</h3>
          </div>
        </div>
        <button @click="startCheckout" class="btn btn-secondary custom-btn">Conferma e Ordina</button>
      </div>

      <div v-else>
        <h2>Order Summary</h2>
        <ul>
          <li v-for="item in cartItems" :key="item.product.name">
            {{ item.quantity }}x {{ item.product.name }}
          </li>
        </ul>
        <h3>Total: ${{ cartTotal.toFixed(2) }}</h3>
        <div v-if="discountApplied">
          <p>Discount Applied: 10% off</p>
          <h3>Discounted Total: ${{ discountedTotal.toFixed(2) }}</h3>
        </div>

        <h2>Customer Details</h2>
        <form @submit.prevent="placeOrder">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input id="firstName" v-model="customer.firstName" required class="form-control" />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input id="lastName" v-model="customer.lastName" required class="form-control" />
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input id="address" v-model="customer.address" required class="form-control" />
          </div>
          <div class="form-group">
            <label for="cardNumber">Card Number</label>
            <input id="cardNumber" v-model="customer.cardNumber" required class="form-control" />
          </div>
          <button type="submit" class="btn btn-secondary custom-btn">Esegui l'ordine</button>
          <button @click="cancelCheckout" class="btn btn-secondary custom-btn">Torna indietro</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'; 
import { useCartStore } from '../store';

export default {
  setup() {
    const cartStore = useCartStore();
    const cartItems = computed(() => cartStore.cart);
    const cartTotal = computed(() => cartStore.cartTotal);
    const discountedTotal = computed(() => cartStore.discountedTotal);
    const discountApplied = computed(() => cartStore.totalItems > 3);

    const checkout = ref(false);
    const customer = ref({
      firstName: '',
      lastName: '',
      address: '',
      cardNumber: ''
    });

    const removeFromCart = (product) => {
      cartStore.removeFromCart(product);
    };

    const increaseQuantity = (product) => {
      const item = cartStore.cart.find(item => item.product.name === product.name);
      if (item) {
        cartStore.updateCartItem(product, item.quantity + 1);
      }
    };

    const decreaseQuantity = (product) => {
      const item = cartStore.cart.find(item => item.product.name === product.name);
      if (item && item.quantity > 1) {
        cartStore.updateCartItem(product, item.quantity - 1);
      }
    };

    const startCheckout = () => {
      checkout.value = true;
    };

    const cancelCheckout = () => {
      checkout.value = false;
    };

    const placeOrder = () => {
      alert('Order placed successfully!');
      cartStore.cart = [];
      checkout.value = false;
      customer.value = {
        firstName: '',
        lastName: '',
        address: '',
        cardNumber: ''
      };
    };

    return {
      cartItems,
      cartTotal,
      discountedTotal,
      discountApplied,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      checkout,
      customer,
      startCheckout,
      cancelCheckout,
      placeOrder
    };
  }
};
</script>

<style scoped>
.cart-page {
  padding: 20px;
}

.cart-item {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid black; 
  border-radius: 4px; 
  padding: 10px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.quantity-controls button {
  margin-right: 5px;
}

.quantity-controls input {
  width: 50px; 
  text-align: center; 
  margin-right: 5px;
}

.cart-total {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  margin-right: 10px;
}

.custom-btn {
  background-color: rgb(120, 160, 85);
  border-color: black;
  color: black;
  margin-top: 20px;
}

</style>