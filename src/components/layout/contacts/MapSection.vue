<script setup lang="ts">
import { GoogleMap, AdvancedMarker, InfoWindow } from "vue3-google-map";

const center = { lat: 50.066105, lng: 14.433592 };
const markerOptions = { position: center, title: "Vantera" };
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;
</script>

<template>
    <div class="map-container">
        <GoogleMap class="map" :api-key="apiKey" :mapId="mapId" :center="center" :zoom="15">
            <AdvancedMarker :options="markerOptions">
                <InfoWindow>
                    <div class="info-window">
                        <h2 class="info-title">Vantera</h2>
                        <p>Na Folimance 2155/15, 120 00 Praha, Vinohrady</p>
                    </div>
                </InfoWindow>
            </AdvancedMarker>
        </GoogleMap>
    </div>
</template>

<style scoped>
.map-container {
    height: 525px;
}

.map {
    height: 100%;
    width: 100%;
}

.info-title {
    text-align: center;
}

.info-window {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 12px;
}

@media (min-width: 640px) {
    .map-container {
        height: 810px;
    }
}

@media (min-width: 1280px) {
    .map-container {
        height: 672px;
    }
}
</style>
