<template>
  <div>
    <h1>قائمة المشروبات</h1>
    <div v-if="products">
      <div v-for="category in products" class="mb-10">
        <h2>{{ category.title }}</h2>
        <v-row>
          <v-col sm="12" v-for="product in category.items">
            <v-card>
              {{ product.name }}
              {{ product.price }}
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import products from '~/data/products.json'

export default {
  name: 'IndexPage',
  data() {
    return {
      products: []
    }
  },
  mounted() {
    console.log(products)
    this.products = products;
  },
}
</script>
