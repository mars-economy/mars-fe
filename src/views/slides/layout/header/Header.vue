<template>
  <header>
      <div class="header-icon">Mars Economy</div>
      <div class="menubar vf__flex vf__justify-content-center">
        <ul class="menu vf__flex vf__align-self-center">
        </ul>
        <span class="menu-whitepaper">
          <a href="./whitepaper/Project_MARS_Whitepaper_V0.4.pdf">Whitepaper</a>
        </span>
      </div>

    <div class="header-application-button">
        <button>GO TO APPLICATION</button>
      </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    openLink (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 1.6vw;
    position: absolute;
    left: 2.2vw;
    right: 2.2vw;
    z-index: 1024;

    .header-icon {
      font-family: $font-family-base;
      font-style: normal;
      font-weight: 800;
      font-size: Max(1.25vw, 12px);
      line-height: 21px;
      letter-spacing: -0.02em;
      width: Max(10vw, 85px);
    }

    .header-application-button {
      align-self: center;
      justify-self: center;
      width: Max(10vw, 115px);

      button {
        font-family: $font-family-base;
        font-style: normal;
        font-weight: bold;
        font-size: Max(0.83vw, 10px);
        line-height: 1.3em;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        padding: 0.66em 1em;
        white-space: nowrap;

        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-sizing: border-box;
        border-radius: 0.5em;
        color: white;
        backdrop-filter: blur(20px);
        &:hover {
          border: 1px solid rgba($white, 1);
          cursor: pointer;
        }
      }
    }
  }
</style>
