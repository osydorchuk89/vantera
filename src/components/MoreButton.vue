<script setup lang="ts">
import { useLanguage } from "@/hooks/useLanguage";

const language = useLanguage();
</script>

<template>
    <button>
        <p class="button-text">{{ language === "en" ? "More information" : "Více informací" }}</p>
    </button>
</template>

<style scoped>
button {
    background-color: var(--green);
    border: none;
    width: 100%;
    cursor: pointer;
}

.button-text {
    font-size: 18px;
}

@media (min-width: 640px) {
    button {
        width: auto;
        padding: 12px 32px;
    }
}
</style>
