<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="subs.data"
      :hide-default-footer="true"
      disable-pagination
      :loading="isLoading"
      class="elevation-1 custom-vertial-align-ceil"
    >
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title>All preregister emails</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn class="primary" @click="handleDownloadFile()">Export</v-btn>
        </v-toolbar>
      </template>
      <template #[`item.created_at`]="{ item }">
        {{ $moment(item.created_at).format('LLLL') }}
      </template>
      <template #no-data> No subcsriptions found! </template>
    </v-data-table>
    <v-pagination
      v-model="page"
      class="mt-2"
      :length="getSubsTotalPages"
      @input="handlePageChange"
    ></v-pagination>
  </v-container>
</template>

<script>
export default {
  name: 'DashboardPosts',
  layout: 'dashboard',
  data() {
    return {
      page: 1,
      limit: 10,
      subs: {},
      query: '',

      dialog: false,
      dialogDelete: false,
      deletedItem: null,
      headers: [
        { text: 'name', value: 'name', sortable: false },
        { text: 'os', value: 'os', sortable: false },
        { text: 'email', value: 'email', sortable: false },
        { text: 'Registration at', value: 'registration_date' },
      ],

      isLoading: false,

      searchModel: null,
      searchItems: [],
      search: null,
      entries: [],
      descriptionLimit: 60,
    }
  },

  computed: {
    getBaseUrl() {
      return process.env.BASE_URL
    },
    getAllSubs() {
      return this.subs || {}
    },
    getSubsTotalPages() {
      return this.getAllSubs?.meta?.last_page
    },
  },
  async mounted() {
    await this.fetchSubs({ limit: this.limit, page: this.page })
  },
  methods: {
    async fetchSubs() {
      this.isLoading = true
      await this.$axios
        .get('/admin/register', {
          params: { limit: this.limit, page: this.page },
        })
        .then(({ data }) => {
          this.subs = data
        })
      this.isLoading = false
    },
    async handlePageChange(value) {
      window.scrollTo(0, 0)
      this.page = value
      await this.fetchSubs({ limit: this.limit, page: this.page })
    },
    handleDownloadFile() {
      this.$axios
        .get('/admin/register-export', {
          responseType: 'arraybuffer',
        })
        .then((response) => {
          const fileURL = window.URL.createObjectURL(new Blob([response.data]))
          const fileLink = document.createElement('a')
          fileLink.href = fileURL
          fileLink.setAttribute('download', 'subscribers.xlsx')
          document.body.appendChild(fileLink)
          fileLink.click()
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
