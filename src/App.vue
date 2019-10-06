<template>
  <div>
    <div class="contribute">
      Ajude a melhorar esse projeto
      <a href="https://github.com/reebr/challenge-stats">no GitHub</a> 🐵
    </div>
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
    background-color #fff
    border-top: 2px solid #eb007d
    box-shadow 0 2px 2px rgba(#eb007d, 20%)
    color #666
    padding 5px
    position fixed
    top 2%
    right 2%
    user-select none
    z-index 99999
    > a
      color #eb007d
      text-decoration none
      user-select normal
</style>