<template>
    <div>
        <my-component
                title="Component 1"
                :button-text="buttonText"
        ></my-component>
    </div>
</template>

<script>
import MyComponent from './BaseComponent.vue';

export default {
    components: {
        MyComponent,
    },
    data() {
        return {
            buttonText: 'Increment',
        };
    },
};
</script>
