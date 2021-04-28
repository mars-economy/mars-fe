<template>
  <div>
    <ModalCloseIcon @closeModal="$emit('close')"></ModalCloseIcon>
    <div class="modal-content">
      <ModalHeader header="Disclaimer" level="1"></ModalHeader>
      <div class="modal-body">
        Thought i sent it earlier - might not have. Here it is: "The information provided on this website does not constitute investment advice,
        financial advice, trading advice, or any other sort of advice and you should not treat any of the website's content as such..
        By purchasing $DMT, you agree that you are not purchasing a security or investment and you agree to hold the team harmless and
        not liable for any losses or taxes you may incur. You also agree that the team is presenting the token "as is" and is not required
        to provide any support or services. You should have no expectation of any form from $DMT and its team. Although $DMT is an EXPERIMENTAL
        token for social experiment and not a digital currency. Always make sure that you are in compliance with your local laws and regulations
        before you make any purchase."
      </div>
    </div>
  </div>
</template>

<script>
import ModalCloseIcon from '@/components/modal/ModalCloseIcon'
import ModalHeader from '@/components/modal/ModalHeader'
export default {
  name: 'Disclaimer',
  components: {
    ModalHeader,
    ModalCloseIcon
  }
}
</script>

<style scoped>
</style>
