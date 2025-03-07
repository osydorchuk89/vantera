<script setup lang="ts">
import HeroCard from "@/components/HeroCard.vue";

const props = defineProps({ imageUrl: String });
const backgroundImageUrl = `url(${props.imageUrl})`;
</script>

<template>
    <div class="hero-section">
        <HeroCard />
        <div class="upper-rect"></div>
        <div class="lower-rect"></div>
    </div>
</template>

<style scoped>
.hero-section {
    position: relative;
    background-image: v-bind("backgroundImageUrl");
    background-position: center;
    background-size: cover;
    height: 925px;
    width: 100%;
}
.upper-rect {
    position: absolute;
    top: 145px;
    left: 880px;
    width: 169px;
    height: 247px;
    border: 3px solid var(--yellow);
}
.lower-rect {
    position: absolute;
    bottom: 160px;
    right: 271px;
    width: 895px;
    height: 299px;
    border: 3px solid var(--yellow);
}
</style>
