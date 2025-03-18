<script setup lang="ts">
import HeroCard from "@/components/HeroCard.vue";
import { useLanguage } from "@/hooks/useLanguage";
import { aboutHeroCardText } from "@/lib/data";

const language = useLanguage();
</script>

<template>
    <div class="hero-container">
        <HeroCard
            :title="language === 'en' ? aboutHeroCardText.title.en : aboutHeroCardText.title.cz"
            :description="
                language === 'en'
                    ? aboutHeroCardText.description.en
                    : aboutHeroCardText.description.cz
            "
        />
        <div class="rect" />
    </div>
    <div class="hero-appendix">
        <p class="appendix-text">
            {{ language === "en" ? aboutHeroCardText.appendix.en : aboutHeroCardText.appendix.cz }}
        </p>
    </div>
</template>

<style scoped>
.hero-container {
    position: relative;
    height: 696px;
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
    background-image: url("../../../assets/images/construction.png");
    background-position: center;
    background-size: cover;
    filter: grayscale(1);
    z-index: -1;
}

.hero-appendix {
    background-color: var(--grey);
    padding: 40px 16px;
}

.appendix-text {
    color: white;
    font-size: 18px;
    line-height: 23px;
}

.rect {
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
}

@media (min-width: 1280px) {
    .hero-container {
        height: 704px;
        padding-top: 160px;
    }

    .hero-appendix {
        padding: 80px 120px;
    }

    .rect {
        display: block;
        border: 3px solid var(--yellow);
        width: 667px;
        height: 299px;
        position: absolute;
        top: 123px;
        right: 425px;
    }
}
</style>
