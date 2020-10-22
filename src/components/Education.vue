<template lang="pug">
ul.table.education-table
  li(v-for="(item, index) in items", :key="index")
    h3.table-header.institution {{ item.name }}
    p.table-paragraph.description {{ item.description }}
    p.table-paragraph.years {{ item.years }}
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          name: "Lipetsk State Technical University, Lipetsk, Russia",
          description:
            "Faculty of Civil Engineering, Building Design (with honors)",
          years: "2008-2013"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

.table {
  @include grid-table;
}

.table-header {
  font-size: 1.1rem;
}

.table-paragraph {
  font-size: 1rem;
}
</style>
