<template>
  <div>
    <ModalCloseIcon @closeModal="$emit('close')"></ModalCloseIcon>
    <div class="modal-content" :class="{'mobile' : isMobile}">
      <template v-if="isMobile">
        <ModalHeader header="Disclaimer" level="3"></ModalHeader>
      </template>
      <template v-else>
        <ModalLabel labels="Disclaimer"></ModalLabel>
      </template>
      <div class="modal-body">
        The information provided on this website does not constitute investment advice,
        financial advice, trading advice, or any other sort of advice and you should not treat
        any of the website's content as such.. By purchasing $DMT, you agree that you are
        not purchasing a security or investment and you agree to hold the team harmless and not
        liable for any losses or taxes you may incur. You also agree that the team is presenting
        the token "as is" and is not required to provide any support or services. You should have
        no expectation of any form from $DMT and its team. Although $DMT is an EXPERIMENTAL token
        for social experiment and not a digital currency. Always make sure that you are in
        compliance with your local laws and regulations before you make any purchase.
      </div>
    </div>
  </div>
</template>

<script>
import ModalCloseIcon from '@/components/modal/ModalCloseIcon'
import ModalHeader from '@/components/modal/ModalHeader'
import ModalLabel from '@/components/modal/ModalLabel'
export default {
  name: 'Disclaimer',
  components: {
    ModalLabel,
    ModalHeader,
    ModalCloseIcon
  },
  props: {
    isMobile: Boolean
  }
}
</script>

<style scoped>
</style>
