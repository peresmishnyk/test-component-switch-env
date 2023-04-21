<template>
    <div>
        <h1>{{ title }}</h1>
        <button @click="incrementCounter">{{ buttonText }}</button>
        <p>Counter: {{ counter }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        buttonText: {
            type: String,
            default: 'Click me',
        },
    },
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        incrementCounter() {
            this.counter++;
        },
    },
};
</script>
