<template>
  <div class="discogs-container">
    <h1>Check out this record:</h1>
    <div v-if="release">
      <a :href="release.uri"><img src="/release_cover.jpg" alt="Release Cover" style="width: 150px; height: 150px;"></a>
      <p>{{ displayArtists }} - {{ release.title }}</p>
      <p>Label: {{ displayLabels }}</p>
      <p>Country: {{ release.country }}</p>
      <p>Released: {{ release.released }}</p>
      <p>Styles: {{ release.styles.join(', ') }}</p>
      <p>Have: {{ release.community.have }} / Want: {{ release.community.want }} / {{ release.lowest_price }} €</p>
    </div>
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
    border: 5px solid lightsalmon;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 768px) {

  }
  @media (min-width: 1024px) {

  }
</style>