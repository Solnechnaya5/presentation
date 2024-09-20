<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="grey darken-4">
      <v-sheet color="grey darken-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

        <div>{{ $auth.user.email }}</div>
      </v-sheet>

      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.id" nuxt :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.prevent="handleLogout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="grey darken-4">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AdminLayout',
  middleware: ['auth'],
  data: () => ({
    drawer: null,
    items: [
      {
        id: 4,
        title: 'Subscribers',
        icon: 'mdi-newspaper-variant-multiple',
        to: '/dashboard/subscribers',
      },
      {
        id: 5,
        title: 'Contact us messages',
        icon: 'mdi-newspaper-variant-multiple',
        to: '/dashboard/messages',
      },
    ],
  }),
  methods: {
    async handleLogout() {
      await this.$auth.logout()
    },
  },
}
</script>
