<template lang="pug">
article.card
  .text-wrapper
    h3.card-header.card-main-header {{ item.name }}
    .wrapper
      p.card-paragraph(v-if="item.location") {{ item.location }}
        span(v-if="item.acreage") {{ item.acreage }} m
          sup 2
    .wrapper
      h4.card-header(v-if="item.position") Position:
      p.card-paragraph(v-if="item.position") {{ item.position }}
    .wrapper
      h4.card-header(v-if="item.activity") Activity:
      p.card-paragraph(v-if="item.activity") {{ item.activity }}
      p.card-paragraph(v-if="item.studentWork") Student work, {{ item.studentWork }}
  p.preview(v-tabindex, @click="show", v-on:keyup.enter="show")
    v-lazy-image(
      :src="item.preview",
      :src-placeholder="item.placeholder",
      :alt="item.name"
    )
    viewer(:images="images", @inited="inited", ref="viewer")
      img(
        v-for="(img, idx) in images",
        :src="img.pathLong",
        :key="idx",
        style="display: none"
      )
</template>

<script>
import VLazyImage from "v-lazy-image";
import Viewer from "v-viewer/src/component.vue";

export default {
  components: {
    Viewer,
    VLazyImage
  },
  name: "portfolio-card",
  props: {
    item: {
      name: { type: String },
      location: { type: String },
      acreage: { type: String },
      position: { type: String },
      activity: { type: String },
      import: { type: Function }
    }
  },
  data: function() {
    return {
      images: []
    };
  },
  mounted() {
    this.importAll(this.item.images);
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    },
    inited(viewer) {
      this.$viewer = viewer;
    },
    show() {
      this.$viewer.show();
    }
  },
  directives: {
    tabindex: {
      inserted(el) {
        el.setAttribute("tabindex", 0);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

@include progressive-images;

.card {
  @include interactive-with-shadow;
  @include transition(0.5s);

  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  border-radius: 5px;
}

.text-wrapper {
  padding: 1rem;
}

.preview {
  @include interactive-image-open-tip;

  order: -1;
  overflow: hidden;
  margin: 0;
  line-height: 0;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    img {
      transform: scale(1.05);
    }
  }

  img {
    @include transition(1s);

    width: 100%;
    height: auto;
  }
}

.card-header,
.card-paragraph {
  display: inline;
  margin: 0;
}

.card-header {
  margin-right: 0.1rem;
  margin-bottom: 0.3rem;
}

.wrapper {
  margin-bottom: 0.2rem;
}

.card-main-header {
  @include underline(3rem, false);
  display: block;
  margin-bottom: 1rem;
}
</style>
