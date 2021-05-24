import { mapActions } from 'vuex'
import { MODULE_NAMES } from '../store'
import { PHASES_ACTION_TYPES } from '../store/modules/phases.module'

const apolloMixins = {
  async mounted () {
    if (process.env.VUE_APP_DATA_SOURCE === 'graphql') {
      await this.getAllData()
    }
  },
  methods: {
    ...mapActions(MODULE_NAMES.PHASES, {
      getAllData: PHASES_ACTION_TYPES.GET_DATA
    })
  }
}

export default apolloMixins
