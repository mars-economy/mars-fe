<template>
  <div>
    <ModalCloseIcon @closeModal="$emit('close')"></ModalCloseIcon>
    <div class="modal-content">
    <TimeLineBlockTitle :block="block" />
      {{block.content}}
    </div>

  </div>

</template>

<script>
import ModalCloseIcon from '@/components/modal/ModalCloseIcon'
import TimeLineBlockTitle from './TimeLineBlockTitle'
export default {
  name: 'TimeLineBlockModal',
  components: {
    TimeLineBlockTitle,
    ModalCloseIcon
  },
  props: {
    block: Object
  }
}
</script>

<style scoped>
  .timeline-block {
    padding-right: 24px;
    margin-bottom: 16px;
  }

</style>
