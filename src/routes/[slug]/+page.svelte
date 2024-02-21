<script lang="ts">
    import {onMount} from "svelte";
    import {setStrapiBackgroundImages} from "$lib/utils/setStrapiBackgroundImages";
    export let data;

    const strapiURL = import.meta.env.VITE_STRAPI_URL;
    onMount(async () => {
        // content = marked.parse(data?.page?.data?.attributes?.text);
        const bgImagesUrls = setStrapiBackgroundImages(strapiURL, data?.page?.data[0]);
        document.body.style.setProperty("--bg-image", `url('${bgImagesUrls.bgImageMobile}')`);
        document.body.style.setProperty("--bg-image--md", `url('${bgImagesUrls.bgImageTablet}')`);
        document.body.style.setProperty("--bg-image--lg", `url('${bgImagesUrls.bgImageDesktop}')`);

    });
</script>

<main>
    <h1>{data?.page?.data[0]?.attributes?.title}</h1>
</main>

<style>
    :global(body){
        font-family: "Barlow Condensed", sans-serif;
        margin: 0;
        height: 100dvh;
        max-height: 100dvh;
        background-image: var(--bg-image);
        background-size: cover;
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 768px) {
        :global(body) {
            background-image: var(--bg-image--md);
        }
    }
    @media (min-width: 1440px) {
        :global(body) {
            background-image: var(--bg-image--lg);
        }
    }
</style>