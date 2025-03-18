import { useLanguageStore } from "@/stores/store";
import { storeToRefs } from "pinia";

export const useLanguage = () => {
    const languageStore = useLanguageStore();
    const { language } = storeToRefs(languageStore);
    return language;
};
