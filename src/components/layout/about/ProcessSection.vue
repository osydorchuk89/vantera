<script setup lang="ts">
import NumberedItem from "@/components/NumberedItem.vue";
import { useLanguage } from "@/hooks/useLanguage";
import { aboutProcessText } from "@/lib/data";

const language = useLanguage();
</script>

<template>
    <div class="process-container section-container">
        <div class="process-text">
            <h2 class="section-title">
                {{ language === "en" ? aboutProcessText.title.en : aboutProcessText.title.cz }}
            </h2>
            <p class="process-description">
                {{
                    language === "en"
                        ? aboutProcessText.description.en
                        : aboutProcessText.description.cz
                }}
            </p>
        </div>
        <ul class="process-timeline">
            <li
                class="process-stage"
                v-for="stage in aboutProcessText.stages"
                :key="stage.title.en"
            >
                <NumberedItem
                    :icon="stage.icon"
                    :title="language === 'en' ? stage.title.en : stage.title.cz"
                    :description="language === 'en' ? stage.description.en : stage.description.cz"
                />
            </li>
        </ul>
    </div>
</template>

<style scoped>
.process-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: var(--grey);
    color: white;
}

.process-text {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.process-description {
    font-size: 20px;
    line-height: 26px;
}

.process-timeline {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    row-gap: 32px;
}

.process-stage {
    display: flex;
    flex-direction: row;
    gap: 16px;
}

@media (min-width: 640px) {
    .process-container {
        gap: 48px;
    }

    .process-text {
        gap: 12px;
    }

    .process-description {
        font-size: 24px;
        line-height: 31px;
    }

    .process-timeline {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        row-gap: 74px;
        column-gap: 24px;
    }

    .process-stage {
        flex-direction: column;
        gap: 24px;
    }
}

@media (min-width: 1280px) {
    .process-timeline {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(1, 1fr);
    }
}
</style>
