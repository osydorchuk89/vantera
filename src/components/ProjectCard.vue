<script setup lang="ts">
import { computed } from "vue";
import LeftIcon from "./icons/LeftIcon.vue";
import RightIcon from "./icons/RightIcon.vue";
import { useWindowSize } from "@vueuse/core";

const props = defineProps<{
    title: string;
    period: string;
    description: string;
    image: string;
    reversed: boolean;
}>();

const { width } = useWindowSize();
const cardStyle = computed(() => {
    if (width.value < 1024) {
        return "card-content";
    } else {
        return props.reversed ? "card-content-reversed" : "card-content";
    }
});
</script>

<template>
    <li class="card-container">
        <div :class="cardStyle">
            <h3 class="card-title">{{ props.title }}</h3>
            <p class="card-period">{{ props.period }}</p>
            <p class="card-description">{{ props.description }}</p>
        </div>
        <div class="card-images">
            <img class="card-image" :src="props.image" alt="Picture of a house" />
            <img class="card-image" :src="props.image" alt="Picture of a house" />
        </div>
        <div class="image-carousel">
            <LeftIcon class="button-left" />
            <img class="card-image" :src="props.image" alt="Picture of a house" />
            <RightIcon class="button-right" />
        </div>
    </li>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
}

.card-content {
    display: flex;
    flex-direction: column;
    padding: 32px 16px;
    margin: 0 -16px -24px -16px;
    background: linear-gradient(90deg, #ffc300 60%, rgba(255, 195, 0, 0) 100%);
    z-index: 1;
}

.card-title {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 4px;
}

.card-period {
    font-size: 16px;
    color: var(--grey);
    margin-bottom: 16px;
}

.card-description {
    font-size: 16px;
    line-height: 20px;
}

.card-images {
    display: flex;
    flex-direction: row;
    gap: 16px;
    overflow-x: auto;
    scrollbar-color: var(--yellow) transparent;
}

.card-image {
    width: 350px;
    height: auto;
}

.image-carousel {
    display: none;
}

@media (min-width: 640px) {
    .card-content {
        padding: 40px;
        margin: 0 0 -24px 0;
    }

    .card-title {
        font-size: 24px;
    }

    .card-description {
        font-size: 18px;
    }

    .card-image {
        width: 450px;
    }
}

@media (min-width: 1024px) {
    .card-container {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .card-content {
        padding: 40px 220px 40px 40px;
        margin: 0 -180px 0 0;
        order: 0;
    }

    .card-content-reversed {
        padding: 40px 40px 40px 220px;
        margin: 0 0 0 -180px;
        align-items: end;
        background: linear-gradient(270deg, #ffc300 60%, rgba(255, 195, 0, 0) 100%);
        z-index: 1;
        order: 2;
    }

    .card-content-reversed .card-description {
        text-align: right;
    }

    .card-images {
        display: none;
    }

    .card-image {
        width: 635px;
        height: 355px;
        object-fit: cover;
        object-position: center;
    }

    .image-carousel {
        display: block;
        position: relative;
        order: 1;
    }

    .button-left {
        position: absolute;
        bottom: 24px;
        left: 24px;
        cursor: pointer;
    }

    .button-right {
        position: absolute;
        bottom: 24px;
        right: 24px;
        cursor: pointer;
    }
}

@media (min-width: 1280px) {
    .card-content {
        padding: 68px 220px 68px 40px;
    }

    .card-image {
        width: 793px;
        height: 445px;
    }
}

@media (min-width: 1536px) {
    .card-image {
        width: 992px;
        height: 556px;
    }
}
</style>
