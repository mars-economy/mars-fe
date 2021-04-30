<template>
  <div class="contacts">
    <div class="email-container">
      <EmailContact label="Press inquiries" email="press@marseconomy.org"></EmailContact>
    </div>
    <div class="email-container">
      <EmailContact label="Other inquiries" email="support@marseconomy.org"></EmailContact>
    </div>
    <div class="button-container">
      <Button name="comprehensive guide" color="light"
              @click="openExternalLink('https://mars-10.gitbook.io/mars/')">
      </Button>
    </div>
    <div class="button-container">
      <Button name="Whitepaper" color="light"
              @click="openExternalLink('https://dev.marseconomy.org/whitepaper/Mars_Economy_Project_Whitepaper.pdf')">
      </Button>
    </div>
    <div class="button-container" @click="showModal()">
      <Button name="Disclaimer" color="light"></Button>
    </div>
  </div>

</template>

<script>
import EmailContact from './EmailContact'
import Button from '../../../../../components/buttons/Button'
import Disclaimer from '@/views/slides/pages/JoinCommunity/components/Disclaimer'
import Reveal from 'reveal.js/js'
export default {
  name: 'Contacts',
  components: {
    Button,
    EmailContact
  },
  methods: {
    showModal () {
      console.log('show')
      this.$modal.show(
        Disclaimer,
        {},
        { height: 'auto', classes: ['disclaimer-modal', 'custom-modal'] },
        { opened: this.isModalOpen, closed: this.isModalClose }
      )
    },
    isModalOpen () {
      Reveal.configure({ mouseWheel: false, touch: false, keyboard: false })
    },
    isModalClose () {
      Reveal.configure({ mouseWheel: true, touch: true, keyboard: true })
    },
    openExternalLink (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
  .email-container + .email-container {
    margin-top: 1.5rem;
  }
  .email-container + .button-container {
    margin-top: 2rem;
  }
  .button-container + .button-container {
    margin-top: 1rem;
  }

</style>
