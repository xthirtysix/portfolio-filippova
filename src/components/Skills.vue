<template lang="pug">
ul.skill-list
  li.skill-list-item(v-for="(item, idx) in items", :key="`skill${idx}`")
    h3.skill-list-header {{ item.name }}
    span.visually-hidden Skill level: {{ item.rating }}&nbsp;out of 10
    ul.rating-list(aria-disabled="true")
      li.rating-list-item(
        v-for="(item, idx) in item.rating",
        :key="`filled${idx}`"
      )
        span.rating-filled
      li.rating-list-item(
        v-for="(item, idx) in 10 - item.rating",
        :key="`empty${idx}`"
      )
        span.rating-empty
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        { name: "Autodesk Revit", rating: 9 },
        { name: "Dynamo", rating: 4 },
        { name: "ArchiCAD", rating: 7 },
        { name: "3ds MAX + V-Ray", rating: 4 },
        { name: "AutoCAD", rating: 8 },
        { name: "Adobe Photoshop", rating: 7 },
        { name: "Artlantis", rating: 8 },
        { name: "Lumion", rating: 4 },
        { name: "MS Office", rating: 10 }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

.skill-list {
  @include grid-table;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.3rem 2rem;
}

.skill-list-item,
.rating-list-item {
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-gap: 2rem 0.2rem;
  grid-template-areas: "name rating";
  align-items: baseline;
}

.rating-list {
  display: flex;
  padding: 0;
}

.rating-empty,
.rating-filled {
  @include with-shadow-circle;

  position: relative;
  display: block;

  &::after {
    content: "";
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border: 1px solid $foreground-color;
    border-radius: 50%;
  }
}

.rating-empty {
  &::after {
    background-color: $background-color;
  }
}

.rating-filled {
  &::after {
    background-color: $foreground-color;
  }
}

@media (max-width: $mobile) {
  .skill-list {
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  }

  .skill-list-item {
    box-sizing: border-box;
    grid-gap: 0.5rem;
    grid-template-columns: 40% 60%;
    grid-template-areas: "name rating";
  }
}
</style>
