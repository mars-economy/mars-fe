<template>
  <header>
      <div class="header-icon headline" ref="sectionTitle">Mars Economy</div>
      <div class="menubar-container">
        <div class="menubar">
          <ul class="menu vf__flex vf__align-self-center" @click="onMenuToggle">
          </ul>
          <span class="menu-whitepaper">
          <a href="./whitepaper/Mars_Economy_Project_Whitepaper.pdf">Whitepaper</a>
        </span>
        </div>
        <template  v-if="isMobile">
          <SocialNetworksPanel/>
          <Footer />
        </template>
      </div>
    <div class="menu-trigger clickable" @click="onMenuToggle">
      <Icon name="menu" size="24" v-if="!isMenuOpen"></Icon>
      <Icon name="close" size="24" v-else></Icon>

    </div>

    <div class="header-application-button hidden-sm">
        <button>GO TO APPLICATION</button>
      </div>
  </header>
</template>

<script>
import Icon from '@/components/svgImages/Icon'
import SocialNetworksPanel from '../socialNetworks/SocialNetworksPanel'
import Footer from '../footer/Footer'
export default {
  name: 'Header',
  props: {
    isMobile: Boolean
  },
  components: {
    Footer,
    SocialNetworksPanel,
    Icon
  },
  data: function () {
    return {
      isMenuOpen: false,
      menuHeight: '0'
    }
  },
  methods: {
    onMenuToggle: function () {
      if (this.isMobile) {
        this.isMenuOpen = !this.isMenuOpen
        const elem = document.querySelector('.menubar-container')
        if (elem.style.height === '100vh') {
          elem.style.height = this.menuHeight = '0'
        } else {
          elem.style.height = '100vh'
        }
      }
    }
  }
}
</script>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    padding: 1.6vw 2.2vw;
    top:0;
    left: 0;
    right: 0;
    z-index: 1025;

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
  .header-icon {
    font-family: $font-family-base;
    font-style: normal;
    font-weight: 800;
    font-size: Max(1.25vw, 12px);
    line-height: 21px;
    letter-spacing: -0.02em;
    width: Max(10vw, 85px);
    z-index: 1030;
  }

  @media (max-width: $screen-sm-max) {
    header {
      padding: 20px $padding-slide-mobile;
    }
  }

</style>
