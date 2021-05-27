import Vue from 'vue'
import Vuex from 'vuex'
import phases from './modules/phases.module'
import wallet from './modules/wallet.module'

Vue.use(Vuex)

export const MODULE_NAMES = {
  PHASES: 'phases',
  WALLET: 'wallet'
}

export default new Vuex.Store({
  modules: {
    [MODULE_NAMES.PHASES]: phases,
    [MODULE_NAMES.WALLET]: wallet
  }
})
