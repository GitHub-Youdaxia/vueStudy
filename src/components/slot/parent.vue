<template>
    <div>
        <h3>主组件slotParent</h3>


        <fieldset class="fieldset">
            <legend>具名插槽</legend>
            <div class="fieldContent">
                <app-layout>
                    <h1 slot="header"> slot="header" 这里可能是一个页面标题</h1>
                    <div slot="small-header">副标题</div>
                    <p>主要内容的一个段落。</p>
                    <p>另一个主要段落。</p>
                    <p slot="footer"> slot="footer"这里有一些联系信息</p>
                </app-layout>
            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend>作用域插槽</legend>
            <div class="fieldContent">
                <app-layout2>
                    <template slot="actionScope" slot-scope="props">
                        actionScope
                        <span>hello from parent</span>
                        <span>{{ props.text }}</span>
                    </template>
                </app-layout2>
            </div>
        </fieldset>
        <fieldset class="fieldset">
            <legend> slotParent的默认插槽,传递个组件进来</legend>
            <div class="fieldContent">
                <slot></slot>
            </div>
        </fieldset>

    </div>

</template>

<script>
    import appLayout from "@/components/slot/appLayout.vue"
    import appLayout2 from "@/components/slot/appLayout2.vue"
    export default {
        name: 'slotParent',
        data() {
            return {

            }
        },
        components: {
            'app-layout': appLayout,
            'app-layout2': appLayout2
        }
    }
</script>