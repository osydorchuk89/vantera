<script setup lang="ts">
import HeroCard from "@/components/HeroCard.vue";
import { useLanguage } from "@/hooks/useLanguage";
import { servicesHeroCardText } from "@/lib/data";

const language = useLanguage();
</script>

<template>
    <div class="hero-container">
        <HeroCard
            :title="
                language === 'en' ? servicesHeroCardText.title.en : servicesHeroCardText.title.cz
            "
            bullets
            :bulletList="servicesHeroCardText.description"
        />
        <div class="upper-rect" />
        <div class="lower-rect" />
    </div>
</template>

<style scoped>
.hero-container {
    position: relative;
    height: 852px;
    width: 100%;
    padding-top: 80px;
}

.hero-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../../assets/images/interior.png");
    background-position: center;
    background-size: cover;
    filter: grayscale(1);
    z-index: -1;
}

.upper-rect,
.lower-rect {
    display: none;
}

@media (min-width: 640px) {
    .hero-container {
        height: 941px;
        padding-top: 120px;
    }

    .hero-appendix {
        padding: 80px 40px;
    }

    .appendix-text {
        font-size: 24px;
        line-height: 31px;
    }

    .upper-rect {
        display: block;
        position: absolute;
        right: -40px;
        top: 80px;
        width: 33%;
        height: 167px;
        border: 3px solid var(--yellow);
    }

    .lower-rect {
        display: block;
        position: absolute;
        right: -40px;
        top: 352px;
        width: 80%;
        height: 299px;
        border: 3px solid var(--yellow);
    }
}

@media (min-width: 1280px) {
    .hero-container {
        height: 925px;
        padding-top: 180px;
    }

    .hero-appendix {
        padding: 80px 120px;
    }

    .upper-rect {
        right: 387px;
        top: 103px;
        width: 20%;
    }

    .lower-rect {
        right: 0;
        top: 384px;
        width: 70%;
    }
}
</style>
