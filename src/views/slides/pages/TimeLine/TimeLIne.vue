<template>
  <section id="timeline" title="Time line">
    <flex-col align-h="center" align-v="center" class="vf__flex-nowrap">
      <h4>Mars Milestone project</h4>
      <TimeLineBlock></TimeLineBlock>
    </flex-col>
  </section>
</template>

<script>
import TimeLineBlock from './components/TimeLineBlock'

export default {
  name: 'TimeLIne',
  components: { TimeLineBlock }
}
</script>

<style lang="scss" scoped>
  h4 {
    text-transform: none !important;
    margin-bottom: 50px !important;
  }
</style>
