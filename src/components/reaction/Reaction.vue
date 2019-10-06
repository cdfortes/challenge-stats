<template>
  <div class="reaction">
    <img class="reaction__user__avatar"
      :src="reaction.user.avatarUrl"
      :alt="reaction.user.login"
    >
    <div class="reaction__info">
      <a :href="reaction.user.url">@{{ reaction.user.login }}</a>
      reagiu com {{ reaction.content | toEmoji }} {{ reaction.createdAt | toTextFromNow }}
    </div>
  </div>
</template>

<script>
import reactionContentToEmoji from '@/lib/emoji'

export default {
  props: {
    reaction: { type: Object, required: true }
  },
  filters: {
    toEmoji(content){
      return reactionContentToEmoji(content)
    }
  }
}
</script>

<style lang="styl" src="./reaction.styl" scoped></style>