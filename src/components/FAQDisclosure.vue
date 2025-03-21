<script setup lang="ts">
import { useLanguage } from "@/hooks/useLanguage";
import { faqText } from "@/lib/data";
import DownIcon from "./icons/DownIcon.vue";

const language = useLanguage();
</script>

<template>
    <div class="disclosure-container">
        <h2 class="section-title">{{ language === "en" ? faqText.title.en : faqText.title.cz }}</h2>
        <ul class="faq-list">
            <li class="item-container" v-for="item in faqText.items" :key="item.question.en">
                <details>
                    <summary>
                        {{ language === "en" ? item.question.en : item.question.cz }}
                        <DownIcon />
                    </summary>
                    <p class="answer">
                        {{ language === "en" ? item.answer.en : item.answer.cz }}
                    </p>
                </details>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.disclosure-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.faq-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
}

.item-container:not(:hover) details:not([open]) {
    border: 1px solid var(--green);
}

.item-container:hover,
details[open] {
    box-shadow: 0 0 0 3px var(--green);
}

details summary {
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
    list-style: none;
}

details summary::-webkit-details-marker {
    display: none;
}

details summary svg {
    transition: transform 0.3s ease;
}

details[open] summary svg {
    transform: rotate(180deg);
}

summary {
    font-size: 18px;
    line-height: 23px;
    cursor: pointer;
}

.answer {
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    padding: 0 16px 16px 16px;
}
</style>
