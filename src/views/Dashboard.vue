<template>
    <div class="dashboard">
        <h1 class="subheading grey--text">dashboard</h1>

        <v-container class="my-5">
            <v-layout row class="mb-3">
                <v-tooltip top>
                    <v-btn small flat color="grey" @click="sortBy('title')" slot="activator"> 
                        <v-icon left small>folder</v-icon>
                        <span class="caption text-lowercase">By project name</span>
                    </v-btn>
                    <span>Sort projects by project name</span>
                </v-tooltip>
                <v-tooltip top>
                    <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
                        <v-icon left small>person</v-icon>
                        <span class="caption text-lowercase">By person</span>
                    </v-btn>
                    <span>Sort projects by person</span>
                </v-tooltip>
            </v-layout>

            <v-card flat v-for="project in projects" :key="project.id">
                <v-layout row wrap :class="`pa-3 project ${project.status}`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Project title</div>
                        <div>{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div>{{ project.person }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Due by</div>
                        <div>{{ project.due }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="right">
                            <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
                        </div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </v-card>

        </v-container>        
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                { id: 0, title: "Design a new website", person: "kim", due: "2019-01-01", status: "ongoing" },
                { id: 1, title: "Design a new dashboard", person: "hong", due: "2019-01-01", status: "complete" },
                { id: 2, title: "Design a new thumnail", person: "dong", due: "2019-01-01", status: "complete" },
                { id: 3, title: "Design a new database", person: "choi", due: "2019-01-01", status: "overdue" },
            ]
        }
    },
    methods: {
        sortBy(prop){
            this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
        }
    }
}
</script>

<style>

.project.complete {
    border-left: 4px solid #3cd1c2;
}
.project.ongoing {
    border-left: 4px solid orange;
}
.project.overdue {
    border-left: 4px solid tomato;
}
.v-chip.complete {
    background: #3cd1c2;
}
.v-chip.ongoing {
    background: #ffaa2c;
}
.v-chip.overdue {
    background: #f83e70;
}

</style>
