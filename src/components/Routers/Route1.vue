<template>
    <div>
        Router.vue
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
    export default {
        name: "demo",
        components: {},        
        data() {
            return {
                msg:'',
            }
        },
        computed:{

        },
        methods: {

        },        
        created: function () {
            this.msg=JSON.stringify(this.$route.query)
        },
        mounted: function () {},
    }
</script>
<style scoped>
</style>