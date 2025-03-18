<script setup lang="ts">
import { useQuestionDialogStore } from "@/stores/store";
import BaseDialog from "./BaseDialog.vue";
import QuestionForm from "./QuestionForm.vue";
import CloseIcon from "./icons/CloseIcon.vue";
import { useDialog } from "@/hooks/useDialog";

const { dialogStore } = useDialog(useQuestionDialogStore);
</script>

<template>
    <BaseDialog :onClose="dialogStore.closeDialog" dialog-class="question-dialog-content">
        <CloseIcon class="dialog-close-icon" @click="dialogStore.closeDialog" />
        <QuestionForm button-position="center"/>
    </BaseDialog>
</template>

<style scoped></style>
