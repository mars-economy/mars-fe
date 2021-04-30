<template>
  <div>
    <ModalLabel :labels="['stage', stage]"></ModalLabel>
    <ModalCloseIcon @closeModal="$emit('close')"></ModalCloseIcon>

    <div class="modal-content leading">
      <ModalHeader :header="point.name" level="1"></ModalHeader>

      <div class="modal-body">
        <flex-row noWrap align-h="between">
          <TextPair :data="point.status" icon="statePoint" label="state"></TextPair>
          <TextPair :data="getTime(point.dueDate)" icon="timePoint" label="due date"></TextPair>
          <TextPair :data="point.predictors.toString()" icon="users" label="predictors"></TextPair>
        </flex-row>
        <div class="text-small">{{ point.description }}</div>

      </div>

    </div>
    <div class="modal-content">
      <ModalHeader header="Predictions:" level="3"></ModalHeader>
      <div class="modal-body">
        <PointPredictionsList :predictions="point.predictions"></PointPredictionsList>
      </div>
      <div class="modal-footer">
        <Button name="predict now" link="" color="primary" icon></Button>
      </div>
    </div>
  </div>

</template>

<script>
import TextPair from '@/components/block/TextPair'
import moment from 'moment'
import Button from '@/components/buttons/Button'
import ModalLabel from '@/components/modal/ModalLabel'
import ModalCloseIcon from '@/components/modal/ModalCloseIcon'
import ModalHeader from '@/components/modal/ModalHeader'
import PointPredictionsList from './PointPredictionsList'

export default {
  name: 'StagePointModal',
  props: {
    point: Object,
    stage: String
  },
  components: {
    PointPredictionsList,
    ModalHeader,
    ModalCloseIcon,
    ModalLabel,
    Button,
    TextPair
  },
  methods: {
    getTime: function (time) {
      return moment.unix(time).utc().format('MMM, D YYYY z')
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
