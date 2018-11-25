<template>
    <div class="jumbotron">
        <h1 class="expense">{{ title }}</h1>
        <h3 v-if="this.$props.subtitle" class="sub-title">{{ subtitle }}</h3>
    </div>
</template>

<script>
export default {
    props: ['title', 'subtitle']
}
</script>

<style>
.jumbotron {
    background-color: #85F2A0;
}
.expense {
    font-weight: 900;
    font-size: 6rem;
}
.sub-title {
    font-weight: 400;
    font-size: 1.5rem;
}
</style>
