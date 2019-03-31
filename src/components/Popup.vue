<template>
    <v-dialog max-width="600px">
        <v-btn flat slot="activator" class="success">Add a new project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

                    <v-menu>
                        <v-text-field :value="due" slot="activator" label="Due date" prepend-icon="date_range" :rules="inputRules"></v-text-field>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>

                    <br />

                    <v-btn flat class="success mx-0 mt-3" @click="submit">Add a project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            content: "",
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 charaters'
            ]
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()){
                console.log(this.title, this.content, this.due)
            }
            
        }
    }
}
</script>

<style>

</style>
