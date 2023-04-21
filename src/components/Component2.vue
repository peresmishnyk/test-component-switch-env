<template>
    <div>
        <my-component
                title="Component 2"
                button-text="Add"
        ></my-component>
    </div>
</template>

<script>
import MyComponent from './BaseComponent.vue';

export default {
    components: {
        MyComponent,
    },
};
</script>
