import { reactive } from "vue";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";

import { useLanguage } from "@/hooks/useLanguage";
import { formErrors } from "@/lib/data";

export function useValidation() {
    const language = useLanguage();

    const nameError = reactive({ visible: false, message: "" });
    const phoneError = reactive({ visible: false, message: "" });
    const emailError = reactive({ visible: false, message: "" });
    const serviceError = reactive({ visible: false, message: "" });

    const regex = /[^a-zA-Z]/;

    const validateForm = (name: string, phone: string, email?: string, service?: string) => {
        // Name validation
        if (!name) {
            nameError.visible = true;
            nameError.message =
                language.value === "en" ? formErrors.nameBlank.en : formErrors.nameBlank.cz;
        } else if (regex.test(name)) {
            nameError.visible = true;
            nameError.message =
                language.value === "en" ? formErrors.nameInvalid.en : formErrors.nameInvalid.cz;
        } else {
            nameError.visible = false;
        }

        // Phone validation
        if (!phone) {
            phoneError.visible = true;
            phoneError.message =
                language.value === "en" ? formErrors.phoneBlank.en : formErrors.phoneBlank.cz;
        } else if (!isMobilePhone(phone)) {
            phoneError.visible = true;
            phoneError.message =
                language.value === "en" ? formErrors.phoneInvalid.en : formErrors.phoneInvalid.cz;
        } else {
            phoneError.visible = false;
        }

        // Email validation (optional)
        if (typeof email !== "undefined") {
            if (!email) {
                emailError.visible = true;
                emailError.message =
                    language.value === "en" ? formErrors.emailBlank.en : formErrors.emailBlank.cz;
            } else if (!isEmail(email)) {
                emailError.visible = true;
                emailError.message =
                    language.value === "en"
                        ? formErrors.emailInvalid.en
                        : formErrors.emailInvalid.cz;
            } else {
                emailError.visible = false;
            }
        }

        // Service validation (optional)
        if (typeof service !== "undefined") {
            if (service === "Type of services" || service === "Typ služby") {
                serviceError.visible = true;
                serviceError.message =
                    language.value === "en"
                        ? formErrors.serviceNotSelected.en
                        : formErrors.serviceNotSelected.cz;
            }
        }
    };

    return { nameError, phoneError, emailError, serviceError, validateForm };
}
