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
            media="(max-width: 1199px)"
            srcset="../assets/iana_moskalenko_mobile.jpg")
          img(
            src="../assets/iana_moskalenko.jpg"
            width="490"
            height="753"
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

<script lang="ts">
import Certificates from "../components/Certificates.vue";
import Education from "../components/Education.vue";
import Experience from "../components/Experience.vue";
import Skills from "../components/Skills.vue";

export default {
  components: {
    Certificates,
    Education,
    Experience,
    Skills
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
@import "@/styles/variables.scss";

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
  @include underline(100%);
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
      position: relative;
      margin: 0;
      width: 100px;
      height: auto;
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
    width: 100%;
    height: auto;
    padding: 0;
    background-color: #2c3e50;

    figure {
      position: relative;
      margin: 0;
    }

    img {
      width: 100%;
      height: 100%;
      clip-path: circle(40% at center);
    }
  }
}
</style>
