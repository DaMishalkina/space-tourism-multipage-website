<script lang="ts">
    import { browser } from '$app/environment';
    import {setStrapiBackgroundImages} from "$lib/utils/setStrapiBackgroundImages";
    import Slider from "$lib/components/BulletedSlider/Slider.svelte";
    import type {StrapiObjectType} from "../../lib/types";
    import type {SlidesType} from "../../lib/types";

    export let data;

    const strapiURL = import.meta.env.VITE_STRAPI_URL;
    let bgImagesUrls: {[key: string]: string};
    let slidersData: SlidesType;
    const setSliderData = (slides: StrapiObjectType[]) => {
        return slides?.map((slide: StrapiObjectType) => {
           const imageSrc = strapiURL + ((slide["Image"] as StrapiObjectType)?.data as StrapiObjectType[])[0]?.attributes?.url;
           const imageAlt = ((slide["Image"] as StrapiObjectType)?.data as StrapiObjectType[])[0]?.attributes?.alternativeText;
           const image = {
               src: imageSrc,
               alt: imageAlt
           }
           return {
               text: slide.Text,
               title: slide.Title,
               tagline: slide.Tagline,
               image: image
           }
        })
    }
    $: {
        bgImagesUrls = setStrapiBackgroundImages(strapiURL, data?.page?.data[0]);
        if(browser){
            document.body.style.setProperty("--bg-image", `url('${bgImagesUrls.bgImageMobile}')`);
            document.body.style.setProperty("--bg-image--md", `url('${bgImagesUrls.bgImageTablet}')`);
            document.body.style.setProperty("--bg-image--lg", `url('${bgImagesUrls.bgImageDesktop}')`);
        }
        slidersData = setSliderData(data?.page?.data[0]?.attributes["Content"][0]["Slide"]) as SlidesType;

    }
</script>

<main>
    <h1>{data?.page?.data[0]?.attributes?.title}</h1>
    {#if slidersData}
        <Slider slides={slidersData} />
    {/if}
</main>

<style>

    @media (min-width: 768px) {

    }
    @media (min-width: 1440px) {

    }
</style>