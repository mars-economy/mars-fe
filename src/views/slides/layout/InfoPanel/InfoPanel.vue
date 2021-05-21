<template>
  <div class="mars-ido-panel clickable" :class="{'mobile' : isMobile}" @click="$emit('click')">
    <div class="panel-text">
      <span>Mars Economy Launch!</span>
      <span>Decentralized Mars Token IDO</span>
    </div>
    <div class="panel-icon">
      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.833374 0.895261L0.833374 2.24011C0.833374 2.53259 0.973881 2.81074 1.21188 2.98279L5.3812 5.99938L1.21188 9.01596C0.973881 9.18801 0.833374 9.46329 0.833374 9.75864L0.833374 11.1035C0.833374 11.2899 1.04557 11.3988 1.19754 11.2899L8.25155 6.18576C8.37772 6.094 8.37772 5.90762 8.25155 5.81586L1.19754 0.711741C1.04557 0.59991 0.833374 0.708875 0.833374 0.895261Z" />
      </svg>
    </div>
  </div>

</template>

<script>
export default {
  name: 'InfoPanel',
  props: {
    isMobile: Boolean
  }
}
</script>

<style scoped lang="scss">
.mars-ido-panel {
  background-color: rgba($black, 0.05);
  border: 1px solid rgba($white, 0.1);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(20px);
  &:hover {
    background-color: rgba($black, 0.03);
  }
  .panel-text {
    font-size: 12px;
    line-height: 14px;
    display: flex;
    font-weight: bold;
    text-transform: uppercase;
  }
  .panel-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    background-color: rgba($white, 0.05);
    border: 1px solid rgba($white, 0.1);
    cursor: pointer;
    svg {
      fill: $white;
      opacity: 0.5;
    }
  }
}

.mars-ido-panel:not(.mobile) {
  padding: 0 12px 0 20px;
  margin-top: 32px;
  border-radius: 30px;
  .panel-text {
    padding: 20px 0;
    align-items: center;
  }
  span + span {
    padding-left: 16px;
    margin-left: 16px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -20px;
      bottom: -20px;
      left: 0;
      border-left: 1px solid rgba($white, 0.1);
    }
  }
}

.mars-ido-panel.mobile {
  position: relative;
  border-radius: 40px;
  margin-top: 20px;
  padding: 14px 16px 14px 29px;

  .panel-text {
    flex-direction: column;
    align-items: flex-start;
    span + span {
      text-transform: none;
      font-weight: normal;
      margin-top: 8px;
    }
  }
}
</style>
