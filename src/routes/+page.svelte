<script lang="ts">
    import {marked} from "marked";
    import {onMount} from "svelte";

    export let data;
    const strapiURL = import.meta.env.VITE_STRAPI_URL
    let bgImages: { [key: string]: string };
    console.log(data);
    let content = data?.page?.data?.attributes?.text;
    onMount(async () => {
        content = marked.parse(data?.page?.data?.attributes?.text);
        bgImages = Object.fromEntries(data?.page?.data?.attributes?.image?.data?.map((image: {[key: string]: {[key: string]: string | number}}) => {
            let res;
            switch (image?.attributes?.width){
                case 375:
                    res = ["mobile", `${strapiURL}${image?.attributes?.url}`];
                    break;
                case 768:
                    res = ["tablet", `${strapiURL}${image?.attributes?.url}`];
                    break;
                default:
                    res = ["desktop", `${strapiURL}${image?.attributes?.url}`];
                    break;
            }
            return res;
        }))
    });


</script>

<main class="main">
    {#if bgImages}
        <picture class="action-section__picture">
                <source
                    srcset={bgImages.desktop}
                    media="(min-width: 1200px)"
                />
                <source
                    srcset={bgImages.tablet}
                    media="(min-width: 768px)"
                />
                <img
                    class="action-section__image"
                    src={bgImages.mobile}
                    alt="Background with Earth"
                />
            </picture>

    {/if}
    <section class="content-section">
        <p>{data?.page?.data?.attributes?.tagline}</p>
        <h1>{data?.page?.data?.attributes?.title}</h1>
        <div>
            {@html content}
        </div>
    </section>
</main>

<style>
    .content-section {
        display: flex;
        flex-direction: column;
    }
</style>