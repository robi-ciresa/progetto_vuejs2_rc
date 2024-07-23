<template>
    <div class="search-bar">
      <input 
        type="text" 
        v-model="localSearchQuery" 
        @input="updateSearch" 
        placeholder="Search for products..."
        class="form-control"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      searchQuery: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        localSearchQuery: this.searchQuery
      };
    },
    methods: {
      updateSearch() {
        this.$emit('update:searchQuery', this.localSearchQuery);
      }
    },
    watch: {
      searchQuery(newVal) {
        this.localSearchQuery = newVal;
      }
    }
  };
  </script>
  
  <style scoped>
  .search-bar {
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }
  
  .form-control {
    width: 75%;
  }
  </style>