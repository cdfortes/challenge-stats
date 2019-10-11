<template>
  <div class="pull-request">
    <div class="pull-request__info">
      <div class="pull-request__user-avatar">
        <img
          :src="author.avatarUrl"
          :alt="author.login"
          :title="'@' + author.login">
        <div
          v-if="isWinner(author.login)"
          :data-position="getWinnerPosition(author.login)"
          :title="getWinnerPosition(author.login) + 'º colocado(a) nessa edição do evento'"
        >
          {{ getWinnerPosition(author.login) }}
        </div>
      </div>
      <p class="pull-request__signed">
        <a :href="author.url">@{{ author.login }}</a>
        enviou sua participação {{ pullRequest.createdAt | toTextFromNow }}
      </p>
      <p class="pull-request__vote">
        Vote nesse pull request
        <a :href="pullRequest.permalink">reagindo aqui</a>
      </p>
    </div>
    <div class="pull-request__reactions">
      <reactions :reactions="reactions" />
    </div>
  </div>
</template>

<script>
import Reactions from '@/components/reaction/Reactions'

export default {
  components: { Reactions },
  props: {
    pullRequest: { type: Object, required: true },
    winners: { type: Array, required: true }
  },
  computed: {
    author(){
      return this.pullRequest.author
    },
    reactions(){
      return this.pullRequest.reactions
    }
  },
  methods: {
    isWinner(login){
      const logins = this.winners.map(winner => winner.login)
      return logins.includes(login)
    },
    getWinnerPosition(login){
      const winner = this.winners.filter(winner => winner.login == login)
      return winner[0].position
    }
  }
}
</script>

<style lang="styl" src="./pull-request.styl" scoped></style>