<script setup lang="ts">
import { useTemplateRef } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps<{
    onClose: () => void;
    dialogClass: string;
    justifyContent?: string;
}>();

const target = useTemplateRef<HTMLElement>("target");
onClickOutside(target, () => props.onClose());
</script>

<template>
    <div class="backdrop">
        <div :class="props.dialogClass" ref="target">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.backdrop {
    position: fixed;
    display: flex;
    justify-content: v-bind("props.justifyContent || 'center'");
    align-items: center;
    z-index: 6;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
}

.drawer-menu,
.question-dialog-content,
.success-dialog-content {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    z-index: 7;
}

.question-dialog-content,
.success-dialog-content {
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 0 16px;
    gap: 40px;
}

.drawer-menu {
    justify-content: start;
    align-items: flex-end;
    max-width: 535px;
    gap: 80px;
    background-color: var(--green);
    padding: 136px 32px 32px 16px;
}

@media (min-width: 640px) {
    .question-dialog-content,
    .success-dialog-content {
        height: auto;
        padding: 80px;
    }
}

@media (min-width: 768px) {
    .question-dialog-content,
    .success-dialog-content {
        height: auto;
        padding: 120px;
    }
}

@media (min-width: 1024px) {
    .question-dialog-content,
    .success-dialog-content {
        width: auto;
        padding: 200px;
    }
}
</style>
