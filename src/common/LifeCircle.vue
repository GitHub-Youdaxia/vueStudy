<template>
    <div>
        <fieldset class="fieldset">
            <legend>demo</legend>
            <div class="fieldContent">

            </div>
        </fieldset>
    </div>

</template>
<script>
    export default {
        name: 'LifeCirlce',
        props: {
            // msg: String
        },
        data() {
            return {
                beforeCreate: '',
                created: '',
                beforeMount: '',
                mounted: '',
                beforeUpdate: '',
                updated: '',
                activated: '',
                deactivated: '',
                beforeDestroy: '',
                destroyed: '',
                errorCaptured: '',
            }
        },
        beforeCreate: function () {
            console.log('beforeCreate', 'this.$el', this.$el)

        },
        created: function () {
            console.log('created', 'this.$el', this.$el)
        },
        beforeMount: function () {
            console.log('beforeMount', 'this.$el', this.$el)
        },
        mounted: function () {
            console.log('mounted', 'this.$el', this.$el)
        },
        beforeUpdate: function () {
            console.log('beforeUpdate')
        },
        updated: function () {
            console.log('updated')
        },
        activated: function () {
            console.log('activated')
        },
        deactivated: function () {
            console.log('deactivated')
        },
        beforeDestroy: function () {
            console.log('beforeDestroy')
        },
        destroyed: function () {
            console.log('destroyed')
        },
        errorCaptured: function () {
            console.log('errorCaptured')
        },
    }
</script>
<style>
</style>