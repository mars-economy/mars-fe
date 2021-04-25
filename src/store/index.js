import Vue from 'vue'
import Vuex from 'vuex'
import phases from './modules/phases.module'

Vue.use(Vuex)

export const MODULE_NAMES = {
  PHASES: 'phases'
}

export default new Vuex.Store({
  modules: {
    [MODULE_NAMES.PHASES]: phases
  }
})
