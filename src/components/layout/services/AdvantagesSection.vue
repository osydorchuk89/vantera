<script setup lang="ts">
import { useLanguage } from "@/hooks/useLanguage";
import { servicesAdvantagesText } from "@/lib/data";
import NumberedItem from "@/components/NumberedItem.vue";

const language = useLanguage();
</script>

<template>
    <div class="advantages-container section-container">
        <div class="advantages-text">
            <h2 class="section-title">
                {{
                    language === "en"
                        ? servicesAdvantagesText.title.en
                        : servicesAdvantagesText.title.cz
                }}
            </h2>
            <ul class="advantage-list">
                <li
                    class="advantage-item"
                    v-for="item in servicesAdvantagesText.advantages"
                    :key="item.description.en"
                >
                    <NumberedItem
                        :icon="item.icon"
                        :description="language === 'en' ? item.description.en : item.description.cz"
                    />
                </li>
            </ul>
        </div>
        <div class="rects">
            <div class="upper-rect"></div>
            <div class="mid-rect"></div>
            <div class="bottom-rect"></div>
        </div>
    </div>
</template>

<style scoped>
.advantages-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: var(--grey);
    color: white;
}

.advantages-text {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.advantage-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    list-style: none;
}

.advantage-item {
    display: flex;
    flex-direction: row;
    gap: 16px;
}

.rects {
    position: relative;
    height: 160px;
}

.upper-rect {
    position: absolute;
    top: 0;
    right: 35px;
    width: 235px;
    height: 96px;
    border: 3px solid var(--green);
}

.mid-rect {
    position: absolute;
    bottom: 20px;
    right: -16px;
    width: 102px;
    height: 98px;
    border: 3px solid var(--green);
    z-index: 1;
}

.bottom-rect {
    position: absolute;
    right: -16px;
    bottom: 0;
    width: 146px;
    height: 40px;
    background-color: var(--yellow);
}

@media (min-width: 640px) {
    .advantages-container {
        flex-direction: row;
        justify-content: space-between;
    }

    .rects {
        width: 30%;
        height: 387px;
    }

    .upper-rect {
        left: 0;
        width: 235px;
        height: 192px;
    }

    .mid-rect {
        right: -40px;
        bottom: 40px;
        width: 90%;
        height: 195px;
    }

    .bottom-rect {
        right: -40px;
        width: 100%;
        height: 80px;
    }
}

@media (min-width: 768px) {
    .rects {
        width: 50%;
    }

    .mid-rect {
        right: -120px;
    }

    .bottom-rect {
        right: -120px;
    }
}
</style>
