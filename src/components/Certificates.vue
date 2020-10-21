<template lang="pug">
ul.images(
  v-viewer.static="{ movable: false, scalable: false, rotatable: false }"
)
  li(v-for="(item, idx) in items")
    v-lazy-image(
      :src="item.image",
      :src-placeholder="item.placeholder",
      :key="idx",
      :alt="`Certificate №${idx + 1}`"
    )
</template>

<script>
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import VLazyImage from "v-lazy-image";
import Vue from "vue";
Vue.use(Viewer);

import c1 from "../assets/img/certificates/cert1.png";
import c2 from "../assets/img/certificates/cert2.png";
import c3 from "../assets/img/certificates/cert3.png";
import c4 from "../assets/img/certificates/cert4.png";
import c5 from "../assets/img/certificates/cert5.png";

import c1_placeholder from "../assets/img/certificates/placeholders/cert1_placeholder.jpg";
import c2_placeholder from "../assets/img/certificates/placeholders/cert2_placeholder.jpg";
import c3_placeholder from "../assets/img/certificates/placeholders/cert3_placeholder.jpg";
import c4_placeholder from "../assets/img/certificates/placeholders/cert4_placeholder.jpg";
import c5_placeholder from "../assets/img/certificates/placeholders/cert5_placeholder.jpg";

export default {
  components: { VLazyImage },
  data: function() {
    return {
      items: [
        { image: c1, placeholder: c1_placeholder },
        { image: c2, placeholder: c2_placeholder },
        { image: c3, placeholder: c3_placeholder },
        { image: c4, placeholder: c4_placeholder },
        { image: c5, placeholder: c5_placeholder }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

@include progressive-images;

.images {
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.3rem;
  list-style: none;

  li {
    line-height: 0;
  }

  img {
    @include interactive-with-shadow;

    cursor: pointer;
    width: 100%;
    height: auto;
  }
}
</style>
