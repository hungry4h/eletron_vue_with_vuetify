<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon class="grey--text" @click="drawer=!drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-menu offset-y>
                <v-btn flat slot="activator" color="grey">
                    <v-icon left>expand_more</v-icon>
                    <span>Menu</span>
                </v-btn>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.id" router :to="link.route">
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-4.jpg">
                    </v-avatar>
                    <p class="white--text subheading mt-3">
                        The Net Ninja
                    </p>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.id" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">
                            {{link.icon}}
                        </v-icon>        
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">
                            {{link.text}}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer : false,
            links : [
                { id: 0, icon: 'dashboard', text: "Dashboard", route: '/' },
                { id: 1, icon: 'folder', text: "Guideline", route: '/guideline' },
                { id: 2, icon: 'person', text: "Table", route: '/table' },
                { id: 3, icon: 'book', text: "Pdf", route: '/pdf' }
            ]
        }
    }
}
</script>

<style>

</style>
