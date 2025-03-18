<script setup lang="ts">
import HeroCard from "@/components/HeroCard.vue";
import { useLanguage } from "@/hooks/useLanguage";
import { portfolioHeroCardText } from "@/lib/data";

const language = useLanguage();
</script>

<template>
    <div class="hero-container">
        <HeroCard
            :title="
                language === 'en' ? portfolioHeroCardText.title.en : portfolioHeroCardText.title.cz
            "
            :description="
                language === 'en'
                    ? portfolioHeroCardText.description.en
                    : portfolioHeroCardText.description.cz
            "
        />
        <div class="upper-rect" />
        <div class="lower-rect" />
    </div>
    <div class="hero-appendix">
        <p class="appendix-text">
            {{
                language === "en"
                    ? portfolioHeroCardText.appendix.en
                    : portfolioHeroCardText.appendix.cz
            }}
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
    background-image: url("../../../assets/images/village.png");
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

.upper-rect,
.lower-rect {
    display: none;
}

@media (min-width: 640px) {
    .hero-container {
        height: 892px;
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
        right: -32px;
        bottom: 110px;
        width: 80%;
        height: 299px;
        border: 3px solid var(--yellow);
    }

    .lower-rect {
        display: block;
        position: absolute;
        right: -32px;
        bottom: 38px;
        width: 33%;
        height: 167px;
        border: 3px solid var(--yellow);
    }
}

@media (min-width: 1280px) {
    .hero-container {
        height: 704px;
        padding-top: 105px;
    }

    .hero-appendix {
        padding: 80px 120px;
    }

    .upper-rect {
        right: 0;
        bottom: 258px;
        width: 66%;
    }

    .lower-rect {
        right: 203px;
        bottom: 186px;
        width: 20%;
    }
}
</style>
