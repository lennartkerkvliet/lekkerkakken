<style lang="scss" scoped>
    .container {

        text-align: center;
        margin: 1rem 0;

        .emoji {
            font-family: -apple-system;
            font-size: 10em;
        }
    }
</style>

<template>
    <div class="container">
        <div class="emoji" v-if="status">💩</div>
        <div class="emoji" v-else>✨🚽</div>
    </div>
</template>

<script>
    export default {
        async asyncData({ params, $axios }) {
            return await $axios.$get('/api/v1')
        }
    }
</script>