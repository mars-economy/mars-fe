<template>
  <div class="divider">

  </div>

</template>

<script>
export default {
  name: 'Divider'
}
</script>

<style scoped lang="scss">
  .divider {
    height: 1px;
    position: relative;
    margin-top: 16px;
    margin-bottom: 16px;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      border-top: $border-light;
    }
  }

</style>
