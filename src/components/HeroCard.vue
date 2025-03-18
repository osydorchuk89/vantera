<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useQuestionDialogStore } from "@/stores/store";
import { useLanguage } from "@/hooks/useLanguage";
import BaseButton from "./BaseButton.vue";
import { watch } from "vue";

const props = defineProps<{
    title: string;
    homePage?: boolean;
    description?: string;
    bullets?: boolean;
    bulletList?: { en: string; cz: string }[];
}>();

const language = useLanguage();

const questionDialogStore = useQuestionDialogStore();
const { dialogOpen } = storeToRefs(questionDialogStore);

watch(dialogOpen, (newValue) => {
    document.body.style.overflow = newValue ? "hidden" : "auto";
});
</script>

<template>
    <div class="card-container">
        <div class="card-content">
            <h2 :class="homePage ? 'card-title' : 'section-title'">
                {{ props.title }}
            </h2>
            <ul v-if="bullets" class="description-list">
                <li class="description-item" v-for="item in bulletList" :key="item.en">
                    {{ language === "en" ? item.en : item.cz }}
                </li>
            </ul>
            <p v-else :class="homePage ? 'card-description' : 'section-description'">
                {{ props.description }}
            </p>
        </div>
        <BaseButton
            :text="language === 'en' ? 'More information' : 'Více informací'"
            background-color="var(--green)"
            border-style="none"
            @click="questionDialogStore.openDialog"
        />
    </div>
</template>

<style scoped>
.card-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
    background: linear-gradient(90deg, #ffc300 60%, rgba(255, 195, 0, 0) 100%);
    backdrop-filter: blur(22px);
    width: 100%;
    max-width: 1009px;
    height: 480px;
    padding: 80px 16px;
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.card-title {
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 12px;
}

.card-description {
    font-size: 18px;
    line-height: 23px;
}

.description-list {
    list-style-position: inside;
}

.description-item {
    font-size: 18px;
    line-height: 23px;
}

@media (min-width: 360px) {
    .card-description {
        font-size: 20px;
        line-height: 26px;
    }
}

@media (min-width: 640px) {
    .card-container {
        padding: 80px 100px 80px 40px;
    }

    .card-content {
        gap: 16px;
    }

    .card-title {
        font-size: 36px;
        line-height: 46px;
    }

    .card-description {
        padding-right: 100px;
        margin-bottom: 32px;
    }
}

@media (min-width: 1024px) {
    .card-container {
        padding: 80px 96px 80px 40px;
    }

    .card-title {
        font-size: 40px;
        line-height: 52px;
        margin-bottom: 16px;
    }

    .card-description {
        font-size: 24px;
        line-height: 31px;
        margin-bottom: 40px;
    }
}

@media (min-width: 1280px) {
    .card-container {
        padding: 80px 96px 80px 120px;
    }
}
</style>
