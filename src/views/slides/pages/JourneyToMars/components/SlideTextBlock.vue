<template>

  <div class="slide-text-block" :style="'width:' + sizeWidth">
    <div class="h4">Journey to Mars</div>
    <div class="text">Choose the correct outcomes of events along the way and receive rewards. Participate in the  Mars Economy prediction market today!</div>
  </div>

</template>

<script>
export default {
  name: 'SlideTextBlock',
  props: {
    sizeWidth: String
  }
}
</script>

<style scoped lang="scss">
  .slide-text-block {
    text-align: left;
  }

  .text {
    font-size: 1rem;
    line-height: 1.5em;
    letter-spacing: -0.02em;
    text-shadow: $heading-shadow-base;
    margin-top: 1.25em;
  }

</style>
