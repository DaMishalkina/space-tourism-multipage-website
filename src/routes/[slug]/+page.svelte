<script lang="ts">
    import { browser } from '$app/environment';
    import {setStrapiBackgroundImages} from "$lib/utils/setStrapiBackgroundImages";
    import Slider from "$lib/components/BulletedSlider/Slider.svelte";
    import type {StrapiObjectType} from "../../lib/types";
    import type {SlidesType} from "../../lib/types";
    import {sharedHeaders} from "$lib/stores/headers";

    export let data;
    console.log(data)
    const strapiURL = import.meta.env.VITE_STRAPI_URL;
    let bgImagesUrls: {[key: string]: string};
    let slidersData: SlidesType;
    let titleIndex = 0;
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

        $sharedHeaders.map((header, index) => {
            if(header[data?.page?.data[0]?.attributes?.slug]){
                titleIndex = index;
            }
        })

    }

</script>

<main class="main">
    {#if data?.page?.data[0]}
        <section class="main__content">
            <h1 class="main-title main__title">
                <span class="main-title__index">{"0"+ titleIndex}</span>
                {data?.page?.data[0]?.attributes?.title}
            </h1>
            {#if slidersData}
                <Slider slides={slidersData} />
            {/if}
        </section>
    {/if}
</main>

<style>
    .main__content {
        display: flex;
        flex-direction: column;
        color: #fff;
        align-items: center;
        gap: 32px;
        flex: 1;
        padding: 0 24px 24px 24px;
    }
    .main {
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
    .main-title {
        font-family: "Barlow Condensed", serif;
        font-size: 16px;
        letter-spacing: 2.7px;
        text-transform: uppercase;
    }
    .main-title__index {
        margin-right: 16px;
        opacity: 25%;
    }

    @media (min-width: 768px) {
        .main__content {
            gap: 60px;
            align-items: start;
            padding: 40px 24px 0 38px;
        }

    }
    @media (min-width: 1440px) {

    }
</style>