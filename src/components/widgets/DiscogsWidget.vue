<template>
  <div v-if="release" class="discogs-container">
    <h1>NEXT RECORD TO DISCOVER</h1>
    <div class="release-cover-infos">
      <a :href="release.uri">
        <img src="/release_cover.jpg" alt="Release Cover" style="width: 90px; height: 90px;">
      </a>
      <div>
        <p>{{ displayArtists }} - {{ release.title }}</p>
        <p>{{ displayLabels }}</p>
        <p>{{ release.country }} - {{ release.released }}</p>
        <p>{{ release.styles.join(', ') }}</p>
      </div>
    </div>

    <div class="release-tracklist">
      <ul>
        <li v-for="(formattedTrack, index) in formattedTracklist" :key="index">{{ formattedTrack }}</li>
      </ul>
      <font-awesome-icon icon="fa-solid fa-compact-disc" />
    </div>

    <p>Have: {{ release.community.have }} / Want: {{ release.community.want }} / {{ release.lowest_price }} €</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      release: null,
    };
  },
  computed: {
    displayArtists() {
      if (!this.release || !this.release.artists) return '';
      return this.release.artists.map(artist => artist.name).join(', ');
    },
    displayLabels() {
      if (!this.release || !this.release.labels) return '';
      return this.release.labels.map(label => `${label.name} - ${label.catno}`).join(', ');
    },
    formattedTracklist() {
      let positionCounter = 1;
      return this.release.tracklist.map((track) => {
        const formattedPosition = positionCounter < 10 ? `0${positionCounter}` : positionCounter;
        positionCounter++;
        return `${formattedPosition}. ${track.title}`;
      });
    }
  },
  async mounted() {
    try {
      this.release = await this.fetchReleaseData();
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async fetchReleaseData() {
      try {
        const response = await fetch(`https://api.discogs.com/releases/52510`);
        return await response.json();
      } catch (error) {
        throw new Error('Failed to fetch release data');
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .discogs-container {
    display: flex;
    gap: 10px;
    flex-direction: column;

    padding: 20px;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    font-size: 15px;

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    border: 1px solid #ccc;
    background-image: linear-gradient(to bottom right, #D26623, #AE66BF);

    h1 {
      margin: auto;
      font-size: 19px;
    }
    .release-cover-infos {
      display: flex;
      gap: 10px;
    }

    .release-tracklist {
      display: flex;
      gap: 30px;
      align-items: center;

      svg {
        margin: auto;
        font-size: 65px;
        animation: rotateAnimation 6s infinite linear;
      }
    }
  }

  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (min-width: 768px) {

  }
  @media (min-width: 1024px) {

  }
</style>