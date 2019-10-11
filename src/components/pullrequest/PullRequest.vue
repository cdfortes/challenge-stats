<template>
  <div class="pull-request">
    <div class="pull-request__info">
      <img
        class="pull-request__user-avatar"
        :src="author.avatarUrl"
        :alt="author.login"
        :title="'@' + author.login">
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
      <reactions :reactions="reactions" :authorLogin="author.login"/>
    </div>
  </div>
</template>

<script>
import Reactions from '@/components/reaction/Reactions'

export default {
  components: { Reactions },
  props: {
    pullRequest: { type: Object, required: true }
  },
  computed: {
    author(){
      return this.pullRequest.author
    },
    reactions(){
      return this.pullRequest.reactions
    }
  }
}
</script>

<style lang="styl" src="./pull-request.styl" scoped></style>