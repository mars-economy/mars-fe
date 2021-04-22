<template>
  <div class="modal-header" :class="'l'+level">
    {{ header }}
  </div>
</template>

<script>
export default {
  name: 'ModalHeader',
  props: {
    header: String,
    level: String
  }
}
</script>

<style scoped>

</style>
