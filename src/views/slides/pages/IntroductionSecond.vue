<template>
  <section id="introduction-second" data-background-image="images/introduction-second-bg.png"
           data-visibility="uncounted" class="slide-container">
    <div class="intro-container">
      <div class="h3">
          Our belief is that everyone should be able to play a role in creating and shaping the future of Mars.
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
