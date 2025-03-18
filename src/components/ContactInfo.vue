<script setup lang="ts">
import MailIcon from "./icons/MailIcon.vue";
import PhoneIcon from "./icons/PhoneIcon.vue";
import PinIcon from "./icons/PinIcon.vue";

const props = defineProps<{
    iconFill?: string;
}>();
</script>

<template>
    <ul class="info-container">
        <li class="info-item">
            <PhoneIcon :fill="props.iconFill" />
            <p class="info-text">+420 775 515 551</p>
        </li>
        <li class="info-item">
            <MailIcon :fill="props.iconFill" />
            <p class="info-text">info@vantera.cz</p>
        </li>
        <li class="info-item">
            <PinIcon :fill="props.iconFill" />
            <p class="info-text">Na Folimance 2155/15, 120 00 Praha, Vinohrady</p>
        </li>
    </ul>
</template>

<style scoped>
.info-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.info-item {
    display: flex;
    flex-direction: row;
    gap: 16px;
}

.info-text {
    font-size: 18px;
    line-height: 23px;
}

svg {
    color: white;
}

@media (min-width: 1024px) {
    .info-container {
        width: 80%;
    }
}
</style>
