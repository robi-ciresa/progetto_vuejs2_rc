import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart(product) {
      if (!product || !product.name) {
        console.error('Product is not valid:', product);
        return;
      }
      
      const existingItem = this.cart.find(item => item.product.name === product.name);
      if (existingItem) {
        existingItem.quantity += product.quantity || 1;
      } else {
        this.cart.push({ product, quantity: product.quantity || 1 });
      }
    },
    updateCartItem(product, quantity) {
      if (!product || !product.name) {
        console.error('Product is not valid:', product);
        return;
      }

      const existingItem = this.cart.find(item => item.product.name === product.name);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    removeFromCart(product) {
      if (!product || !product.name) {
        console.error('Product is not valid:', product);
        return;
      }
      
      this.cart = this.cart.filter(item => item.product.name !== product.name);
    }
  },
  getters: {
    totalItems: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    },
    discountedTotal: (state) => {
      const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);
      const total = state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      if (totalItems > 3) {
        return total * 0.9;
      }
      return total;
    }
  }
});
