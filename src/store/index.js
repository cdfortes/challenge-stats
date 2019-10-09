import vue from 'vue'
import Vuex from 'vuex'

import configuration from '@/challenges.json'
import { fetchPullRequestByLabel } from '@/lib/github'

vue.use(Vuex)

export default new Vuex.Store({
  state: {
    challenges: [],
  },
  mutations: {
    setChallenges(state, payload){
      state.challenges = payload || []
    }
  },
  actions: {
    /**
     * Realiza a requisição ao GitHub para iniciar o objeto que
     * irá armazenar os dados dos objetos relacionados às edições
     * dos eventos.
     */
    async initialize({ commit }){
      const challenges = []
      for(const challenge of configuration){
        const response = await fetchPullRequestByLabel(challenge['label'])
        challenges.push({
          ...challenge,
          ...response.data
        })
      }
      commit('setChallenges', challenges)
    }
  },
  getters: {
    /**
     * Obtém os desafios da edição mais recente para a mais antiga.
     */
    challenges: state => state.challenges ? state.challenges.reverse() : []
  }
})