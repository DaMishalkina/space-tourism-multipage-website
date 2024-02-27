<script lang="ts">
    import {marked} from "marked";
    import {onMount} from "svelte";
    import ExploreButton from "$lib/components/ExploreButton.svelte";
    import {setStrapiBackgroundImages} from "$lib/utils/setStrapiBackgroundImages";

    export let data;
    const strapiURL = import.meta.env.VITE_STRAPI_URL;
    let content = data?.page?.data?.attributes?.text;
    // let bgImagesUrls: {[key: string]: string};
    $: {
        setStrapiBackgroundImages(strapiURL, data?.page?.data);
        // if(browser){
        //     document.body.style.setProperty("--bg-image", `url('${bgImagesUrls.imageMobile}')`);
        //     document.body.style.setProperty("--bg-image--md", `url('${bgImagesUrls.imageTablet}')`);
        //     document.body.style.setProperty("--bg-image--lg", `url('${bgImagesUrls.imageDesktop}')`);
        // }

    }
    onMount(async () => {
        content = marked.parse(data?.page?.data?.attributes?.text);
    });

</script>


<main class="main">
    {#if data?.page}
        <section class="main__content-section">
            <h5 class="main__tagline">{data?.page?.data?.attributes?.tagline}</h5>
            <h1 class="main__title">{data?.page?.data?.attributes?.title}</h1>
            <div class="main__text">
                {@html content}
            </div>
        </section>
        <ExploreButton title={data?.page?.data?.attributes?.button_label} />
    {/if}
</main>

<style>
    .main__content-section {
        display: flex;
        flex-direction: column;
        color: #fff;
        align-items: center;
        gap: 16px;
    }
    .main {
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 24px 24px 48px 24px;
    }
    .main > :global(button) {
        margin: auto auto 0 auto;
    }
    .main__text {
        text-align: center;
        max-width: 444px;
    }

    @media (min-width: 768px) {
        .main {
            padding: 106px 24px 90px 24px;
            gap: 24px;
        }
        .main__content-section {
            gap: 24px;
        }

    }

    @media (min-width: 1440px) {
        .main {
            flex-direction: row;
            padding: 24px 165px 165px 165px;
            align-items: center;
            justify-content: space-between;
            margin: auto auto;
            max-width: 100%;
            width: 100%;
            flex: unset;
            box-sizing: border-box;

        }
        .main > :global(button){
            margin: auto 0 0 0;
        }
        .main__content-section {
            align-items: unset;
        }
        .main__text {
            text-align: unset;
        }
    }

</style>