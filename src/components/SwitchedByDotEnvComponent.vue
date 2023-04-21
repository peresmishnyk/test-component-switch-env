<template>
    <div>
        <component :is="componentName"></component>
    </div>
</template>

<script>
import Component1 from './Component1.vue';
import Component2 from './Component2.vue';
import HelloWorld from "./HelloWorld.vue";

export default {
    computed: {
        componentName() {
            switch (process.env.TEMPLATE) {
                case 'type1':
                    return Component1;
                case 'type2':
                    return Component2;
                default:
                    return HelloWorld;
            }
        },
    },
};
</script>
