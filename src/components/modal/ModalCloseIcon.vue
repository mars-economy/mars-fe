<template>
  <div class="close-icon" @click="$emit('closeModal')">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.263992 0.263992C0.615982 -0.0879975 1.18667 -0.0879975 1.53866 0.263992L11.736 10.4613C12.088 10.8133 12.088 11.384 11.736 11.736C11.384 12.088 10.8133 12.088 10.4613 11.736L0.263992 1.53866C-0.0879975 1.18667 -0.0879975 0.615982 0.263992 0.263992Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.736 0.263992C12.088 0.615982 12.088 1.18667 11.736 1.53866L1.53866 11.736C1.18667 12.088 0.615982 12.088 0.263992 11.736C-0.0879975 11.384 -0.0879972 10.8133 0.263992 10.4613L10.4613 0.263992C10.8133 -0.0879975 11.384 -0.0879975 11.736 0.263992Z" fill="white"/>
    </svg>
  </div>

</template>

<script>
export default {
  name: 'ModalCloseIcon'
}
</script>

<style scoped lang="scss">

  .close-icon {
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;
    z-index: 999;
    @media (max-width: $screen-sm-max) {
      right: 16px;
      top: 16px;
    }
  }

</style>
