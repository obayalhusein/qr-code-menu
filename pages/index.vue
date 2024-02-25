<template>
  <div v-if="products">
    <div class="category-tabs" id="category-tabs">
      <div v-for="(category, index) in products" class="category-tabs-item" :class="[{'active': index === activeIndex}, 'category-tab-' + index]" @click="scrollToCategory(index)" role="button">
        {{ category.title }}
      </div>
    </div>

    <div v-for="(category, index) in products" class="category-section mb-10" :class="'category-' + index">
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
</template>

<script>
import ProductItem from '~/components/ProductItem.vue';
import products from '~/data/products.json'

export default {
    name: 'IndexPage',
    data() {
        return {
            products: [],
            activeIndex: 0
        };
    },
    mounted() {
        this.products = products;

        let throttleTimer;
        window.addEventListener('scroll', function() {
            // Clear the throttle timer if it's already set.
            if (throttleTimer) return;

            // Set a timeout to run our scroll-related code.
            throttleTimer = setTimeout(() => {
                const categories = document.querySelectorAll('.category-section');
                const scrollPosition = window.scrollY;
                let activeIndex = 0;
                categories.forEach((category, index) => {
                  if (category.offsetTop - 50 <= scrollPosition) {
                    activeIndex = index;
                  }
                });
                this.activeIndex = activeIndex;

                // Clear the throttle timer after executing the code.
                throttleTimer = null;
                this.scrollToActiveCategoryTab(activeIndex);
            }, 250); // Adjust the time (in milliseconds) as needed for the throttle.
        }.bind(this));
    },
    methods: {
      scrollToCategory(index) {
        this.activeIndex = index;
        const category = document.querySelector('.category-' + index);
        window.scrollTo({
          top: category.offsetTop - 50,
          behavior: 'smooth'
        });
      },
      scrollToActiveCategoryTab(activeIndex) {
        const categoryTabs = document.querySelector('#category-tabs');
        const activeCategoryTab = document.querySelector('.category-tab-' + activeIndex);
        categoryTabs.scrollTo({
          left: activeCategoryTab.offsetLeft - 50,
          behavior: 'smooth'
        });
      }
    },
    components: { ProductItem }
}
</script>
