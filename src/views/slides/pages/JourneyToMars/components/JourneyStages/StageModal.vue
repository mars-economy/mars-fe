<template>
  <div>
    <div class="modal-label">About milestone</div>
    <div class="modal-header">
      {{name}}
    </div>
    <div class="modal-body">
      {{description}}
    </div>
    <div class="modal-footer">
      <Button color="primary" name="Go to application" icon></Button>
    </div>

  </div>
</template>

<script>
import Button from '@/components/buttons/Button'
export default {
  name: 'StageModal',
  components: {
    Button
  },
  props: {
    name: String,
    description: String
  }
}
</script>

<style scoped>

</style>
