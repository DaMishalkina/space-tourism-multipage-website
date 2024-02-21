<script lang="ts">
    import { browser } from '$app/environment';
    import {setStrapiBackgroundImages} from "$lib/utils/setStrapiBackgroundImages";
    export let data;

    const strapiURL = import.meta.env.VITE_STRAPI_URL;
    let bgImagesUrls: {[key: string]: string};
    $: {
        bgImagesUrls = setStrapiBackgroundImages(strapiURL, data?.page?.data[0]);
        if(browser){
            document.body.style.setProperty("--bg-image", `url('${bgImagesUrls.bgImageMobile}')`);
            document.body.style.setProperty("--bg-image--md", `url('${bgImagesUrls.bgImageTablet}')`);
            document.body.style.setProperty("--bg-image--lg", `url('${bgImagesUrls.bgImageDesktop}')`);
        }
    }
</script>

<main>
    <h1>{data?.page?.data[0]?.attributes?.title}</h1>
</main>

<style>

    @media (min-width: 768px) {

    }
    @media (min-width: 1440px) {

    }
</style>