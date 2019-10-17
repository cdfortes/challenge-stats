<template>
  <div v-if="numberOfPullRequests === 0">Nenhum pull request foi enviado para essa edição do evento ainda</div>
  <div v-else>
    <div class="non-winners" v-if="winners.length === 0">Este evento não ainda possui vencedores divulgados</div>
    <pull-request
      v-for="(pullrequest, index) in sortedPullRequestsByUniqueReactionCount"
      :key="index"
      :pullRequest="pullrequest"
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
      return this.pullRequests.length
    },
    winnersWithPositionIncluded(){
      return this.winners.map((winner, index) => ({
        position: index + 1,
        login: winner
      }))
    },
    sortedPullRequestsByUniqueReactionCount(){
      const prs = this.pullRequests

      prs.sort((prOne, prTwo) => {
        const uniquePrOneReactionCounter = [... new Set(
          prOne.reactions
               .nodes
               .filter(reaction => reaction.user.login !== prOne.author.login)
               .map(reaction => reaction.user.login)
        )].length

        const uniquePrTwoReactionCounter = [... new Set(
          prTwo.reactions
               .nodes
               .filter(reaction => reaction.user.login !== prTwo.author.login)
               .map(reaction => reaction.user.login)
        )].length
        return uniquePrTwoReactionCounter > uniquePrOneReactionCounter
      })

      const winnersPr = prs.filter(pr => this.winners.includes(pr.author.login))
      const nonWinnersPr = prs.filter(pr => !this.winners.includes(pr.author.login))

      let orderedWinners = []
      for(const winner of this.winners)
        orderedWinners.push(winnersPr.find(pr => pr.author.login === winner))

      return [
        ...orderedWinners,
        ...nonWinnersPr
      ]
    },
  }
}
</script>

<style lang="styl" src="./pull-requests.styl" scoped></style>