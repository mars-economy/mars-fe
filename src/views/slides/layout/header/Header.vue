<template>
  <header>
    <div class="header-icon headline">
      <template v-if="!isMobile">
        <Logo></Logo>
      </template>
      <template v-else>
        {{ getHeaderTitle(slideId) }}
      </template>
    </div>
    <div class="menubar-container">
      <div class="menubar">
        <ul class="menu vf__flex vf__align-self-center" @click="onMenuToggle">
        </ul>
        <span class="menu-whitepaper">
          <a href="./whitepaper/Mars_Economy_Project_Whitepaper.pdf">Whitepaper</a>
        </span>

        <template  v-if="isMobile">
          <div class="header-application-button">
            <Button color="light" name="GO TO APPLICATION" size="small" disabled></Button>
          </div>
          <div class="header-application-button">
            <Button color="primary" name="Buy tokens now" size="small" v-on:click="navigateToBye()"></Button>
          </div>

        </template>
      </div>
      <template v-if="isMobile">
        <SocialNetworksPanel/>
        <Footer :isMobile="isMobile" @onCloseMenu="onMenuToggle"/>
      </template>
    </div>
    <div class="menu-trigger clickable" @click="onMenuToggle">
      <Icon name="menu" size="24" v-if="!isMenuOpen"></Icon>
      <Icon name="close" size="24" v-else></Icon>

    </div>

    <template v-if="!isMobile">
      <div class="header-application-button">
        <Button color="light" name="GO TO APPLICATION" size="small" disabled></Button>
      </div>
      <div class="header-application-button">
        <Button color="primary" name="Buy tokens now" size="small" v-on:click="navigateToBye()"></Button>
      </div>
    </template>

  </header>
</template>

<script>
import Icon from '@/components/svgImages/Icon'
import SocialNetworksPanel from '../socialNetworks/SocialNetworksPanel'
import Footer from '../footer/Footer'
import Button from '../../../../components/buttons/Button'
import Logo from '@/views/slides/layout/header/Logo'

export default {
  name: 'Header',
  props: {
    isMobile: Boolean,
    slideId: {
      type: String,
      default: 'Mars Economy'
    }
  },
  components: {
    Logo,
    Button,
    Footer,
    SocialNetworksPanel,
    Icon
  },
  data: function () {
    return {
      isMenuOpen: false,
      menuHeight: '0',
      headerTitle: 'Mars Economy'
    }
  },
  methods: {
    navigateToApp () {
      window.open(process.env.VUE_APP_MARS_APPLICATION, '_blank')
    },
    navigateToBye () {
      window.open('https://app.liquifi.org/#/dashboard/arbitrage?search=DMT', '_blank')
    },
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
    },
    getHeaderTitle (id) {
      if (id && this.isMobile) {
        const title = document.querySelector('#' + id).getAttribute('slide-title')
        return title || 'Mars Economy'
      } else {
        return 'Mars Economy'
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
    top: 0;
    left: 0;
    right: 0;
    z-index: 1025;

    .header-application-button {
      align-self: center;
      justify-self: center;

      + .header-application-button {
        margin-left: 12px;
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
      .header-application-button {
        justify-content: flex-start;
        margin-top: $menubar-item-margin;
        + .header-application-button {
          margin-left: unset;
        }
      }
    }
  }

</style>
