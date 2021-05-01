<template>
  <section id="introduction-second" data-background-image="images/introduction-second-bg.png"
           data-visibility="uncounted">
    <flex-row class="intro-container">
      <div class="intro-text h3">
          Our belief is that everyone should be able to play a role in creating and shaping the future of Mars.
      </div>
      <IntroductionSecondSvg></IntroductionSecondSvg>
    </flex-row>

  </section>
</template>

<script>
import IntroductionSecondSvg from '@/components/svgImages/IntroductionSecondSvg'
export default {
  name: 'IntroductionSecond',
  components: { IntroductionSecondSvg }
}
</script>

<style scoped>
  .intro-container {
    margin: 0 7.5rem 0 14rem;
    flex-wrap: nowrap;
    align-items: center;
  }
  .intro-text {
    text-align: left;
  }
</style>
