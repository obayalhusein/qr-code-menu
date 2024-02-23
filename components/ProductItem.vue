<template>
  <v-card
    :loading="loading"
    class="mx-auto"
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

    <v-card-item>
      <v-card-title>
        {{ product.name }}
      </v-card-title>
    </v-card-item>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>
        {{ product.price }}
        دينار
    </v-card-title>
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