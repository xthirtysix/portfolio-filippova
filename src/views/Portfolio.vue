<template lang="pug">
.portfolio
  h1.main-header Portfolio
  ul.card-list
    li(v-for="(item, idx) in items", :key="idx")
      portfolio-card(:item="item")
</template>

<script>
import PortfolioCard from "../components/PortfolioCard.vue";
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer/src/component.vue";

export default {
  components: { PortfolioCard },
  data: function() {
    return {
      components: {
        Viewer
      },
      images: [],
      items: [
        {
          name: "Residential Complex «First Line»",
          location: "Tyumen (Russia)",
          acreage: "52 000",
          position: "Lead Architect",
          activity: "sketching phase AR, Revit",
          images: require.context(
            "../assets/img/portfolio/first_line/",
            true,
            /\.png$/
          ),
          preview: require("../assets/img/portfolio/first_line/1_first_line.jpg")
        },
        {
          name: "Residential Complex «My Rhythm»",
          location: "Kazan (Russia)",
          acreage: "35 000",
          position: "Lead Architect",
          activity: "project phase AR, working documentation",
          images: require.context(
            "../assets/img/portfolio/my_rhythm/",
            true,
            /\.png$/
          ),
          preview: require("../assets/img/portfolio/my_rhythm/1_my_rhythm.jpg")
        },
        {
          name: "Mosfilm, Warehouse",
          location: "Moscow (Russia)",
          acreage: "20 000",
          position: "Lead Architect",
          activity: "working documentation phase AR, Revit",
          images: require.context(
            "../assets/img/portfolio/mosfilm_warehouse/",
            true,
            /\png$/
          ),
          preview: require("../assets/img/portfolio/mosfilm_warehouse/1_mosfilm_warehouse.jpg")
        },
        {
          name: "Mosfilm, Film Studio",
          location: "Moscow (Russia)",
          acreage: "20 000",
          position: "Lead Architect",
          activity: "working documentation phase AR, Revit",
          images: require.context(
            "../assets/img/portfolio/mosfilm_studio/",
            true,
            /\png$/
          ),
          preview: require("../assets/img/portfolio/mosfilm_studio/1_mosfilm_studio.jpg")
        },
        {
          name: "Mockup for Residential Complex Cherry Orchard",
          location: "Moscow (Russia)",
          position: "Lead Architect",
          activity: "sketching phase, working documentation phase AR, Revit",
          images: require.context(
            "../assets/img/portfolio/cherry_orchard/",
            true,
            /\png$/
          ),
          preview: require("../assets/img/portfolio/cherry_orchard/1_cherry_orchard.jpg")
        },
        {
          name: "Residential Complex «Basmanny»",
          location: "Moscow (Russia)",
          acreage: "35 000",
          position: "Lead Architect",
          activity: "working documentation phase AR, Revit",
          images: require.context(
            "../assets/img/portfolio/basmanny/",
            true,
            /\png$/
          ),
          preview: require("../assets/img/portfolio/basmanny/1_basmanny.jpg")
        },
        {
          name: "Residential Complex «I'M Tverskaya»",
          location: "Moscow (Russia)",
          acreage: "26 635",
          position: "Lead Architect",
          activity: "project phase AR, AutoCAD",
          images: require.context(
            "../assets/img/portfolio/im_tverskaya/",
            true,
            /\png$/
          ),
          preview: require("../assets/img/portfolio/im_tverskaya/1_im_tverskaya.jpg")
        },
        {
          name: "Sheremetyevo Cargo",
          location: "Khimki (Russia)",
          acreage: "42 300",
          position: "Architect",
          activity: "working documentation phase AR, Revit, AutoCAD",
          images: require.context(
            "../assets/img/portfolio/sheremetyevo/",
            true,
            /\png$/
          ),
          preview: require("../assets/img/portfolio/sheremetyevo/1_sheremetyevo.jpg")
        },
        {
          name: "Business complex «Pilyugina»",
          location: "Moscow (Russia)",
          acreage: "43 500",
          position: "Architect",
          activity: "working documentation phase AR, AutoCAD",
          images: require.context(
            "../assets/img/portfolio/pilyugina/",
            true,
            /\png$/
          ),
          preview: require("../assets/img/portfolio/pilyugina/1_pilyugina.jpg")
        },
        {
          name: "Hotel «Lipetsk». Reconstruction",
          studentWork: "ArchiCAD, Artlantis",
          images: require.context(
            "../assets/img/portfolio/hotel_lipetsk/",
            true,
            /\png$/
          ),
          preview: require("../assets/img/portfolio/hotel_lipetsk/1_hotel_lipetsk.jpg")
        },
        {
          name: "Hotel «LOGOS»",
          studentWork: "ArchiCAD, Artlantis",
          images: require.context(
            "../assets/img/portfolio/hotel_logos/",
            true,
            /\png$/
          ),
          preview: require("../assets/img/portfolio/hotel_logos/1_hotel_logos.jpg")
        },
        {
          name: "Manufacturing building",
          studentWork: "ArchiCAD, Artlantis",
          images: require.context(
            "../assets/img/portfolio/manufacturing_building/",
            true,
            /\png$/
          ),
          preview: require("../assets/img/portfolio/manufacturing_building/1_manufacturing_building.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
@import "@/styles/variables.scss";

.portfolio {
  @include container;
  max-width: 1300px;
}

.main-header {
  @include main-header;
  @include underline(100px);
  position: relative;
  margin-bottom: 2rem;
}

.card-list {
  @include grid-table;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.3rem 2rem;
  padding-bottom: 2rem;
}

@media (max-width: $max_mobile) {
  .portfolio {
    width: 100%;
  }
}
</style>
