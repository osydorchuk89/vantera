<script setup lang="ts">
import { useLanguage } from "@/hooks/useLanguage";
import { featuresText } from "@/lib/data";

const language = useLanguage();
</script>

<template>
    <div class="features-container section-container">
        <div class="features">
            <h2 class="section-title">
                {{ language === "en" ? featuresText.title.en : featuresText.title.cz }}
            </h2>
            <ul class="features-content">
                <li
                    class="feature"
                    v-for="feature in featuresText.features"
                    :key="feature.title.en"
                >
                    <h3 class="feature-title">
                        {{ language === "en" ? feature.title.en : feature.title.cz }}
                    </h3>
                    <p class="feature-description">
                        {{ language === "en" ? feature.description.en : feature.description.cz }}
                    </p>
                </li>
            </ul>
        </div>
        <img src="../../../assets/images/construction-site.png" alt="A construction site" />
    </div>
</template>

<style scoped>
.features-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: var(--grey);
    color: white;
}

.features {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.features-content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    row-gap: 16px;
}

.feature {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.feature-title {
    font-size: 22px;
    font-weight: 500;
}

.feture-description {
    font-size: 18px;
    line-height: 23px;
}

img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
}

@media (min-width: 640px) {
    .features-content {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 24px;
    }

    .feature {
        gap: 12px;
    }

    .feature-title {
        font-size: 24px;
    }
}
@media (min-width: 1280px) {
    .features-container {
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
    }

    .features {
        gap: 40px;
        height: 430px;
    }

    .features-content {
        grid-row-gap: 24px;
        grid-column-gap: 80px;
    }

    img {
        width: 40%;
    }
}
</style>
