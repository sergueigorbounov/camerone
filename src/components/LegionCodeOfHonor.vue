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

    <!-- Code of Honor Text -->
    <div class="code-of-honor" v-if="!showCombatText && !showFinalScene && !showCameroneText">
      <div class="sliding-text">
        <p class="title">Code d'Honneur du Légionnaire</p>
        <p class="line" :class="{ transparent: stopAnimation }">
          1. Légionnaire, tu es un volontaire servant la France avec honneur et fidélité.
        </p>
        <p class="line" :class="{ transparent: stopAnimation }">
          2. Chaque légionnaire est ton frère d’armes, quelle que soit sa nationalité, sa race ou sa
          religion. Tu lui témoignes la même solidarité étroite qui unit les membres d’une même
          famille.
        </p>
        <p class="line" :class="{ transparent: stopAnimation }">
          3. Respect des traditions, dévouement aux chefs, discipline et camaraderie sont ta force ;
          courage et loyauté tes vertus.
        </p>
        <p class="line" :class="{ transparent: stopAnimation }">
          4. Fier de ton état de légionnaire, tu le montres dans ta tenue toujours impeccable, ton
          comportement digne mais modeste, et tes quartiers toujours propres.
        </p>
        <p class="line" :class="{ transparent: stopAnimation }">
          5. Soldat d’élite, tu t’entraînes avec rigueur, tu entretiens tes armes comme tes biens
          les plus précieux, et tu veilles constamment à ta forme physique.
        </p>
        <p class="line special" :class="{ red: stopAnimation, zoomTransparent: zoomAnimation }">
          6. La mission est sacrée ; tu l’exécutes jusqu’au bout, au péril de ta vie.
        </p>
        <p class="line" :class="{ transparent: stopAnimation }">
          7. En combat, tu agis sans passion ni haine ; tu respectes les ennemis vaincus, tu
          n’abandonnes jamais ni tes morts, ni tes blessés, ni tes armes.
        </p>
      </div>
    </div>

    <!-- "COMBAT DE CAMERONE" Page -->
    <div class="code-of-honor" v-if="showCombatText && !showFinalScene && !showCameroneText">
      <div class="combat-text">
        <p>COMBAT DE CAMERONE</p>
      </div>
    </div>

    <!-- Final Scene Page -->
    <div class="code-of-honor" v-if="showFinalScene && !showCameroneText">
      <div class="final-scene">
        <!--   <img src="/assets/leg.webp" alt="Legion Emblem" /> -->
        <p>À la gloire de la Légion Étrangère et de ses héros immortels.</p>
      </div>
    </div>

    <!-- Monument Text Page -->
    <div class="code-of-honor" v-if="showCameroneText">
      <div class="camerone-text">
        <p>Ils furent ici moins de soixante</p>
        <p>Opposés à toute une armée.</p>
        <p>Sa masse les écrasa.</p>
        <p>La vie plutôt que le courage</p>
        <p>Abandonna ces soldats français</p>
        <p>À Camerone le 30 avril 1863</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      stopAnimation: false,
      zoomAnimation: false,
      showCombatText: false,
      showFinalScene: false,
      showCameroneText: false,
    }
  },
  mounted() {
    // Attempt autoplay when component mounts

    // Synchronize animations with music timing
    setTimeout(() => {
      this.stopAnimation = true // Stop scrolling
      setTimeout(() => {
        this.zoomAnimation = true // Start zooming
        setTimeout(() => {
          this.showCombatText = true // Show "COMBAT DE CAMERONE"
          setTimeout(() => {
            this.showCombatText = false // Fade out "COMBAT DE CAMERONE"
            this.showFinalScene = true // Show the final scene
            setTimeout(() => {
              this.showFinalScene = false // Fade out final scene
              this.showCameroneText = true // Show the famous monument text
            }, 7000) // Show final scene for 7 seconds
          }, 6000) // Show "COMBAT DE CAMERONE" for 6 seconds
        }, 3000) // Start "COMBAT DE CAMERONE" 3 seconds after zooming
      }, 3000) // Wait 3 seconds after stopping
    }, 20000) // Stop scrolling after 20 seconds
  },
}
</script>

<style scoped>
/* Full Background Flag with Waving Effect */
.background-flag {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/assets/flag.webp') no-repeat center;
  background-size: cover;
  filter: brightness(0.3);
  animation: wave 6s infinite alternate;
  z-index: -1;
}

/* Shared "Code of Honor" styles for each page */
.code-of-honor {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
  max-width: 1200px; /* Limit width for larger screens */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Times New Roman', serif;
}

/* Responsive text styling */
p,
.line,
.title {
  color: white;
  text-shadow:
    0px 0px 10px #000000,
    0px 0px 25px #000000;
}

.sliding-text {
  width: 100%;
  text-align: center;
  animation: slide-up 20s linear forwards;
}

.title {
  font-size: 4vw; /* Responsive font size */
  font-weight: bold;
  margin-bottom: 3rem;
  color: #dcbb00fd;
  text-shadow: 2px 2px 10px rgb(0, 0, 0);
}

.line {
  margin-bottom: 2rem;
  font-size: 2vw; /* Responsive font size */
  line-height: 1.5;
}

/* Special line with zoom effect */
.line.special {
  transition:
    color 1.5s ease-in-out,
    transform 2s ease-in-out;
}

.line.special.red {
  color: rgb(206, 0, 0);
}

.line.special.zoomTransparent {
  animation: zoomTransparent 1s ease-in-out forwards;
}

.line.transparent {
  opacity: 0;
  transition: opacity 2s ease-in-out;
}

@keyframes slide-up {
  from {
    transform: translateY(70%);
  }
  to {
    transform: translateY(-35%);
  }
}

@keyframes zoomTransparent {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(10);
    opacity: 0;
  }
}

/* Combat Text Styles */
.combat-text {
  width: 100%;
  font-size: 8vw; /* Responsive font size */
  font-weight: bold;
  text-align: center;
  color: #ffd700;
  opacity: 0;
  animation: fadeInOut 6s ease-in-out forwards;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* Final Scene */
.final-scene {
  text-align: center;
  animation: fadeInOut 6s ease-in-out forwards;
}

.final-scene img {
  max-width: 50%; /* Adjust image size */
  margin-bottom: 1rem;
}

.final-scene p {
  font-size: 4vw; /* Responsive font size */
  color: #ffffff;
}

/* Monument Text Styles */
.camerone-text {
  width: 90%;
  font-size: 2.5vw; /* Responsive font size */
  text-align: center;
  line-height: 1.5;
  color: #ffffff;
  opacity: 0;
  animation: fadeIn 4s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Spotify Player */
.spotify-player {
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 1000;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .title {
    font-size: 6vw;
  }

  .line {
    font-size: 3vw;
  }

  .combat-text {
    font-size: 10vw;
  }

  .final-scene p,
  .camerone-text {
    font-size: 4vw;
  }

  .spotify-player {
    width: 100%;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
  }
}
</style>
