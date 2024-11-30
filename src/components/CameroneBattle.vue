<template>
  <div class="presentation">
    <!-- Background Flag -->
    <div class="background-flag"></div>

    <!-- Spotify Player -->
    <div class="spotify-player">
      <iframe
        ref="spotifyPlayer"
        src="https://open.spotify.com/embed/track/2yfpZNQmLDijvSLmsRznRk?utm_source=generator"
        width="300"
        height="80"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowtransparency="true"
      ></iframe>
    </div>

    <!-- Battlefield Visualization -->
    <div class="battlefield" v-if="showBattlefield">
      <div class="battle">
        <div class="legionnaire" v-for="n in legionnaires" :key="'legion-' + n"></div>
        <div class="mexican" v-for="n in mexicans" :key="'mexican-' + n"></div>
      </div>
    </div>

    <!-- Tribute Text -->
    <div class="camerone-text" v-if="showTribute">
      <p>Ils furent ici moins de soixante</p>
      <p>Opposés à toute une armée.</p>
      <p>Sa masse les écrasa.</p>
      <p>La vie plutôt que le courage</p>
      <p>Abandonna ces soldats français</p>
      <p>À Camerone le 30 avril 1863</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showBattlefield: true,
      showTribute: false,
      legionnaires: Array.from({ length: 62 }), // Representing 62 legionnaires
      mexicans: Array.from({ length: 2000 }), // Representing 2000 Mexican soldiers
    }
  },
  mounted() {
    // Battlefield to Tribute Transition
    setTimeout(() => {
      this.showBattlefield = false
      this.showTribute = true
    }, 20000) // Show tribute after 20 seconds
  },
}
</script>

<style scoped>
/* Background Flag */
.background-flag {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/assets/flag.webp') no-repeat center;
  background-size: cover;
  filter: brightness(0.5);
  z-index: -1;
}

/* Spotify Player */
.spotify-player {
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 1000;
}

/* Battlefield Visualization */
.battlefield {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: black;
}

.battle {
  position: relative;
  width: 80%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(50, 1fr); /* Adjust grid density */
  grid-gap: 5px;
}

.legionnaire,
.mexican {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: fadeAndRise 10s ease-in-out forwards;
}

.legionnaire {
  background: red;
}

.mexican {
  background: green;
}

@keyframes fadeAndRise {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-300px); /* Symbolic rise */
  }
}

/* Tribute Text */
.camerone-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2rem;
  color: white;
  opacity: 0;
  animation: fadeIn 4s ease-in-out forwards;
}

.camerone-text p {
  margin: 0.5rem 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
