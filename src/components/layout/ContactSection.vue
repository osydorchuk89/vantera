<script setup lang="ts">
import ContactForm from "@/components/ContactForm.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import { useLanguage } from "@/hooks/useLanguage";
import { contactText } from "@/lib/data";

const language = useLanguage();
</script>

<template>
    <div class="contact-container section-container">
        <h2 class="section-title">
            {{ language === "en" ? contactText.title.en : contactText.title.cz }}
        </h2>
        <div class="contact-content">
            <ContactForm />
            <ContactInfo />
        </div>
        <div class="outlined-rect" />
        <div class="solid-rect" />
    </div>
</template>

<style scoped>
.contact-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.contact-content {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.outlined-rect {
    position: absolute;
    right: 0;
    bottom: 137px;
    height: 40px;
    width: 200px;
    max-width: 40%;
    border: 3px solid var(--green);
}

.solid-rect {
    position: absolute;
    right: 0;
    bottom: 161px;
    height: 40px;
    width: 150px;
    max-width: 30%;
    background-color: var(--yellow);
}

@media (min-width: 640px) {
    .contact-content {
        flex-direction: row;
        justify-content: space-between;
        gap: 24px;
    }

    .outlined-rect {
        bottom: 100px;
        height: 48px;
        width: 405px;
    }

    .solid-rect {
        bottom: 80px;
        width: 275px;
    }
}

@media (min-width: 1024px) {
    .contact-content {
        gap: 120px;
    }
}

@media (min-width: 1280px) {
    .outlined-rect {
        bottom: 140px;
        height: 80px;
        width: 100%;
    }

    .solid-rect {
        bottom: 120px;
        width: 507px;
    }
}
</style>
