<template>
  <div class="admin">
    <h1>Admin Page</h1>
    <p>See the <a href="#" v-on:click="handleStoreClick">Store</a></p>
    <h2 v-show="showResMessage">{{ resMessage }}</h2>
    <form class="add-item">
      <input class ="item-info" v-model="itemName" placeholder="Item Name">
      <input class ="item-info" v-model="price" placeholder="Price">
      <input class ="item-info" v-model="imageUrl" placeholder="Image URL">
      <input class ="item-submit" type="button" value="Add Item" @click="createItem">
    </form>
  </div>
</template>

<script>
import apiServices from '../api-service';

export default {
  name: 'Admin',
  data: function() {
    return {
      itemName: '',
      price: '',
      imageUrl: '',
      resMessage: '',
      showResMessage: false,
    };
  },
  methods: {
    handleStoreClick: function(evt) {
      evt.preventDefault();
      this.$router.push('/');
    },
    createItem: async function() {
      const res = await apiServices.createItem(this.itemName, this.price, this.imageUrl);
      if (res.error) {
        this.resMessage = res.error;
      } else {
        this.resMessage = 'Item Added';
      }
      this.showResMessage = true;
    },
  },
};
</script>

<style scoped>
.add-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item-info {
  width: 300px;
  height: 50px;
}

.item-submit {
  width: 100px;
  height: 50px;
  margin-top: 10px;
  color: #FFF;
  background-image: linear-gradient(#6795fd 0%, #67ceff 100%);
}
</style>
