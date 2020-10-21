<template lang="pug">
.about
  .header-wrapper
    h1.main-header
      span.visually-hidden About&nbsp;
      | Iana Moskalenko
    span.profession(aria-label="profession") Architect
  section.picture
    h2.visually-hidden Picture of Iana Moskalenko
    figure
      picture
        source(
          media="(max-width: 1199px)",
          srcset="../assets/img/iana_moskalenko_mobile.jpg"
          :src-placeholder="mobilePlaceholder"
        )
        v-lazy-image(
          :src="picture",
          :src-placeholder="placeholder",
          width="490",
          height="753",
          alt="Picture of Iana Moskalenko"
        )
  section.experience
    h2.section-header Experience
    experience
  section.education
    h2.section-header Education
    education
  section.skills
    h2.section-header Computer Skills
    skills
  section.certificates
    h2.section-header Certificates
    certificates
</template>

<script>
import Certificates from "../components/Certificates.vue";
import Education from "../components/Education.vue";
import Experience from "../components/Experience.vue";
import Skills from "../components/Skills.vue";
import VLazyImage from "v-lazy-image";
import picture from "../assets/img/iana_moskalenko.jpg";
import placeholder from "../assets/img/placeholders/iana_moskalenko_placeholder.jpg";
import mobilePlaceholder from "../assets/img/placeholders/iana_moskalenko_mobile_placeholder.jpg";

export default {
  components: {
    Certificates,
    Education,
    Experience,
    Skills,
    VLazyImage
  },
  data: function() {
    return {
      picture,
      placeholder,
      mobilePlaceholder
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
@import "@/styles/variables.scss";

@include progressive-images;

.about {
  @include container;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-template-areas:
    "header picture"
    "experience picture"
    "education picture"
    "skills skills"
    "certificates certificates";
  max-width: 1300px;
}

.header-wrapper {
  grid-area: header;
}

.main-header {
  @include main-header;
}

.section-header {
  text-transform: uppercase;
}

.profession {
  @include underline(100%, false);
  position: relative;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

.picture {
  grid-area: picture;
  height: fit-content;

  figure {
    display: flex;
    margin-top: 0;
    margin-left: auto;
    margin-right: 0;
    line-height: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
}

.experience {
  grid-area: experience;
}

.education {
  grid-area: education;
}

.skills {
  grid-area: skills;
}

.certificates {
  grid-area: certificates;
  padding-bottom: 2rem;
}

@media (min-width: $max_mobile) and (max-width: $max_tablet) {
  .about {
    grid-template-columns: min-content 1fr;
    grid-template-areas:
      "picture header"
      "experience experience"
      "education education"
      "skills skills"
      "certificates certificates";
    width: 100%;
  }

  .header-wrapper {
    height: fit-content;
    align-self: center;
  }

  .picture {
    width: 100%;
    height: fit-content;
    align-self: center;

    figure {
      @include with-shadow-circle;

      position: relative;
      margin: 0;
      width: 100px;
      height: auto;
      box-shadow: none;
    }

    img {
      width: 100%;
      height: auto;
      clip-path: circle(50% at center);
    }
  }
}

@media (max-width: $max_mobile) {
  .about {
    grid-template-areas:
      "picture"
      "experience"
      "education"
      "skills"
      "certificates";
    padding: 0;
  }

  section {
    box-sizing: border-box;
    width: 100vw;
    padding: 0 1rem;
  }

  .header-wrapper {
    display: none;
  }

  .picture {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: #2c3e50;

    figure {
      @include with-shadow-circle;

      position: relative;
      margin: 0;
      box-shadow: none;
    }

    img {
      width: 100%;
      max-width: 500px;
      height: 100%;
      clip-path: circle(40% at center);
    }
  }
}
</style>
