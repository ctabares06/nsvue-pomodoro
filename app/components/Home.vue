<template>
    <Page @loaded="loadTasks">
        <ActionBar title="tasks2" />
        <ListView heigth="100%" v-for="item in tasks">
            <v-template>
                <GridLayout
                    height="280"
                    borderRadius="10"
                    class="bg-secondary"
                    rows="*, auto, auto"
                    columns="*"
                    margin="5 10"
                    padding="0"
                >
                    <Label 
                        row="0"
                        margin="5 5 5 5"
                        fontWeight="700"
                        class="text-primary"
                        fontSize="18"
                        :text="item.name"
                    />
                    <Label 
                        row="1"
                        margin="5 5 5 5"
                        fontWeight="700"
                        class="text-secondary"
                        fontSize="12"
                        :text="item.duration"
                    />
                </GridLayout>
            </v-template>
        </ListView>
    </Page>
</template>

<script>
import { getTasks } from '../services/Task';
  export default {
    data() {
        return {
            tasks: []
        };
    },
    methods: {
        loadTasks() {
            getTasks().then(results => {
                this.tasks = results;
            })
        }
    }
};
</script>

<style scoped lang="scss">
</style>
