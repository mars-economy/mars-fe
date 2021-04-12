<template>
  <section id="introduction-second" data-background-image="images/introduction-second-bg.png"
           data-visibility="uncounted">
    <flex-row align-h="center" align-v="center" class="vf__flex-nowrap">
      <flex-col class="introduction-text">
        <h6>
          Our belief is that everyone's should be able to play
          <br/> a role in creating and shaping the future of Mars,
          <br/> whether or not they travel there themselves.
        </h6>
      </flex-col>
      <flex-col class="introduction-image">
        <img alt="orbital" src="/images/space-orbital.png">
      </flex-col>
    </flex-row>

  </section>
</template>

<script>
export default {
  name: 'IntroductionSecond'
}
</script>

<style scoped>
  .introduction-text {
    flex-grow: 2;
  }

  h6 {
    text-align: left;
    line-height: 1.8 !important;
  }
</style>
