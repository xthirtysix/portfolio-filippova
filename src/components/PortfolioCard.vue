<template lang="pug">
article.card
  h3.card-header.card-main-header {{ item.name }}
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
  p.image
  viewer.preview(:images="images", @inited="inited", ref="viewer")
    img(:src="item.preview", :alt="item.name", @click="show")
    img(
      v-for="(img, idx) in images",
      :src="img.pathLong",
      :key="idx",
      style="display: none"
    )
</template>

<script>
export default {
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
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;

  .preview {
    line-height: 0;
    order: -1;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: auto;
    transition: 0.5s;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.card-header,
.card-paragraph {
  display: inline;
  margin: 0;
}

.card-header {
  margin-right: 0.1rem;
}
</style>
