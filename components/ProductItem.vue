<template>
  <v-card
    :loading="loading"
    class="mx-auto"
    variant="outlined"
    style="height: 100%"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <div style="aspect-ratio: 1">
        <v-img
        cover
        aspect-ratio="1/1"
        :src="`/images/products/${product.image}`"
        style="height: 100%"
        ></v-img>
    </div>

    <v-card-text>
        <h3>
            {{ product.name }}
        </h3>
        <div>
            {{ product.price }}
            دينار
        </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    data: () => ({
        loading: false,
    }),
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>