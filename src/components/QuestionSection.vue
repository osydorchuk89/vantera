<script setup lang="ts">
import FAQDisclosure from "@/components/FAQDisclosure.vue";
import QuestionFormContainer from "@/components/QuestionFormContainer.vue";

const props = defineProps<{
    isDisclosure: boolean;
}>();
</script>

<template>
    <div class="question-container section-container">
        <QuestionFormContainer />
        <FAQDisclosure v-if="props.isDisclosure" />
        <div class="solid-rect"></div>
    </div>
</template>

<style scoped>
.question-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.solid-rect {
    display: none;
}

@media (min-width: 768px) {
    .solid-rect {
        display: block;
        position: absolute;
        width: 25%;
        right: 0;
        top: 160px;
        height: 175px;
        z-index: 1;
        background-color: var(--yellow);
    }
}

@media (min-width: 1024px) {
    .solid-rect {
        width: 35%;
        top: 210px;
    }
}

@media (min-width: 1280px) {
    .solid-rect {
        width: 30%;
    }
}
</style>
