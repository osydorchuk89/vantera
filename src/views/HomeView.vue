<script setup lang="ts">
import HeroSection from "@/components/layout/HeroSection.vue";
import heroImageSrc from "@/assets/hero-image.png";
import TheFeatures from "@/components/layout/TheFeatures.vue";
</script>

<template>
    <main>
        <HeroSection :image-url="heroImageSrc" />
        <TheFeatures />
    </main>
</template>
