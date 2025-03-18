<script setup lang="ts">
import { useLanguage } from "@/hooks/useLanguage";
import { servicesServicesText } from "@/lib/data";
import { useWindowSize } from "@vueuse/core";

const language = useLanguage();

const { width } = useWindowSize();
</script>

<template>
    <div class="services-container section-container">
        <h2 class="section-title"></h2>
        <ul class="service-list">
            <li
                :class="index % 2 !== 0 || width < 768 ? 'service-item-reversed' : 'service-item'"
                v-for="(serviceItem, index) in servicesServicesText.services"
                :key="serviceItem.title.en"
            >
                <div
                    :class="
                        index % 2 !== 0 || width < 768 ? 'service-card-reversed' : 'service-card'
                    "
                >
                    <h3 class="card-title">
                        {{ language === "en" ? serviceItem.title.en : serviceItem.title.cz }}
                    </h3>
                    <ul class="description-list">
                        <li
                            class="description-item"
                            v-for="item in serviceItem.description"
                            :key="item.en"
                        >
                            {{ language === "en" ? item.en : item.cz }}
                        </li>
                    </ul>
                </div>
                <img class="service-image" :src="serviceItem.image" alt="Service image" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
.services-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.service-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    list-style: none;
}

.service-item,
.service-item-reversed {
    position: relative;
    height: 260px;
}

.service-card,
.service-card-reversed {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    inset: 0;
    margin: auto -16px;
    padding: 0 16px;
    width: calc(100% + 32px);
    height: 188px;
    background: linear-gradient(90deg, #ffc300 60%, rgba(255, 195, 0, 0) 100%);
}

.card-title {
    font-size: 22px;
    line-height: 28px;
    font-weight: 500;
}

.description-list {
    list-style-type: disc;
    list-style-position: outside;
    padding-left: 16px;
}

.description-item {
    font-size: 18px;
    line-height: 23px;
}

.service-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

@media (min-width: 768px) {
    .services-container {
        gap: 40px;
    }

    .service-list {
        gap: 40px;
    }

    .service-item {
        height: 406px;
        display: flex;
        justify-content: flex-end;
    }

    .service-item-reversed {
        height: 406px;
        display: flex;
        justify-content: flex-start;
    }

    .service-card {
        width: 664px;
        height: 246px;
        padding: 0 200px 0 40px;
        margin: auto auto auto -40px;
    }

    .service-card-reversed {
        width: 664px;
        height: 246px;
        padding: 0 40px 0 200px;
        margin: auto -40px auto auto;
        background: linear-gradient(270deg, #ffc300 60%, rgba(255, 195, 0, 0) 100%);
    }

    .service-image {
        width: 624px;
    }
}

@media (min-width: 1280px) {
    .service-item,
    .service-item-reversed {
        height: 445px;
    }

    .service-card,
    .service-card-reversed {
        width: 710px;
        height: 285px;
    }

    .service-card {
        padding: 0 200px 0 120px;
        margin: auto auto auto -120px;
    }

    .service-card-reversed {
        padding: 0 120px 0 200px;
        margin: auto -120px auto auto;
    }

    .service-image {
        width: 793px;
    }
}
</style>
