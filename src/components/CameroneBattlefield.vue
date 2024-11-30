<template>
  <div class="battlefield">
    <!-- Legionnaires -->
    <div
      v-for="(legion, index) in legionnaires"
      :key="'legion-' + index"
      class="soldier legion"
      :style="legion.style"
    >
      <img
        src="/assets/leg.webp"
        alt="Legionnaire"
        class="soldier-image"
        :class="{ killed: legion.killed }"
      />
    </div>

    <!-- Mexicans -->
    <div
      v-for="(mexican, index) in mexicans"
      :key="'mexican-' + index"
      class="soldier mexican"
      :style="mexican.style"
    >
      <img
        src="/assets/mex.webp"
        alt="Mexican Soldier"
        class="soldier-image"
        :class="{ killed: mexican.killed }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CameroneBattlefield',
  data() {
    return {
      legionnaires: Array(62)
        .fill(null)
        .map(() => ({
          killed: false,
          style: {
            top: `${Math.random() * 70 + 10}%`,
            left: `${Math.random() * 30 + 5}%`,
          },
        })),
      mexicans: Array(2000)
        .fill(null)
        .map(() => ({
          killed: false,
          style: {
            top: `${Math.random() * 70 + 10}%`,
            left: `${Math.random() * 50 + 50}%`,
          },
        })),
    }
  },
  mounted() {
    this.startBattle()
  },
  methods: {
    startBattle() {
      const interval = setInterval(() => {
        const randomLegion = this.legionnaires.find((l) => !l.killed)
        const randomMexican = this.mexicans.find((m) => !m.killed)

        if (randomLegion) randomLegion.killed = true
        if (randomMexican) randomMexican.killed = true

        // Check if the battle is over
        if (this.legionnaires.every((l) => l.killed) || this.mexicans.every((m) => m.killed)) {
          clearInterval(interval)
          this.endBattle()
        }
      }, 100) // Simulate a soldier being killed every 100ms
    },
    endBattle() {
      console.log('Battle Over')
      // Add any final logic or events for the end of the battle here
    },
  },
})
</script>

<style scoped>
/* Battlefield Background */
.battlefield {
  position: relative;
  width: 100%;
  height: 100vh;
  background: black; /* Dark battlefield */
  overflow: hidden;
}

/* Soldier Styling */
.soldier {
  position: absolute;
  width: 30px;
  height: 30px;
  animation: move 1.5s infinite alternate ease-in-out; /* Slight movement */
}

.soldier-image {
  width: 100%;
  height: 100%;
  opacity: 1;
  transition:
    opacity 2s ease-in-out,
    transform 2s ease-in-out;
}

.soldier-image.killed {
  transform: translateY(-300px) scale(0.7); /* Soul rising */
  opacity: 0; /* Fade out */
}

/* Animations */
@keyframes move {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10px);
  }
}
</style>
