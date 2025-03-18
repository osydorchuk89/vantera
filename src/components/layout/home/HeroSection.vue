<script setup lang="ts">
import { heroCardText } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";
import HeroCard from "../../HeroCard.vue";

const language = useLanguage();
</script>

<template>
    <div class="hero-container">
        <HeroCard
            homePage
            :title="language === 'en' ? heroCardText.title.en : heroCardText.title.cz"
            :description="
                language === 'en' ? heroCardText.description.en : heroCardText.description.cz
            "
        />
        <div class="upper-rect"></div>
        <div class="lower-rect"></div>
    </div>
</template>

<style scoped>
.hero-container {
    position: relative;
    background-image: url("../../../assets/images/hero-image.png");
    background-position: center;
    background-size: cover;
    height: 852px;
    width: 100%;
    padding-top: 80px;
}

.upper-rect {
    display: none;
    position: absolute;
    border: 3px solid var(--yellow);
}
.lower-rect {
    position: absolute;
    right: 0;
    bottom: 233px;
    width: 207px;
    height: 182px;
    border: 3px solid var(--yellow);
}

@media (min-width: 640px) {
    .hero-container {
        height: 1114px;
        padding-top: 120px;
    }
    .lower-rect {
        right: 43px;
        bottom: 447px;
        width: 517px;
        height: 182px;
    }
}
@media (min-width: 1024px) {
    .hero-container {
        height: 925px;
        padding-top: 225px;
    }
    .lower-rect {
        right: 271px;
        bottom: 160px;
        width: 895px;
        height: 299px;
    }
}

@media (min-width: 1280px) {
    .upper-rect {
        display: block;
        top: 145px;
        left: 880px;
        width: 169px;
        height: 247px;
    }
}
</style>
