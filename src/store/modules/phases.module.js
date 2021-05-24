import Vue from 'vue'
import { apolloProvider } from '../../plugins/apollo/apollo'
import MarsRegister from '@/data/MarsRegister.json'
import BigNumber from 'bignumber.js'
import {
  createCategoriesArray,
  createMilestonesArray,
  createOutcomesArray,
  createPredictionsArray
} from '../../helpers/phases.objects'

const getAllDataQuery = require('../../plugins/apollo/query/getAllDataQuery.gql')

const state = {
  categories: {},
  milestones: {},
  predictions: {},
  outcomes: {}
}

const getters = {
  getPhases: state => (phaseName, parentId) => {
    return state[phaseName]
  }
}

export const PHASES_ACTION_TYPES = {
  GET_DATA: 'getData',
  GET_DATA_FROM_ENGINE: 'getDataFromEngine'
}

export const PHASES_MUTATION_TYPES = {
  SET_STATE: 'setState'
}

const actions = {
  async [PHASES_ACTION_TYPES.GET_DATA_FROM_ENGINE] ({
    commit,
    rootState
  }) {
    try {
      const registerContract = await new rootState.wallet.web3engine.eth.Contract(MarsRegister.abi, process.env.VUE_APP_REGISTER_ADDR)
      const timestampS = new BigNumber(Math.floor(Date.now() / 1000))
      await registerContract.methods.getPredictionData(timestampS).call()
        .then(res => {
          if (res) {
            const categories = createCategoriesArray(res[0])
            const milestones = createMilestonesArray(res[1], categories)
            const predictions = createPredictionsArray(res[2], milestones)
            const outcomes = createOutcomesArray(res[3], predictions)
            commit(PHASES_MUTATION_TYPES.SET_STATE, {
              key: 'categories',
              data: categories
            })
            commit(PHASES_MUTATION_TYPES.SET_STATE, {
              key: 'milestones',
              data: milestones
            })
            commit(PHASES_MUTATION_TYPES.SET_STATE, {
              key: 'predictions',
              data: predictions
            })
            commit(PHASES_MUTATION_TYPES.SET_STATE, {
              key: 'outcomes',
              data: outcomes
            })
          }
          return res
        })
    } catch (e) {
      console.debug(e)
    }
  },
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
