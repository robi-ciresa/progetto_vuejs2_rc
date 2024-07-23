<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="@/assets/kreas_logo.png" alt="KREAS Logo" class="navbar-logo" />
          <span>e-commerce</span>
        </a>
        <div class="d-flex ms-auto">
          <router-link class="nav-link" to="/">
            <i class="fas fa-home me-3"></i>
          </router-link>
          <router-link class="nav-link" to="/cart">
            <i class="fas fa-shopping-cart me-3"></i>
            <span v-if="cartItemCount > 0" class="badge bg-danger">{{ cartItemCount }}</span>
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useCartStore } from '../store';
  
  export default {
    name: 'NavbarComp',
    setup() {
      const cartStore = useCartStore();
  
      const cartItemCount = computed(() => {
        return cartStore.cart.reduce((total, item) => total + item.quantity, 0);
      });
  
      return { cartItemCount };
    }
  };
  </script>
  
  <style scoped>
  .navbar {
  background-color: white !important;
  border: 2px solid black;
  border-radius: 5px; 
  margin: 10px; 
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

  .navbar-brand {
    display: flex;
    align-items: center
  }
  
  .navbar-logo {
    height: 50px; 
    margin-right: 5px;
  }
  
  .navbar-brand span {
    font-size: 1.5rem;
  }
  
  .nav-link i {
    font-size: 1.3rem;
    margin: 10px;
  }
  
  .nav-link .badge {
    position: relative;
    top: -20px;
    left: -20px;
  }
  </style>
  