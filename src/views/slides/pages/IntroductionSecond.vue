<template>
  <section id="introduction-second" data-background-image="images/introduction-second-bg.png"
           data-visibility="uncounted" class="slide-container">
    <div class="intro-container">
      <div class="h3">
        <div>
          This DAO (Decentralized autonomous organization) was built on open-source protocols to hand the governance to the community with full transparency.
        </div>
        <div>
          Initiating with the Mars Prediction Market, the Mars Economy project becomes what we can all make of it, with one purpose - to bring life to Mars.
        </div>
      </div>
      <IntroductionSecondSvg></IntroductionSecondSvg>
    </div>

  </section>
</template>

<script>
import IntroductionSecondSvg from '@/components/svgImages/IntroductionSecondSvg'
export default {
  name: 'IntroductionSecond',
  components: { IntroductionSecondSvg }
}
</script>

<style scoped lang="scss">
  @media (min-width: $screen-md-min) {
    .intro-container {
      display: flex;
      margin: 0 7.5rem 0 14rem;
      flex-wrap: nowrap;
      align-items: center;
    }
    .h3 {
      text-align: left;
      padding-right: 32px;
      div + div {
        margin-top: 32px;
      }
    }
  }
  @media (max-width: $screen-sm-max) {
    .intro-container {
      margin: unset;
      flex-direction: column;
      margin-top: 28px;
    }
    .intro-text {
      text-align: left;
    }
  }
</style>
