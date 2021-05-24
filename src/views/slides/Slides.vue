<template>
  <section class="main-section">
    <Introduction :isMobile="isMobileView"></Introduction>
    <IntroductionSecond></IntroductionSecond>
    <JourneyToMars :isMobile="isMobileView"></JourneyToMars>
    <PredictionMarkets :isMobile="isMobileView"></PredictionMarkets>
    <TopPredictions></TopPredictions>
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
import TopPredictions from '@/views/slides/pages/PredictionMarkets/components/TopPredictions'
import engineMixins from '../../mixins/engine.mixins'
import apolloMixins from '../../mixins/apollo.mixins'

export default {
  mixins: [apolloMixins, engineMixins],
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
      isMobileView: window.innerWidth <= 781,
      isInit: false
    }
  },
  watch: {
    isMobileView: {
      async handler (val) {
        Reveal.availableRoutes()
        Reveal.sync()
      }
    },
    '$store.state.phases.categories': {
      handler: async function (val) {
        if (val) {
          this.isInit = true
        }
      },
      immediate: true
    }
  },
  mounted () {
    Reveal.on('resize', event => {
      this.isMobileView = event.size.width === 320
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
