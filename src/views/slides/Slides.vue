<template>
  <section class="main-section">
    <Introduction></Introduction>
    <JourneyToMars></JourneyToMars>
    <IntroductionSecond></IntroductionSecond>
    <PredictionMarkets></PredictionMarkets>
    <MarsMarkets></MarsMarkets>
    <TimeLIne></TimeLIne>
    <JoinCommunity></JoinCommunity>
    <div class="ellipse"></div>
  </section>
</template>

<script>
import Introduction from './pages/Introduction'
import Reveal from 'reveal.js/js'
import IntroductionSecond from './pages/IntroductionSecond'
import MarsMarkets from './pages/MarsMarkets/MarsMarkets'
import TimeLIne from './pages/TimeLine/TimeLIne'
import PredictionMarkets from './pages/PredictionMarkets/PredictionMarkets'
import JoinCommunity from './pages/JoinCommunity/JoinCommunity'
import JourneyToMars from './pages/JourneyToMars/JourneyToMars'

export default {
  name: 'Slides',
  components: {
    JourneyToMars,
    JoinCommunity,
    PredictionMarkets,
    TimeLIne,
    MarsMarkets,
    IntroductionSecond,
    Introduction
  },
  data: function () {
    return {
      isMobileView: false
    }
  },
  watch: {
    isMobileView: {
      async handler (val) {
        Reveal.availableRoutes()
        Reveal.sync()
        // Reveal.layout()
        // Reveal.prev()
        // console.log(val)
      }
    }
  },
  mounted () {
    Reveal.on('resize', event => {
      this.isMobileView = event.scale < 1
      // console.log(event.scale)
    })
  }
}
</script>

<style lang="scss" scoped>
  .main-section {
    //background-position: top 20% left 50%;
    //background-repeat: no-repeat;
    //background-image: url("~@/../public/images/ellipse.svg");
    //background: rgba(160, 170, 225, 0.4);
    //filter: blur(300px);
    //.ellipse {
    //  /* Ellipse 12 */
    //
    //  position: absolute;
    //  width: 780.76px;
    //  height: 596.74px;
    //  left: 329.11px;
    //  top: 146.74px;
    //
    //  background: rgba(160, 170, 225, 0.4);
    //  filter: blur(300px);
    //}

  }
</style>
