<template>
  <div v-if="numberOfPullRequests === 0">Nenhum pull request foi enviado para essa edição do evento ainda</div>
  <div v-else>
    <pull-request
      v-for="pullRequest in pullRequests"
      :key="pullRequest.id"
      :pullRequest="pullRequest"
    />
  </div>
</template>

<script>
import PullRequest from '@/components/pullrequest/PullRequest'

export default {
  components: { PullRequest },
  props: {
    repository: { type: Object, required: true }
  },
  computed: {
    pullRequests(){
      const prs = this.repository.pullRequests
      return prs.nodes || []
    },
    numberOfPullRequests(){
      return this.pullRequests.length || 0
    }
  }
}
</script>

<style lang="styl" src="./pull-requests.styl" scoped></style>