<template>
    <div class="page__header">
        <div class="page__title">
            {{title}}
        </div>
        <div class="page__button">
            <slot name="buttonContent"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-header",
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page__header {
        display: flex;
        width: 100%;
        height: 48px;
        border-bottom: 1px solid #D9D9D9;
        .page__title {
            line-height: 24px;
            font-size: 18px;
            font-weight: bold;
            color: #262626;
            padding: 12px 15px;
        }
        .page__button {
            flex: 1;
            padding: 8px 15px;
            text-align: right;
        }
    }
</style>