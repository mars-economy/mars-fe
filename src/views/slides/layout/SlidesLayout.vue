<template>
  <div id="app" class="reveal">
    <Header></Header>
    <div class="slides">
      <router-view/>
    </div>
    <Spaceman></Spaceman>
    <SocialNetworksPanel></SocialNetworksPanel>
  </div>
</template>

<script>
import Reveal from 'reveal.js/js'
import Verticator from 'reveal.js-verticator/plugin/verticator/verticator.esm'
import Simplemenu from '@/plugins/simpleMenu/simplemenu'
import Header from './header/Header'
import Spaceman from '@/views/slides/layout/spaceman/Spaceman'
import SocialNetworksPanel from '@/views/slides/layout/socialNetworks/SocialNetworksPanel'

export default {
  name: 'SlidesLayout',
  components: {
    SocialNetworksPanel,
    Spaceman,
    Header
  },
  async mounted () {
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
        width: 1440,
        height: 900,
        margin: 0,
        verticator: {
          darktheme: true,
          skipuncounted: true,
          clickable: true
        },
        simplemenu: {
          menuclass: 'menu',
          activeclass: 'active',
          activeelement: 'li',
          selectby: 'id',
          auto: true
        },
        plugins: [Simplemenu, Verticator]
      }
    )
    Reveal.on('slidechanged', event => {
      this.$modal.hideAll()
      Reveal.configure({
        mouseWheel: true,
        touch: true,
        keyboard: true
      })
    })
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
    //background-image: url("../../../../src/assets/images/stars.svg");
  }

</style>
