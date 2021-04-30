<template>

  <div class="slide-text-block" :style="'width:' + sizeWidth">
    <div class="h2">Journey to Mars</div>
    <div class="text">Every resource used and step taken will create this new economy -
      The economy of Mars. Help shed light on these projects by predicting their outcome - receive rewards for correct predictions!</div>
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
