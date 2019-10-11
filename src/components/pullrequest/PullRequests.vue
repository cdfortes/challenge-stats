<template>
  <div v-if="numberOfPullRequests === 0">Nenhum pull request foi enviado para essa edição do evento ainda</div>
  <div v-else>
    <div class="non-winners" v-if="winners.length === 0">Este evento não ainda possui vencedores divulgados</div>
    <pull-request
      v-for="pullRequest in pullRequests"
      :key="pullRequest.id"
      :pullRequest="pullRequest"
      :winners="winnersWithPositionIncluded"
    />
  </div>
</template>

<script>
import PullRequest from '@/components/pullrequest/PullRequest'

export default {
  components: { PullRequest },
  props: {
    repository: { type: Object, required: true },
    winners: { type: Array, required: true }
  },
  computed: {
    pullRequests(){
      const prs = this.repository.pullRequests
      return prs.nodes || []
    },
    numberOfPullRequests(){
      return this.pullRequests.length || 0
    },
    winnersWithPositionIncluded(){
      return this.winners.map((winner, index) => ({
        position: index + 1,
        login: winner
      }))
    }
  }
}
</script>

<style lang="styl" src="./pull-requests.styl" scoped></style>