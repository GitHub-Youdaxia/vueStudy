<template>
    <div>
        <component :is="componentName"></component>
    </div>
</template>

<script>
    export default {
        name: "template",
        props:['componentName'],
        components: {},
        data() {
            return {
                // componentName: '',
            }
        },
        computed: {

        },
        methods: {

        },
        created: function () {

        },
        mounted: function () {},
    }
</script>
<style scoped>
</style>