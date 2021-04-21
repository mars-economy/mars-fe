<template>
  <div>
    <ModalLabel :labels="['step', stage]"></ModalLabel>
    <ModalCloseIcon @closeModal="$emit('close')"></ModalCloseIcon>

    <div class="modal-content leading">
      <ModalHeader :header="point.name" level="1"></ModalHeader>

      <div class="modal-body">
        <flex-row noWrap align-h="between">
          <TextPair label="current state" :data="point.state" icon="statePoint"></TextPair>
          <TextPair label="due date" :data="getTime(point.dueTo)" icon="timePoint"></TextPair>
          <TextPair label="predictors" :data="point.predictors" icon="users"></TextPair>
        </flex-row>
        <div class="text-small">{{ point.description }}</div>

      </div>

    </div>
    <div class="modal-content">
      <ModalHeader header="Predictions:" level="3"></ModalHeader>

      <div class="modal-body">
      {{ point }}
      </div>
      <div class="modal-footer">
        <Button name="predict now" link="" color="primary" icon></Button>
      </div>
    </div>
  </div>

</template>

<script>
import TextPair from '@/components/block/TextPair'
import { ICONS } from '@/constants/icons'
import moment from 'moment'
import Button from '@/components/buttons/Button'
import ModalLabel from '@/components/modal/ModalLabel'
import ModalCloseIcon from '@/components/modal/ModalCloseIcon'
import ModalHeader from '@/components/modal/ModalHeader'

export default {
  name: 'StagePointModal',
  props: {
    point: Object,
    stage: String
  },
  components: {
    ModalHeader,
    ModalCloseIcon,
    ModalLabel,
    Button,
    TextPair
  },
  data: function () {
    return {
      icons: ICONS
    }
  },
  methods: {
    getTime: function (time) {
      return moment.unix(time).format('MMMM YYYY')
    }
  }

}
</script>

<style scoped>
  .modal-header {
    margin-bottom: 1em;
  }
  .text-small {
    margin-top: 1em;
  }

</style>
