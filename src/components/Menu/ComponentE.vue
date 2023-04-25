<template>
    <div>
        <h1>{{ title }}</h1>
        <button @click="incrementCounter">{{ buttonText }}</button>
        <p>Counter: {{ counter }}</p>
    </div>
</template>

<script>
import BaseComponent from "./BaseComponent.vue";

// See https://vuejs.org/api/options-composition.html for vue 3
// See https://v2.vuejs.org/v2/guide/mixins.html#Option-Merging for vue 2
export default {
    extends: BaseComponent,
    data() {
        return {
            counter: 100,
        };
    },
    methods: {
        incrementCounter() {
            this.counter = this.counter + 3;
            console.log('I am ComponentE.vue with counter: ' + this.counter);
            this.internalMethod();
        },
    },
};
</script>
