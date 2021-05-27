import Web3 from 'web3'
import * as Web3ProviderEngine from 'web3-provider-engine'
import RpcSubprovider from 'web3-provider-engine/subproviders/rpc'

export const WALLET_ACTION_TYPES = {
  INIT_WEB_3_ENGINE: 'initWeb3Engine'
}

export const WALLET_MUTATION_TYPES = {
  SET_STATE: 'setState'
}

export const state = {
  web3engine: null
}

export const getters = {}

export const actions = {
  async [WALLET_ACTION_TYPES.INIT_WEB_3_ENGINE] ({ commit }) {
    const engine = new Web3ProviderEngine()
    engine.addProvider(new RpcSubprovider({
      rpcUrl: process.env.VUE_APP_ENGINE_NERWORK || null
    }))
    engine.start()
    const web3Engine = new Web3(engine)
    commit(WALLET_MUTATION_TYPES.SET_STATE, {
      web3engine: web3Engine
    })
  }
}

export const mutations = {
  [WALLET_MUTATION_TYPES.SET_STATE] (_state, payload) {
    Object.keys(payload).forEach(key => {
      _state[key] = payload[key]
    })
  }
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
