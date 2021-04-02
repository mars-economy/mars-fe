<template>
  <div id="app" class="reveal">
    <Header></Header>
    <div class="slides">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Reveal from 'reveal.js/js'
import Verticator from 'reveal.js-verticator/plugin/verticator/verticator.esm'
import Header from './header/Header'

export default {
  name: 'SlidesLayout',
  components: { Header },
  mounted () {
    Reveal.initialize(
      {
        progress: true,
        location: true,
        keyboard: true,
        hash: true,
        // respondToHashChanges: true,
        history: false,
        mouseWheel: true,
        previewLinks: true,
        // disableLayout: true,
        width: 1100,
        verticator: {
          darktheme: true,
          skipuncounted: true,
          clickable: true
        },
        plugins: [Verticator]
      }
    )
  }
}
</script>

<style lang="scss">
  #app {
    //color: white;
    //font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100vh;

    background-position: top 20% left 50%;
    background-repeat: no-repeat;
    background-image: url("../../../../src/assets/images/stars.svg");
  }
</style>
