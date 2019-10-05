<template>
  <list-challenges
    :challenges="challenges"
    :status="status"
  />
</template>


<script>
import challengesJson from '@/challenges.json'
import { fetchPullRequestByLabel } from '@/lib/github'
import Challenges from '@/components/challenge/Challenges'

export default {
  components: {
    'list-challenges': Challenges
  },
  data(){
    return {
      challenges: [],
      status: {
        loaded: false,
        message: 'Buscando informações relacionadas aos eventos'
      }
    }
  },
  async created(){

    let array = []
    try {
      for(const challenge of challengesJson){
        const response = await fetchPullRequestByLabel(challenge['label'])

        if('message' in response)
          throw Error(response.message)

        array.push({
          ...challenge,
          ...response.data
        })
      }
      this.status.message = ''
    } catch(err){
      this.status.message = `Falha ao buscar informações dos eventos: ${err}`
    }
    this.challenges = array.reverse()
    this.status.loaded = true
  }
}
</script>

<style lang="stylus">
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: 'Comfortaa', cursive;
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%
  }
</style>