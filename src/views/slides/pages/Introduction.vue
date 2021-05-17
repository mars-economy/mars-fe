<template>
  <section id="introduction" data-background-image="images/introduction-bg.png" name="introduction" class="slide-container">
    <div class="h3">We are evolving…<br>
    and the dream of humans becoming a multi-planetary species will soon be a reality.</div>
    <div class="h2 text-center mb-auto">Within the next decade we expect colonization of Mars to be underway.</div>
    <InfoPanel v-if="isMobile" :isMobile=true @click="goToSlide(5,$event)" />
  </section>
</template>

<script>
import InfoPanel from '@/views/slides/layout/InfoPanel/InfoPanel'
import Reveal from 'reveal.js/js'
export default {
  name: 'Introduction',
  props: {
    isMobile: Boolean
  },
  components: {
    InfoPanel
  },
  methods: {
    goToSlide (index) {
      Reveal.slide('1', index)
    }
  }
}
</script>

<style scoped lang="scss">
  section {
    position: relative;
  }
  .h3 {
    letter-spacing: -0.01em;
    margin-bottom: 16px;
   @media (max-width: $screen-sm-max) {
     margin-top: 28px;
   }
  }
</style>
