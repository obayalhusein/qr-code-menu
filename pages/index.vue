<template>
  <div>
    <div v-if="products">
      <div v-for="category in products" class="mb-10">
        <h2 class="category-title mb-5">
          {{ category.title }}
        </h2>
        <v-row>
          <v-col cols="6" xs="6" sm="6" md="4" lg="2" v-for="product in category.items">
            <ProductItem :product="product" />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '~/components/ProductItem.vue';
import products from '~/data/products.json'

export default {
    name: 'IndexPage',
    data() {
        return {
            products: []
        };
    },
    mounted() {
        this.products = products;
    },
    components: { ProductItem }
}
</script>
