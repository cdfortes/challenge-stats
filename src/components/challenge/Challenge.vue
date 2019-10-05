<template>
  <div class="challenge">
    <div>
      <div class="challenge__header">
        <h2>{{ challenge.title }}</h2>
        <p :title="challenge.deadline" class="challenge__header__deadline">
          <strong>Deadline:</strong>
          {{ challenge.deadline | toTextFromNow }}
        </p>
        <p title="Nº de participantes" class="challenge__header__participants">
          <strong>Participantes:</strong>
          {{ participants }}
        </p>
      </div>
      <p class="challenge__description">
        {{ challenge.description }}
      </p>
    </div>
    <div class="challenge__winners">
      <winners :winners="challenge.winners" />
      <pull-requests :repository="challenge.repository" />
    </div>
  </div>
</template>

<script>
import Winners from '@/components/winner/Winners'
import PullRequests from '@/components/pullrequest/PullRequests'

export default {
  components: { Winners, PullRequests },
  props: {
    challenge: { type: Object, required: true },
  },
  computed: {
    participants(){
      return this.challenge.repository.pullRequests.nodes.length
    }
  }
}
</script>
