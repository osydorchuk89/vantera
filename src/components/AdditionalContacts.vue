<script setup lang="ts">
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import { contactText } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";

const language = useLanguage();
</script>

<template>
    <div class="add-contact-container">
        <div class="social-icons">
            <a href="https://www.instagram.com/vantera_s.r.o/" target="_blank"><InstagramIcon /></a>
            <a href="https://t.me/Max918273645" target="_blank"><TelegramIcon /></a>
            <a href="https://www.facebook.com/Vantera.s.r.o/" target="_blank"><FacebookIcon /></a>
        </div>
        <div>
            <p class="hours-text" v-for="item in contactText.workingHours" :key="item.en">
                {{ language === "en" ? item.en : item.cz }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.add-contact-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 166px;
}

.social-icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.hours-text {
    font-size: 18px;
    line-height: 23px;
}

@media (min-width: 430px) {
    .add-contact-container {
        min-width: 166px;
    }
}
</style>
