<template>
  <article class="roadmap-section">
    <div class="app-container">
      <div class="roadmap-section__text">
        <p class="title-2">Enjoy stunning graphics and non-stop action!</p>
        <p class="roadmap-section__descr">
          Fight your way through hordes of deadly enemies and solve the Mystery
          of the World of Shards!
        </p>
      </div>
      <div class="roadmap-section__body">
        <ul class="roadmap">
          <li
            v-for="item in items"
            :key="item.id"
            ref="roadmapItem"
            :class="['roadmap__item roadmap-item', { active: item.active }]"
            @click="roadmapClick(item)"
          >
            <div class="roadmap-item__item">
              <div class="roadmap-item__line"></div>
              <div class="roadmap-item__line"></div>
              <p>{{ item.q }}</p>
            </div>
            <p class="roadmap-item__descr">{{ item.title }}</p>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'RoadmapSection',
  data() {
    return {
      items: [
        {
          id: 1,
          q: 'Q3-Q4 2023',
          title: 'Unity Bonds',
          content:
            'The beginning of his union with his Firefly, and the start of his great journey through the World of Shards, in the process of which he discovers fragments of the Ancient Prophecy of the Unification ritual, the Legend of the shattered Heart of the World, and allusions to its possible restoration.',
          active: true,
        },
        {
          id: 2,
          q: 'Q4 2023',
          title: 'Unification Ritual',
          content:
            'The One who will reach Unity is the Chosen One, mentioned in the Ancient Prophecies of the OuMuaMua, who will restore the Heart of the World and abolish the filth.',
          active: false,
        },
        {
          id: 3,
          q: 'Q1-Q2 2024',
          title: 'The Hunt for the Hearts',
          content:
            'The Unification Ritual leads to the knowledge that Light and Darkness are not absolute Good or Evil. And as a result, it comes to the necessity of deciding which side to join and on which scale place the gathered "hearts”.',
          active: false,
        },
        {
          id: 4,
          q: 'Q2-Q3 2024',
          title: 'The Rights of The Forefathers',
          content:
            'Rumors of the most successful and mighty Wanderers reach even the most distant shards. Tales of their deeds are passed on by word of mouth, and many wish to join them and rally around the Leader.',
          active: false,
        },
        {
          id: 5,
          q: 'Q4 2024',
          title: 'Shards of the Past',
          content:
            'This is the start of the ultimate Battle of Good vs. Evil predicted by the prophecies, which only becomes known once all its parts are fully assembled and the whole story of the Shard World`s Disaster is formed.',
          active: false,
        },
        {
          id: 6,
          q: 'Q1 2025',
          title: 'Dark Souls',
          content:
            'A struggle between the Dark and the Light Mua grows in the World of Shards. Both of them desire the same thing - to restore the Heart of the World, but the goals they aim to achieve are entirely different. This is the beginning of an open standoff.',
          active: false,
        },
      ],
    }
  },
  methods: {
    roadmapClick(item) {
      this.items.forEach((item) => (item.active = false))
      item.active = true

      this.$modal.show('roadmap', item)
    },
  },
}
</script>

<style></style>
