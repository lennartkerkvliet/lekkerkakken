<style lang="scss" scoped>
    h1 {
        font-size: 10em;
    }
</style>

<template>
    <b-container class="text-center my-5">
        <h1 v-if="status">💩</h1>
        <h1 v-else>✨🚽</h1>
    </b-container>
</template>

<script>
    export default {
        async asyncData({ params, $axios }) {
            return await $axios.$get('/api/v1')
        },
    }
</script>