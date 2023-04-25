<template>
    <div>
        <component :is="componentName"></component>
    </div>
</template>

<script>
import Component1 from './Menu/Component1.vue';
import Component2 from './Menu/Component2.vue';
import HelloWorld from "./Menu/HelloWorld.vue";
import ComponentE from "./Menu/ComponentE.vue";
import MenuForDolboyob from "./Menu/MenuForDolboyob.vue";

export default {
    computed: {
        componentName() {
            switch (process.env.TEMPLATE) {
                case 'type1':
                    return Component1;
                case 'type2':
                    return Component2;
                case 'typeE':
                    return ComponentE;
                case 'dolboyob':
                    return MenuForDolboyob;
                default:
                    return HelloWorld;
            }
        },
    },
};
</script>
