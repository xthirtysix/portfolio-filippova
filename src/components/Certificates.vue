<template lang="pug">
ul.images(
  v-viewer.static="{ movable: false, scalable: false, rotatable: false }"
)
  img(
    v-for="(image, idx) in images",
    :src="image",
    :key="idx",
    :alt="`Certificate №${idx + 1}`",
    @click="show"
  )
</template>

<script>
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import Vue from "vue";
Vue.use(Viewer);

import c1 from "../assets/img/cert1.png";
import c2 from "../assets/img/cert2.png";
import c3 from "../assets/img/cert3.png";
import c4 from "../assets/img/cert4.png";
import c5 from "../assets/img/cert5.png";

export default {
  data: function() {
    return {
      images: [c1, c2, c3, c4, c5]
    };
  },
  methods: {
    show() {
      const viewer = this.$el.querySelector(".images").$viewer;
      viewer.show();
    }
  }
};
</script>

<style lang="scss" scoped>
.images {
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.3rem;
  list-style: none;

  img {
    cursor: pointer;
    width: 100%;
    height: auto;
  }
}
</style>
