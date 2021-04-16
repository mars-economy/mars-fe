<template>

  <flex-row align-h="start">
    <div class="pair-icon" v-if="icon" v-html="icons[icon]"></div>
    <div class="pair-label">{{label}}:</div>
    <div class="pair-data">{{data}}</div>
  </flex-row>

</template>

<script>
import { ICONS } from '@/constants/icons'

export default {
  name: 'TextPair',
  props: {
    label: String,
    data: String,
    icon: String
  },
  data: function () {
    return {
      icons: ICONS
    }
  }
}
</script>

<style scoped lang="scss">
  .pair-label {
    opacity: 0.5;
    margin-right: 1em;
  }
  .pair-data {
    font-weight: 700;
  }
  .pair-icon {
    margin-right: 0.5em;
  }

</style>
