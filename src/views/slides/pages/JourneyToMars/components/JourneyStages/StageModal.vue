<template>
  <div>
    <ModalLabel labels="About milestone"></ModalLabel>
    <ModalCloseIcon @closeModal="$emit('close')"></ModalCloseIcon>

    <div class="modal-content">
      <ModalHeader :header="name" level="1"></ModalHeader>
      <div class="modal-body"> {{description}} </div>
      <div class="modal-footer">
        <Button color="primary" name="Go to application" icon></Button>
      </div>
    </div>

  </div>
</template>

<script>
import Button from '@/components/buttons/Button'
import { ICONS } from '@/constants/icons'
import ModalLabel from '@/components/modal/ModalLabel'
import ModalCloseIcon from '@/components/modal/ModalCloseIcon'
import ModalHeader from '@/components/modal/ModalHeader'

export default {
  name: 'StageModal',
  components: {
    ModalHeader,
    ModalCloseIcon,
    ModalLabel,
    Button
  },
  props: {
    name: String,
    description: String
  },
  data: function () {
    return {
      iconClose: ICONS.close
    }
  }
}
</script>

<style scoped>

</style>
