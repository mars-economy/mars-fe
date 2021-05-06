<template>
  <section class="main-section">
    <Introduction></Introduction>
    <IntroductionSecond></IntroductionSecond>
    <JourneyToMars :isMobile="isMobileView"></JourneyToMars>
    <PredictionMarkets :isMobile="isMobileView"></PredictionMarkets>
    <TopPredictions v-if="isMobileView"></TopPredictions>
    <MarsMarkets :isMobile="isMobileView"></MarsMarkets>
    <TimeLIne :isMobile="isMobileView"></TimeLIne>
    <JoinCommunity :isMobile="isMobileView"></JoinCommunity>
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
import apolloMixin from '../../mixins/apollo.mixins'
import TopPredictions from '@/views/slides/pages/PredictionMarkets/components/TopPredictions'

export default {
  mixins: [apolloMixin],
  name: 'Slides',
  components: {
    TopPredictions,
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
      isMobileView: window.innerWidth <= 781
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
      this.isMobileView = event.size.width === 320
      console.log(event.size.width)
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
