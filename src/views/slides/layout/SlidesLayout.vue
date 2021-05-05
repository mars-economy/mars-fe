<template>
  <div id="app" class="reveal">
    <Header :isMobile="isMobile" :slideId="currentSlideId" ref="header"></Header>
    <div class="slides">
      <router-view/>
    </div>
    <Spaceman></Spaceman>
    <SocialNetworksPanel v-if="!isMobile"></SocialNetworksPanel>
    <Footer v-if="isLastSlide && !isMobile"></Footer>
  </div>
</template>

<script>
import Reveal from 'reveal.js/js'
import Verticator from 'reveal.js-verticator/plugin/verticator/verticator.esm'
import Simplemenu from '@/plugins/simpleMenu/simplemenu'
import Header from './header/Header'
import Spaceman from '@/views/slides/layout/spaceman/Spaceman'
import SocialNetworksPanel from '@/views/slides/layout/socialNetworks/SocialNetworksPanel'
import Footer from '@/views/slides/layout/footer/Footer'

export default {
  name: 'SlidesLayout',
  components: {
    Footer,
    SocialNetworksPanel,
    Spaceman,
    Header
  },
  data: function () {
    return {
      isMobile: window.innerWidth <= 780,
      isLastSlide: false,
      currentSlideId: ''
    }
  },
  methods: {
    onScreenResize: function () {
      this.isMobile = window.innerWidth <= 780
    },
    configReveal () {
      if (!this.isMobile) {
        Reveal.configure(
          {
            width: 1440,
            height: 900,
            margin: 0
          }
        )
      } else {
        Reveal.configure(
          {
            width: 320,
            height: 568,
            margin: 0,
            center: false
          }
        )
      }
    }
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
        simplemenu: {
          menuclass: 'menu',
          activeclass: 'active',
          activeelement: 'li',
          selectby: 'id',
          auto: true
        },
        verticator: {
          darktheme: true,
          skipuncounted: true,
          clickable: true
        },
        plugins: [Simplemenu, Verticator]
      }
    )
    this.configReveal()
    Reveal.on('slidechanged', event => {
      this.isLast = event.currentSlide.id === 'community'
      this.$modal.hideAll()
      this.currentSlideId = event.currentSlide.id
      Reveal.configure({
        mouseWheel: true,
        touch: true,
        keyboard: true
      })
    })
    window.onresize = () => {
      this.onScreenResize()
      this.configReveal()
    }
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
