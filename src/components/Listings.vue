<template>
  <div class="homepage">
    <h1>My Store</h1>
    <div class="item-list">
      <div class="item" v-for="item in itemList" :key="item.id">
        <img class="item-picture" :src="item.image_url" alt="item">
        <p>{{ item.name }}</p>
        <p>{{ '¥'+ item.price }}</p>
      </div>
    </div>
    <p>Go to the <a href="#" v-on:click="handleAdminClick">Admin Panel</a></p>
  </div>
</template>

<script>
import apiServices from '../api-service';
 
export default {
  name: 'Listings',
  data: function() {
    return {
      itemList: [],
    };
  },
  methods: {
    handleAdminClick: function(evt) {
      evt.preventDefault();
      this.$router.push('/admin');
    },
  },
  created: async function() {
    this.itemList = await apiServices.getItems();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  width:150px;
  height:300px;
  margin:5px;
  border:1px solid black;
}

.item-picture {
  width:90%;
  height:50%;
}
</style>
