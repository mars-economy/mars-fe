<template>
  <flex-row align-v="center" align-h="center" class="number-circle">
    {{number}}
  </flex-row>

</template>

<script>
export default {
  name: 'NumberCircle',
  props: {
    number: Number
  }
}
</script>

<style scoped lang="scss">
  .number-circle {
    height: 24px;
    width: 24px;
    border: 1px solid rgba($white, 0.2);
    line-height: 0;
    border-radius: 50%;
    flex-grow: 0;
    flex-shrink: 0;
  }
</style>
