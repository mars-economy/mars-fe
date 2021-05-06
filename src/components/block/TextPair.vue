<template>

  <flex-row align-h="start" align-v="center" class="pair" :class="direction">
    <flex-row align-h="start" align-v="center">
      <flex-row align-v="center" align-h="center" class="pair-icon" v-if="icon" v-html="icons[icon]"></flex-row>
      <div class="pair-data">{{data}}</div>
    </flex-row>
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
    icon: String,
    direction: String
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
    font-size: 14px;
    line-height: 16px;
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

  .pair.column {
    flex-direction: column;
    align-items: flex-start;
    .pair-label {
      order: -1;
      margin-left: 0;
      margin-bottom: 4px;
    }
  }

</style>
