import { ref } from "vue";
import { defineStore } from "pinia";

export const useDrawerStore = defineStore("drawer", () => {
    const drawerOpen = ref(false);

    const closeDrawer = () => {
        drawerOpen.value = false;
    };

    const openDrawer = () => {
        drawerOpen.value = true;
    };

    return { drawerOpen, closeDrawer, openDrawer };
});

export const useQuestionDialogStore = defineStore("questionDialog", () => {
    const dialogOpen = ref(false);

    const closeDialog = () => {
        dialogOpen.value = false;
    };

    const openDialog = () => {
        dialogOpen.value = true;
    };

    return { dialogOpen, closeDialog, openDialog };
});

export const useSuccessDialogStore = defineStore("successDialog", () => {
    const dialogOpen = ref(false);

    const closeDialog = () => {
        dialogOpen.value = false;
    };

    const openDialog = () => {
        dialogOpen.value = true;
    };

    return { dialogOpen, closeDialog, openDialog };
});

export const useLanguageStore = defineStore("language", () => {
    const language = ref("en");

    const changeLanguage = () => {
        language.value === "en" ? (language.value = "cz") : (language.value = "en");
    };

    return { language, changeLanguage };
});
