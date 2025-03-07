<script setup lang="ts">
import MoreButton from "./MoreButton.vue";
</script>

<template>
    <div class="card">
        <h2>Build homes and commercial facilities with quality assurance</h2>
        <p>
            We build durable and environmentally friendly buildings, control quality at every stage and offer flexible, modern solutions for comfortable
            accommodation.
        </p>
        <MoreButton />
    </div>
</template>

<style scoped>
.card {
    position: absolute;
    z-index: 1;
    top: 225px;
    background: linear-gradient(to right, var(--yellow), rgba(255, 195, 0, 0));
    backdrop-filter: blur(22px);
    width: 1009px;
    height: 460px;
    padding-left: 120px;
    padding-right: 96px;
    padding-top: 80px;
}
h2 {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    margin-bottom: 16px;
}
p {
    font-size: 24px;
    padding-right: 100px;
    line-height: 31px;
    margin-bottom: 40px;
}
</style>
