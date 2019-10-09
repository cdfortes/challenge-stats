<template>
  <div>
    <a class="contribute"
      href="https://github.com/reebr/challenge-stats"
      title="Ajude a melhorar este projeto 🐵"
      alt="Ajude a melhorar este projeto no GitHub 🐵">
        <img src='@/assets/github-logo.svg'>
    </a>
    <list-challenges
      :challenges="challenges"
      :status="status"
    />
  </div>
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
        message: 'Buscando informações relacionadas aos eventos, aguarde...'
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
  *
  *::after
  *::before
    box-sizing border-box
    font-family 'Concert One', cursive
    margin 0
    padding 0

  html
  body
    height 100%
    > div
      height inherit

  .contribute
    height 30px
    width 30px
    position fixed
    top 2%
    right 2%
    user-select none
    z-index 99999
    transition transform 200ms ease-in
    &:hover
      transform scale(1.5)
    > img
      height inherit
</style>