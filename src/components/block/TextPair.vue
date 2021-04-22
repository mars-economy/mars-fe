<template>

  <flex-row align-h="start" class="pair">
    <div class="pair-icon" v-if="icon" v-html="icons[icon]"></div>
    <div class="pair-data">{{data}}</div>
    <div class="pair-label">{{label}}</div>
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
  .pair {
    font-size: 0.875rem;
    line-height: 1.4em;
    letter-spacing: -0.02em;
  }
  .pair-label {
    opacity: 0.5;
    margin-left: 0.5rem;
  }
  .pair-data {
    font-weight: 700;
  }
  .pair-icon {
    margin-right: 0.5rem;
  }

</style>
