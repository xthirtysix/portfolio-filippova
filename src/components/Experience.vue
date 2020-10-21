<template lang="pug">
ul.table.experience-table
  li(v-for="(item, index) in items", :key="index")
    h3.table-header.position {{ item.position }}
    div
      h4.table-header.company {{ item.company }}
      p.table-paragraph.description(v-if="item.description") {{ item.description }}
      p.table-paragraph.location(v-if="item.location")
        | {{ item.location.city ? item.location.city : null }}{{ item.location.link ? ', ' : null }}
        a(v-if="item.location.link", :href="item.location.link") {{ item.location.site ? item.location.site : null }}
      p.table-paragraph.years {{ item.years }}
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          position: "Project Manager",
          company: "Stroitelnaya Mechanica",
          location: {
            city: "Moscow"
          },
          years: "2019 - Present"
        },
        {
          position: "Lead Architect",
          company: "FICOTE engineering/TIKKANEN architects",
          location: {
            city: "Moscow",
            link: "https://ficote.com/",
            site: "ficote.com"
          },
          years: "2018-2019"
        },
        {
          position: "Lead Architect",
          company: "ATLAS project",
          location: {
            city: "Moscow",
            link: "http://atlasproekt.com/",
            site: "atlasproekt.com"
          },
          years: "2016-2018"
        },
        {
          position: "Architect",
          company: "EcoLogHomes",
          description: "Australia based company, Moscow office",
          location: {
            city: "Moscow",
            link: "http://ecologhomes.com.au/",
            site: "ecologhomes.com.au"
          },
          years: "2015-2016"
        },
        {
          position: "Architect",
          company: "Procons",
          location: {
            city: "Moscow",
            link: "http://procons.pro/",
            site: "procons.pro"
          },
          years: "2014-2015"
        },
        {
          position: "Architect",
          company: "Novotech",
          location: {
            city: "Lipetsk"
          },
          years: "2013-2014"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.table {
  @include grid-table;
}

.experience-table {
  li {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-gap: 1.4rem;
    grid-template-areas: "position info";
    margin-bottom: 0.7rem;

    .company {
      font-weight: 400;
    }

    .location {
      a {
        @include underline(100%, true);
        position: relative;
        color: inherit;
        outline: none;

        &::after {
          @include transition(0.4s);

          opacity: 0;
        }

        &:hover,
        &:focus {
          text-decoration: none;
        }
      }
    }
  }

  p {
    font-size: 1rem;
  }
}

@media (max-width: 767px) {
  .experience-table {
    li {
      grid-template-rows: 1fr;
      grid-gap: 0;
    }
  }
}
</style>
