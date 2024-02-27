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

<div>
    <div>
        <ul>
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