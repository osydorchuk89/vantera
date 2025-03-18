<script setup lang="ts">
import { useLanguage } from "@/hooks/useLanguage";
import { aboutMissionText } from "@/lib/data";

const language = useLanguage();
</script>

<template>
    <div class="mission-container section-container">
        <div class="text-container">
            <div class="mission-content">
                <h2 class="section-title">
                    {{ language === "en" ? aboutMissionText.title.en : aboutMissionText.title.cz }}
                </h2>
                <p class="mission-description">
                    {{
                        language === "en"
                            ? aboutMissionText.description.en
                            : aboutMissionText.description.cz
                    }}
                </p>
            </div>
            <ul class="value-list">
                <li
                    class="value-item"
                    v-for="value in aboutMissionText.values"
                    :key="value.title.en"
                >
                    <p class="value-title">
                        {{ language === "en" ? value.title.en : value.title.cz }}
                    </p>
                    <p class="value-description">
                        {{ language === "en" ? value.description.en : value.description.cz }}
                    </p>
                </li>
                <li class="rects">
                    <div class="outlined-rect" />
                    <div class="solid-rect" />
                </li>
            </ul>
        </div>
        <div class="image-container">
            <img src="../../../assets/images/stairs.png" alt="Stairs" />
        </div>
    </div>
</template>

<style scoped>
.mission-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.text-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.mission-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.mission-description {
    font-size: 20px;
    line-height: 26px;
}

.value-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
}

.value-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.value-title {
    font-size: 22px;
    line-height: 28px;
    font-weight: 500;
}

.value-decription {
    font-size: 18px;
    line-height: 23px;
}

.rects {
    position: relative;
    height: 56px;
    margin-right: -16px;
}

.outlined-rect {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 50%;
    border: 3px solid var(--green);
}

.solid-rect {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 60%;
    width: 25%;
    background-color: var(--yellow);
}

img {
    object-fit: cover;
    height: 458px;
    width: 100%;
}

@media (min-width: 640px) {
    .mission-container {
        gap: 40px;
    }

    .mission-content {
        gap: 12px;
    }

    .mission-description {
        font-size: 24;
        line-height: 31px;
    }

    .value-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        row-gap: 24px;
        column-gap: 40px;
    }

    .value-title {
        font-size: 24px;
        line-height: 31px;
    }

    .rects {
        height: 100%;
        margin-right: -40px;
    }

    .outlined-rect {
        width: 100%;
    }

    .solid-rect {
        width: 85%;
        height: 40%;
    }
}

@media (min-width: 1280px) {
    .mission-container {
        flex-direction: row;
        gap: 56px;
    }

    .rects {
        margin-right: -56px;
    }

    .text-container {
        width: 50%;
    }

    .image-container {
        position: relative;
        align-self: stretch;
        width: 50%;
    }

    img {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 100%;
    }
}
</style>
