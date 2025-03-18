import { storeToRefs, type StoreDefinition } from "pinia";
import { watch } from "vue";

export const useDialog = (useDialogStore: StoreDefinition) => {
    const dialogStore = useDialogStore();
    const { dialogOpen } = storeToRefs(dialogStore);
    watch(dialogOpen, (newValue) => {
        document.body.style.overflow = newValue ? "hidden" : "auto";
    });

    return { dialogStore };
};
