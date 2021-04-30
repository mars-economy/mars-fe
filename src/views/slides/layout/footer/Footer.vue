<template>
  <div class="footer">
    <span class="footer-item">
      Mars Еconomy 2021
    </span>
    <span class="footer-item footer-link clickable" @click="showModal()">
      Disclaimer
    </span>

  </div>

</template>

<script>
import Disclaimer from '@/views/slides/layout/footer/Disclaimer'
import Reveal from 'reveal.js/js'

export default {
  name: 'Footer',
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

<style scoped lang="scss">
  .footer {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: -0.02em;

    .footer-item {
      margin: 1rem;
      opacity: 0.5;
      text-shadow: $heading-shadow-base;
    }
    .footer-link {
      text-decoration-line: underline;
      &:hover {
        opacity: 1;
      }
    }
  }

</style>
