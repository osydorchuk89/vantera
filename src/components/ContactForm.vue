<script setup lang="ts">
import { computed, ref } from "vue";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

import { useLanguage } from "@/hooks/useLanguage";
import { contactText } from "@/lib/data";
import BaseButton from "./BaseButton.vue";
import DownIcon from "./icons/DownIcon.vue";
import { useValidation } from "@/hooks/useValidation";
import { useSuccessDialogStore } from "@/stores/store";
import { sendEmail } from "@/lib/requests";

const language = useLanguage();

const nameInput = ref("");
const phoneInput = ref("");
const emailInput = ref("");

const serviceOptions = computed(() =>
    language.value === "en" ? contactText.serviceOptions.en : contactText.serviceOptions.cz,
);
const selectPlaceholder = computed(() =>
    language.value === "en" ? "Type of services" : "Typ služby",
);
const selectedInput = ref(selectPlaceholder.value);
const selectInputStyle = computed(() => {
    if (selectedInput.value === "Type of services" || selectedInput.value === "Typ služby") {
        return "select-placeholder";
    } else {
        return "selected-option";
    }
});

const { nameError, phoneError, emailError, serviceError, validateForm } = useValidation();

const successDialogStore = useSuccessDialogStore();

const submitForm = () => {
    validateForm(nameInput.value, phoneInput.value, emailInput.value, selectedInput.value);
    if (nameError.visible || phoneError.visible || emailError.visible || serviceError.visible) {
        return;
    }
    sendEmail(nameInput.value, phoneInput.value, emailInput.value, selectedInput.value);
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    selectedInput.value = selectPlaceholder.value;
    successDialogStore.openDialog();
};
</script>

<template>
    <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-inputs">
            <!-- think about outsourcing this part -->
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
            <!-- <div class="input-container">
                <input
                    class="form-input"
                    :class="{ 'input-error': phoneError.visible }"
                    type="tel"
                    name="phone"
                    :placeholder="language === 'en' ? 'Phone number' : 'Telefonní číslo'"
                    v-model.trim="phoneInput"
                    @focus="phoneError.visible = false"
                />
                <p class="error-message" v-if="phoneError.visible">{{ phoneError.message }}</p>
            </div> -->
            <!-- think abbout outsourcing this part -->
            <div class="input-container">
                <input
                    class="form-input"
                    type="text"
                    name="email"
                    placeholder="Email"
                    v-model="emailInput"
                    @focus="emailError.visible = false"
                />
                <p class="error-message" v-if="emailError.visible">{{ emailError.message }}</p>
            </div>
            <Listbox v-model="selectedInput">
                <div class="input-container">
                    <ListboxButton
                        class="form-select"
                        v-model="selectedInput"
                        @focus="serviceError.visible = false"
                    >
                        <span :class="selectInputStyle">{{ selectedInput }}</span>
                        <DownIcon />
                    </ListboxButton>
                    <ListboxOptions class="select-list">
                        <ListboxOption
                            class="select-option"
                            v-for="option in serviceOptions"
                            :key="option"
                            :value="option"
                        >
                            {{ option }}
                        </ListboxOption>
                    </ListboxOptions>
                    <p class="error-message" v-if="serviceError.visible">
                        {{ serviceError.message }}
                    </p>
                </div>
            </Listbox>
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
.contact-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;
}

.form-select {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid black;
    margin-bottom: 2px;
    cursor: pointer;
}

.form-select svg {
    transition: transform 0.3s ease;
}

.form-select[data-headlessui-state="open"] svg {
    transform: rotate(180deg);
}

.select-list {
    list-style: none;
    font-size: 18px;
    overflow-y: auto;
    position: absolute;
    z-index: 10;
    background-color: white;
    width: 100%;
    top: 32px;
}

.select-placeholder {
    color: var(--grey);
}

.selected-option {
    color: black;
}

.select-option {
    padding: 8px;
}

.select-option:hover {
    background-color: var(--green);
    cursor: pointer;
}

.form-button {
    align-self: flex-start;
}

@media (min-width: 640px) {
    .contact-form {
        gap: 40px;
        width: 80%;
    }
}

@media (min-width: 1024px) {
    .contact-form {
        width: 100%;
    }
}
</style>
