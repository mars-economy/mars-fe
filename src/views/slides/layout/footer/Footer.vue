<template>
  <div class="footer">
    <span class="footer-item">
      Mars Еconomy 2021
    </span>
    <span class="footer-item footer-link clickable" @click="showModal(); $emit('onCloseMenu')">
      Disclaimer
    </span>

  </div>

</template>

<script>
import Disclaimer from '@/views/slides/layout/footer/Disclaimer'
import Reveal from 'reveal.js/js'

export default {
  name: 'Footer',
  props: {
    isMobile: Boolean
  },
  data: function () {
    return {
      configModal: {
        height: 'auto',
        classes: ['disclaimer-modal', 'custom-modal']
      }
    }
  },
  methods: {
    showModal () {
      this.$modal.show(
        Disclaimer,
        { isMobile: this.isMobile },
        this.getConfigModal(),
        { opened: this.isModalOpen, closed: this.isModalClose }
      )
    },
    getConfigModal () {
      if (this.isMobile) {
        this.configModal.classes.push('mobile-modal')
      }
      return this.configModal
    },
    isModalOpen () {
      Reveal.configure({ mouseWheel: false, touch: false, keyboard: false })
      Reveal.getCurrentSlide().classList.add('back-blur')
    },
    isModalClose () {
      Reveal.configure({ mouseWheel: true, touch: true, keyboard: true })
      Reveal.getCurrentSlide().classList.remove('back-blur')
    },
    openExternalLink (url) {
      window.open(url, '_blank')
    }
  }

}
</script>

<style scoped lang="scss">
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: $screen-md-min) {
      position: absolute;
      width: 225px;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      letter-spacing: -0.02em;
      margin: 1rem;

    }
    @media (max-width: $screen-sm-max) {
      display: flex;
      flex-direction: row-reverse;
      width: 100%;
      padding: $padding-slide-mobile;
      justify-content: space-between;
      font-size: 12px;
      line-height: 18px;
    }
    text-shadow: $shadow-base;
  }
    .footer-item {
      opacity: 0.5;
    }
    .footer-link {
      text-decoration-line: underline;
      &:hover {
        opacity: 1;
      }
    }

</style>
