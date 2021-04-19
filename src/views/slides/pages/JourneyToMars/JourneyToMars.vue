<template>
  <section id="journey-to-mars" name="Journey to Mars">
    <div class="journey-to-mars">
      <SlideTextBlock size-width="48%"></SlideTextBlock>
      <div class="journey-to-mars-img">
        <SlideImageBlock></SlideImageBlock>
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
  }
}
</script>

<style scoped lang="scss">
  .journey-to-mars {
    width: 992px;
    height: 574px;
    margin: auto;
    position: relative;
    padding: 0;
  }
  .journey-to-mars-img {
    position: absolute;
    bottom: 0;
    right: 0;
  }

</style>
