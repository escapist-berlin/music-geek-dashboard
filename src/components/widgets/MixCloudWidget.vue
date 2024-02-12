<template>
  <Transition>
    <div v-if="show && comments" class="mixcloud-container">
      <h1>{{ show.name.toUpperCase() }}</h1>
      <div class="show-cover-infos">
        <div>
          <p>{{ getDescription(show.description) }}</p>
          <br>
          <a
            v-if="show.description.includes('www')"
            :href="extractUrl(show.description)"
            >
            <font-awesome-icon icon="fa-solid fa-angles-right" fade />
            Read more
          </a>
        </div>
        <a :href="show.url">
          <img
            :src="show.pictures.large"
            alt="Show Cover"
            style="width: 90px; height: 90px;"
            >
        </a>
      </div>
      <div class="show-comments">
        <h2>Comments ({{ show.comment_count }})</h2>
        <ul class="comment-list">
          <li
            v-for="(comment, index) in comments.data.slice(0, 3)"
            :key="index"
            class="comment-item"
            >
            <img
              :src="comment.user.pictures.small"
              alt="Profile Picture"
              class="profile-picture"
              >
            <div class="comment-content">
              <p class="comment-username">
                {{ comment.user.name }}
              </p>
              <p class="comment-text">
                {{ comment.comment }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'MixCloudWidget',
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
      this.$emit('data-loaded');
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
    getDescription(description) {
      // Extracting the part before "Read more:"
      const endIndex = description.indexOf("Read");
      return endIndex > -1 ? description.substring(0, endIndex) : description;
    },
    extractUrl(description) {
      // Extract the URL from the description
      const urlPattern = /(?:https?:\/\/)?(?:www\.)?[\w\.-]+\.\w{2,}(?:\/\S*)?/;
      const urlMatch = description.match(urlPattern);
      return urlMatch ? (urlMatch[0].startsWith("www.") ? "https://" + urlMatch[0] : urlMatch[0]) : null;
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-enter-active {
    transition: opacity 2s ease;
  }

  .v-enter-from {
    opacity: 0;
  }
  .mixcloud-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    font-size: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    border: 1px solid #ccc;
    background-image: linear-gradient(to bottom right, #AE66BF, #267FBF);

    h1 {
      margin-left: auto;
      margin-right: auto;
      font-size: 19px;
    }

    .show-cover-infos {
      display: flex;
      gap: 10px;
    }

    .show-comments {
      display: flex;
      flex-direction: column;
      gap: 7px;

      .comment-list {
        display: flex;
        flex-direction: column;
      }

      .comment-item {
        display: flex;
        gap: 7px;
        margin-bottom: 2px;
        padding: 3px;

        .profile-picture {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .comment-content {
          display: flex;
          flex-direction: column;
          margin-bottom: 2px;

          .comment-username {
            font-weight: bold;
          }

          .comment-text {
            font-size: small;
          }
        }
      }
    }
  }
</style>