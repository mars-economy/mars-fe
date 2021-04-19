<template>
  <div>
    <div class="journey-bg">
      <JourneyToMarsGrid></JourneyToMarsGrid>
      <div class="planets">
        <span>Earth<br>2021</span>
        <span>Mars<br>2025</span>
      </div>
    </div>

  </div>

</template>

<script>
import JourneyToMarsGrid from '@/components/svgImages/JourneyToMarsGrid'
export default {
  name: 'SlideImageBlock',
  components: {
    JourneyToMarsGrid
  }
}
</script>

<style scoped lang="scss">
  .journey-bg {
    position: relative;
  }
  .planets {
    span {
      position: absolute;
      font-weight: bold;
      font-size: 1rem;
      line-height: 1.37em;
      letter-spacing: -0.02em;
      &:first-of-type {
        left: 11px;
        top: 450px;
      }
      &:last-of-type {
        right: 0;
        top: 9px;
      }
    }
  }

</style>
