<template lang="pug">
#app
  header#header
    img.logo(
      src="./assets/img/logo.svg",
      width="202",
      height="96",
      alt="Iana Moskalenko site logo"
    )
    ul.list
      li
        router-link(to="/") About
      li
        router-link(to="/portfolio") Portfolio
    span.copyright developed by
      a(href="https://github.com/xthirtysix") xthirtysix
  #content
    router-view
</template>

<style lang="scss">
@import "@/styles/index.scss";

body {
  margin: 0;
}

#app {
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 15rem 1fr;
  grid-template-areas: "header content";
  font-family: "Futura PT Book", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $foreground_color;
}

#header {
  grid-area: "header";
  box-sizing: border-box;
  position: fixed;
  top: 0;
  bottom: 0;
  display: grid;
  justify-content: center;
  height: 100%;
  padding: 2rem 1rem;
  color: $foreground_inversed_color;
  background-color: $dark_accent_color;
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.34);

  .logo {
    width: 100%;
    height: auto;
  }

  .list {
    display: grid;
    grid-template-rows: min-content;
    grid-row-gap: 1rem;
    align-self: unsafe-center;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    list-style: none;

    a {
      @include underline(100%, true);

      position: relative;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      color: $foreground_inversed_color;

      &.router-link-exact-active {
        color: $light_accent_color;
      }
    }
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    color: $foreground_inversed_color;
    opacity: 0.6;

    a {
      @include underline(100%, true);

      padding-left: 0.2rem;
      color: $foreground_inversed_color;

      &:hover,
      &:focus {
        font-weight: 700;
        color: $light_accent_color;
        text-decoration: none;
      }
    }
  }
}

#content {
  grid-area: "content";
  display: flex;
  justify-content: center;
  width: calc(100vw - 15rem);
  margin-left: 15rem;
}

@media (max-width: $max_mobile) {
  #app {
    grid-template-rows: min-content 1fr;
    grid-template-columns: unset;
    grid-template-areas: "nav" "content";
  }

  #header {
    position: unset;
    padding: 1rem;

    .list {
      grid-template-columns: 1fr 1fr;
      margin-top: 6rem;

      li {
        &:first-of-type {
          text-align: left;
        }

        &:last-of-type {
          text-align: right;
        }
      }

      a {
        padding: 0.5rem;
      }
    }

    .logo {
      width: auto;
      max-height: 10rem;
    }

    .copyright {
      display: none;
    }
  }

  #content {
    display: block;
    width: 100%;
    margin-left: 0;
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0 0 0 0);
}
</style>
