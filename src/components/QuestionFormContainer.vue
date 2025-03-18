<script setup lang="ts">
import QuestionForm from "@/components/QuestionForm.vue";
</script>

<template>
    <div class="form-subsection">
        <QuestionForm button-position="flex-start" class="question-form" />
        <div class="outlined-rect" />
    </div>
</template>

<style scoped>
.outlined-rect {
    display: none;
}

@media (min-width: 768px) {
    .question-form {
        width: 70%;
    }

    .form-subsection {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 24px;
    }

    .outlined-rect {
        display: block;
        flex: 1;
        height: 175px;
        border: 3px solid var(--green);
        margin-top: 75px;
    }
}

@media (min-width: 1024px) {
    .question-form {
        width: 60%;
    }
}

@media (min-width: 1280px) {
    .form-subsection {
        gap: 92px;
    }
}
</style>
