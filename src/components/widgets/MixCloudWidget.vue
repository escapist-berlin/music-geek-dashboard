<template>
  <div class="mixcloud-container">
    <div v-if="show">
      <a :href="show.url"><img :src="show.pictures.large" alt="Release Cover" style="width: 150px; height: 150px;"></a>
      <h1>{{ show.name }}</h1>
      <p>{{ show.description }}</p>
    </div>
    <div v-if="comments && show">
      <h2>Comments ({{ show.comment_count }}):</h2>
      <ul class="comment-list">
        <li v-for="(comment, index) in comments.data.slice(0, 3)" :key="index" class="comment-item">
          <p class="comment-text">{{ comment.comment }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: null,
      comments: null,
    };
  },
  async mounted() {
    try {
      this.show = await this.fetchShowData();
      this.comments = await this.fetchCommentsData();
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async fetchShowData() {
      try {
        const response = await fetch(`https://api.mixcloud.com/residentadvisor/ra514/`);
        return await response.json();
      } catch (error) {
        throw new Error('Failed to fetch release data');
      }
    },
    async fetchCommentsData() {
      try {
        const response = await fetch(`https://api.mixcloud.com/residentadvisor/ra514/comments/`);
        return await response.json();
      } catch (error) {
        throw new Error('Failed to fetch release data');
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .mixcloud-container {
    flex-grow: 1;
    border: 5px solid lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 576px) and (max-width: 991px) {

  }
</style>