import Vue from 'vue'
import { apolloProvider } from '../../plugins/apollo/apollo'

const getAllDataQuery = require('../../plugins/apollo/query/getAllDataQuery.gql')

const state = {
  categories: {},
  milestones: {},
  predictions: {},
  outcomes: {}
}

const getters = {
  getPhases: state => (phaseName, parentId) => {
    console.log('getPhases', phaseName, parentId)
    return state[phaseName]
  }
}

export const PHASES_ACTION_TYPES = {
  GET_DATA: 'getData'
}

export const PHASES_MUTATION_TYPES = {
  SET_STATE: 'setState'
}

const actions = {
  async [PHASES_ACTION_TYPES.GET_DATA] ({ commit }) {
    try {
      await apolloProvider.defaultClient.query({ query: getAllDataQuery }).then(res => {
        commit(PHASES_MUTATION_TYPES.SET_STATE, {
          key: 'categories',
          data: res.data.categories
        })
        commit(PHASES_MUTATION_TYPES.SET_STATE, {
          key: 'milestones',
          data: res.data.milestones
        })
        commit(PHASES_MUTATION_TYPES.SET_STATE, {
          key: 'predictions',
          data: res.data.predictions
        })
        commit(PHASES_MUTATION_TYPES.SET_STATE, {
          key: 'outcomes',
          data: res.data.outcomes
        })
      })
    } catch (e) {
      console.debug(e)
    }
  }
}
const mutations = {
  [PHASES_MUTATION_TYPES.SET_STATE] (state, payload) {
    Vue.set(state, payload.key, payload.data)
  }
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
