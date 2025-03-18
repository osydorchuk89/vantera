<script setup lang="ts">
import type { Component } from 'vue';

const props = defineProps<{
    icon: Component;
    title?: string;
    description: string;
}>();
</script>

<template>
    <component :is="props.icon" />
    <div class="item-text">
        <h3 class="item-title">
            {{ title }}
        </h3>
        <p class="item-description">
            {{ description }}
        </p>
    </div>
</template>

<style scoped>
.item-text {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.item-title {
    font-size: 24px;
    line-height: 31px;
    font-weight: 500;
}

.item-description {
    font-size: 18px;
    line-height: 23px;
}

@media (min-width: 640px) {
    .item-text {
        gap: 12px;
    }
}
</style>
