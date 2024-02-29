<script lang="ts">
    import type {SlidesType} from "../../../types";
    import type {StrapiObjectType} from "../../../types";
    import {setStrapiSlideData} from "$lib/utils/setStrapiSlideData";
    import Slide from "./Slide.svelte";

    const strapiURL = import.meta.env.VITE_STRAPI_URL;
    export let data: StrapiObjectType[];
    let slides: SlidesType;
    $: {
        slides = setStrapiSlideData(strapiURL, data) as SlidesType;
        console.log(slides)
    }
</script>

<div class="numeric-slider">
    <div class="numeric-slider__slides-container">
        <ul class="numeric-slider__slides">
            {#each slides as slide, i(i)}
               <Slide
                       tagline={slide.tagline}
                       title={slide.title}
                       text={slide.text}
                       image={slide.image}
               />
            {/each}
        </ul>
    </div>
</div>

<style>
    .numeric-slider {
        position: relative;
        box-sizing: border-box;
        width: 100vw;
        height: 100%;
        overflow: hidden;
        z-index: 1;
    }
    .numeric-slider__slides-container {

    }

    .numeric-slider__slides {
    }
</style>