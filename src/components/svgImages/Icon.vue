<template>
  <div class="icon"
       :style="[size ? {width: size+'px', height: size+'px'} : {width: '20px', height: '20px'}]"
       v-html="getIconSvg(name)">
  </div>

</template>

<script>
import { ICONS } from '@/constants/icons'

export default {
  name: 'Icon',
  props: {
    name: String,
    size: String
  },
  methods: {
    getIconSvg (name) {
      return ICONS[name]
    }
  }
}
</script>

<style scoped lang="scss">
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

</style>
