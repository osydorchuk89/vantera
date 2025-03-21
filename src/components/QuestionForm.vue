<script setup lang="ts">
import { ref } from "vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

import { useLanguage } from "@/hooks/useLanguage";
import { questionText } from "@/lib/data";
import { useValidation } from "@/hooks/useValidation";
import { useQuestionDialogStore, useSuccessDialogStore } from "@/stores/store";
import BaseButton from "./BaseButton.vue";
import { sendEmail } from "@/lib/requests";

const props = defineProps<{
    buttonPosition: string;
}>();

const language = useLanguage();

const nameInput = ref("");
const phoneInput = ref("");

const { nameError, phoneError, validateForm } = useValidation();

const successDialogStore = useSuccessDialogStore();
const questionDialogStore = useQuestionDialogStore();

const submitForm = () => {
    validateForm(nameInput.value, phoneInput.value);
    if (nameError.visible || phoneError.visible) {
        return;
    }
    sendEmail(nameInput.value, phoneInput.value);
    nameInput.value = "";
    phoneInput.value = "";
    questionDialogStore.closeDialog();
    successDialogStore.openDialog();
};
</script>

<template>
    <form class="form-container" @submit.prevent="submitForm">
        <div class="form-text">
            <h2 class="section-title">
                {{ language === "en" ? questionText.title.en : questionText.title.cz }}
            </h2>
            <p class="form-description">
                {{ language === "en" ? questionText.description.en : questionText.description.cz }}
            </p>
        </div>
        <div class="form-inputs">
            <div class="input-container">
                <input
                    class="form-input"
                    :class="{ 'input-error': nameError.visible }"
                    type="text"
                    name="name"
                    :placeholder="language === 'en' ? 'Name' : 'Jmeno'"
                    v-model.trim="nameInput"
                    @focus="nameError.visible = false"
                />
                <p class="error-message" v-if="nameError.visible">{{ nameError.message }}</p>
            </div>
            <div class="input-container">
                <vue-tel-input
                    name="phone"
                    v-model="phoneInput"
                    defaultCountry="cz"
                    validCharactersOnly
                    :inputOptions="{
                        placeholder: language === 'en' ? 'Phone number' : 'Telefonní číslo',
                    }"
                    @focus="phoneError.visible = false"
                />
                <p class="error-message" v-if="phoneError.visible">{{ phoneError.message }}</p>
            </div>
        </div>
        <BaseButton
            class="form-button"
            :text="language === 'en' ? 'Call me back' : 'Zavolejte mi zpět'"
            background-color="transparent"
            border-style="3px solid var(--green)"
        />
    </form>
</template>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.form-text {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.form-description {
    font-size: 18px;
    line-height: 23px;
}

.form-button {
    align-self: v-bind("props.buttonPosition");
}

@media (min-width: 640px) {
    .form-description {
        font-size: 24px;
        line-height: 31px;
    }
}
</style>
