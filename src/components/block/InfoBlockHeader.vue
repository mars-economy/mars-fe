<template>
  <div class="vf__flex vf__flex-dir--column info-block">
    <flex-row class="vf__align-content-center info-block-header">
      <div v-if="icon" class="info-block-icon vf__align-self-center" v-html="icon"></div>
      <span class="info-block-title vf__align-self-center">{{ title }}</span>
    </flex-row>
    <div class="info-block-content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'InfoBlock',
  props: {
    title: String,
    icon: String,
    content: String
  }
}
</script>

<style lang="scss" scoped>
  .info-block {
    .info-block-header, .info-block-content {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-sizing: border-box;
      backdrop-filter: blur(20px);
      border-radius: 8px;
      padding: 20px;
    }

    .info-block-header {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .info-block-header .info-block-title {
      font-family: Karla;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.02em;
      color: #FFFFFF;
    }

    .info-block-content {
      margin-top: 4px;
      font-family: Karla;
      font-style: normal;
      font-weight: normal;
      font-size: 0.6rem;
      line-height: 20px;
      letter-spacing: -0.02em;
      color: #FFFFFF;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  //.info-block {
  //  padding: 10px 20px 20px;
  //  background: rgba(255, 255, 255, 0.05);
  //  border: 1px solid rgba(255, 255, 255, 0.05);
  //  box-sizing: border-box;
  //  backdrop-filter: blur(20px);
  //  border-radius: 8px;
  //
  //  .info-block-icon {
  //    margin-right: 6px;
  //    margin-top: -7px;
  //  }
  //
  //  .info-block-title {
  //    font-family: Karla;
  //    font-style: normal;
  //    font-weight: 700;
  //    font-size: 16px;
  //    line-height: 22px;
  //  }
  //
  //  .info-block-content {
  //    margin-top: 5px;
  //    font-family: Karla;
  //    font-style: normal;
  //    font-weight: normal;
  //    font-size: 14px;
  //    line-height: 20px;
  //    /* or 143% */
  //
  //    letter-spacing: -0.02em;
  //  }
  //}
</style>
