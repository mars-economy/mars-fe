<template>
  <section id="introduction" data-background-image="images/introduction-bg.png" name="introduction" class="slide-container">
    <div class="h3">We are evolving…<br>
    and the dream of humans becoming a multi-planetary species will soon be a reality.</div>
    <div class="h2 text-center mb-auto">Within the next decade we expect colonization of Mars to be underway.</div>
  </section>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style scoped lang="scss">
  .h3 {
    letter-spacing: -0.01em;
    margin-bottom: 16px;
   @media (max-width: $screen-sm-max) {
     margin-top: 28px;
   }
  }

</style>
