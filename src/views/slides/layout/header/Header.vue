<template>
  <header>
    <flex-row class="header-icon headline">
      <template v-if="isMobile && getHeaderTitle(slideId)">
        {{ getHeaderTitle(slideId) }}
      </template>
      <template v-else>
          <Logo class="clickable" :isMobile="isMobile" @click="$emit('navigateToHome')"></Logo>
      </template>
    </flex-row>
    <div class="menubar-container">
      <div class="menubar">
        <ul class="menu vf__flex vf__align-self-center" @click="onMenuToggle">
        </ul>
        <span class="menu-whitepaper">
          <a href="./whitepaper/Mars_Economy_Project_Whitepaper.pdf">Whitepaper</a>
        </span>

        <template  v-if="isMobile">
          <div class="header-application-button">
            <Button color="light" name="Predict now" size="small" v-on:click="navigateToApp()"></Button>
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
        <Button color="light" name="Predict now" size="small" v-on:click="navigateToApp()"></Button>
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
        return title || null
      } else {
        return null
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
    letter-spacing: -0.02em;
    z-index: 1030;
  }

  @media (max-width: $screen-sm-max) {
    header {
      padding: 20px $padding-slide-mobile;
      .header-application-button {
        text-align: left;
        padding: 0 24px;
        margin-top: $menubar-item-margin;
        + .header-application-button {
          margin-left: unset;
        }
      }
    }
  }

</style>
