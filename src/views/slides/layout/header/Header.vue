<template>
  <header class="vf__flex vf__justify-content-center" fill>
    <div class="vf__flex vf__justify-content-between vf__flex-dir--row">
      <div class="header-icon">Mars Milestones</div>
      <div class="header-application-button">
        <button>GO TO APPLICATION</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
  header {
    top: 0;
    position: absolute;
    width: 100vw;
    height: 100px;

    & > div {
      width: 85%;
      height: 70px;
    }

    .header-icon {
      font-family: Karla;
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: -0.02em;
      align-self: center;
      justify-self: center;
    }

    .header-application-button {
      align-self: center;
      justify-self: center;

      button {
        font-family: Karla;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        display: flex;
        align-self: center;
        justify-self: center;
        padding: 8px 12px;

        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-sizing: border-box;
        border-radius: 6px;
        color: white;

        &:hover {
          border: 1px solid rgba(255, 255, 255, 1);
          cursor: pointer;
        }
      }
    }
  }
</style>
