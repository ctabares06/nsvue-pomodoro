<template>
  <Page @loaded="loadTaks">
      <StackLayout>
        <button @tap="$navigateBack" />
        <label :text="getName" />
        <label :text="getDuration" />
        <label :text="getIntervals" />
        <label :text="getRests" />
        <label :text="getNroIntervals" />
      </StackLayout>
  </Page>
</template>

<script>
import { getTask } from '~/services/Task';

export default {
    props: ['id'],
    data: () => ({
        id: null,
        name: null,
        duration: null,
        intervals: null,
        rests: null,
        numberIntervals: null,
    }),
    computed: {
        getId() {
            return this.id ?? "";
        },
        getName() {
            return this.name ?? "";
        },
        getDuration() {
            return this.duration ?? "";
        },
        getIntervals() {
            return this.intervals ?? "";
        },
        getRests() {
            return this.rests ?? "";
        },
        getNroIntervals() {
            return this.numberIntervals ?? "";
        },
    },
    methods: {
      loadTask() {
        getTask(this.props.id).then(task => {
          this.id = task.id;
          this.name = task.name;
          this.intervals = task.intervals;
          this.duration = task.duration;
          this.rests = task.rests;
          this.numberIntervals = task.numberIntervals;
        })
      }
    }
}
</script>