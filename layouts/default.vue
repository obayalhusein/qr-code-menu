<template>
  <v-app dir="rtl">
    <v-app-bar fixed app>
      <v-toolbar-title>
        <v-img
          src="/images/logo/text-and-symbol.svg"
          height="40"
          width="220"
          contain
        />
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      title: 'حكايا الفنجان'
    }
  }
}
</script>
