<script setup lang="ts">
import { useSuccessDialogStore } from "@/stores/store";
import BaseDialog from "./BaseDialog.vue";
import CloseIcon from "./icons/CloseIcon.vue";
import BaseButton from "./BaseButton.vue";
import { useLanguage } from "@/hooks/useLanguage";
import { successText } from "@/lib/data";
import { useDialog } from "@/hooks/useDialog";

const language = useLanguage();

const { dialogStore } = useDialog(useSuccessDialogStore);
</script>

<template>
    <BaseDialog :onClose="dialogStore.closeDialog" dialog-class="success-dialog-content">
        <CloseIcon class="dialog-close-icon" @click="dialogStore.closeDialog" />
        <div class="dialog-text">
            <h2 class="section-title">
                {{ language === "en" ? successText.title.en : successText.title.cz }}
            </h2>
            <p class="dialog-description">
                {{ language === "en" ? successText.description.en : successText.description.cz }}
            </p>
        </div>
        <BaseButton
            class="form-button"
            :text="language === 'en' ? 'Back' : 'Zpět'"
            background-color="transparent"
            border-style="3px solid var(--green)"
            @click="dialogStore.closeDialog"
        />
    </BaseDialog>
</template>

<style scoped>
.dialog-text {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.dialog-description {
    font-size: 18px;
    line-height: 23px;
}

@media (min-width: 640px) {
    .success-dialog-description {
        font-size: 24px;
        line-height: 31px;
    }
}
</style>
