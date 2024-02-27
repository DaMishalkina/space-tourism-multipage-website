<script lang="ts">
    import {setStrapiBackgroundImages} from "$lib/utils/setStrapiBackgroundImages";
    import {sharedHeaders} from "$lib/stores/headers";
    import DynamicComponentWrapper from "$lib/strapiComponents/dynamicComponents/DynamicComponentWrapper.svelte";

    export let data;
    console.log(data)
    const strapiURL = import.meta.env.VITE_STRAPI_URL;
    let titleIndex = 0;
    $: {
        setStrapiBackgroundImages(strapiURL, data?.page?.data[0]);

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
            {#if data?.page?.data[0]?.attributes?.title}
                <h1 class="main-title main__title">
                    <span class="main-title__index">{"0"+ titleIndex}</span>
                    {data?.page?.data[0]?.attributes?.title}
                </h1>
            {/if}
            {#if data?.page?.data[0]?.attributes["Content"]}
                {#each data?.page?.data[0]?.attributes["Content"] as component, i(i)}
                        <DynamicComponentWrapper dynamicComponentData={component} />
                {/each}
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