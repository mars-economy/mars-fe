<template>
  <div>
    <ModalLabel :labels="['stage', stage]"></ModalLabel>
    <ModalCloseIcon @closeModal="$emit('close')"></ModalCloseIcon>

    <div class="modal-content leading">
      <ModalHeader :header="point.name" level="1"></ModalHeader>
      <StagePointInfo :point="point"></StagePointInfo>
      <div class="text-small">{{ point.description }}</div>
    </div>
    <div class="modal-content">
      <ModalHeader header="Predictions:" level="3"></ModalHeader>
      <div class="modal-body">
        <PointPredictionsList :predictions="point.predictions"></PointPredictionsList>
      </div>
      <div class="modal-footer">
        <Button color="primary" icon link="" name="predict now" v-on:click="navigateToApp(point.id)"></Button>
      </div>
    </div>
  </div>

</template>

<script>
import moment from 'moment'
import Button from '@/components/buttons/Button'
import ModalLabel from '@/components/modal/ModalLabel'
import ModalCloseIcon from '@/components/modal/ModalCloseIcon'
import PointPredictionsList from './PointPredictionsList'
import StagePointInfo from './StagePointInfo'
import ModalHeader from '@/components/modal/ModalHeader'

export default {
  name: 'StagePointModal',
  props: {
    point: Object,
    stage: String
  },
  components: {
    ModalHeader,
    StagePointInfo,
    PointPredictionsList,
    ModalCloseIcon,
    ModalLabel,
    Button
  },
  methods: {
    getTime: function (time) {
      return moment.unix(time).utc().format('MMM, D YYYY z')
    },
    navigateToApp (milestoneId) {
      window.open(process.env.VUE_APP_MARS_APPLICATION + '/milestones/' + milestoneId, '_blank')
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
