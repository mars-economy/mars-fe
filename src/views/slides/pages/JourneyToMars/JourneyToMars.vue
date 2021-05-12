<template>
  <section id="journey-to-mars" name="Journey to Mars" class="slide-container" slide-title="Journey to Mars">
     <div class="journey-to-mars">
        <SlideTextBlock size-width="48%" v-if="!isMobile"></SlideTextBlock>
        <div class="journey-to-mars-img">
          <SlideImageBlock :isMobile="isMobile" />
        </div>
      </div>
  </section>
</template>

<script>
import SlideTextBlock from './components/SlideTextBlock'
import SlideImageBlock from './components/SlideImageBlock'
export default {
  name: 'JourneyToMars',
  components: {
    SlideImageBlock,
    SlideTextBlock
  },
  props: {
    isMobile: Boolean
  }
}
</script>

<style scoped lang="scss">
  .journey-to-mars {
    position: relative;
    padding: 0;
    width: 272px;
    height: 444px;
    @media (min-width: $screen-md-min) {
      width: 992px;
      height: 574px;
      margin: auto;
      .journey-to-mars-img {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }

</style>
