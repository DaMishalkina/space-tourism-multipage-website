<script lang="ts">
    import {marked} from "marked";
    import {onMount} from "svelte";
    import ExploreButton from "$lib/components/ExploreButton.svelte";
    import NavigationBar from "$lib/components/Naviagation/NavigationBar.svelte";
    import NavigationList from "$lib/components/Naviagation/NavigationList.svelte";
    import Header from "$lib/components/Header.svelte";

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

    const navigationLinks = ["home", "destination", "crew", "technology"];


</script>

<main class="main">
    {#if bgImages}
        <picture class="main__picture">
                <source
                    srcset={bgImages.desktop}
                    media="(min-width: 1440px)"
                />
                <source
                    srcset={bgImages.tablet}
                    media="(min-width: 768px)"
                />
                <img
                    class="main__image"
                    src={bgImages.mobile}
                    alt="Background with Earth"
                />
            </picture>

    {/if}
    <section class="main__content-section">
        <Header>
            <NavigationBar>
                <NavigationList navItems={navigationLinks} />
            </NavigationBar>
        </Header>
        <h5>{data?.page?.data?.attributes?.tagline}</h5>
        <h1>{data?.page?.data?.attributes?.title}</h1>
        <div>
            {@html content}
        </div>
        <ExploreButton />
    </section>
</main>

<style>
    :global(body){
        font-family: "Barlow Condensed", sans-serif;
        margin: 0;
        max-height: fit-content;
    }

    :global(h1, h2, h3, h4, h5){
        font-family: "Bellefair", serif;
        font-weight: 400;
        font-style: normal;
        padding: 0;
        margin: 0;
        color: var(--title-color);
        text-transform: uppercase;
    }
    :global(p){
        padding: 0;
        margin: 0;
        color: var(--title-color);
        font-size: 16px;
    }
    :global(h1){
        font-size: 80px;
    }
    :global(h2){
        font-size: 56px;
    }
    :global(h3){
        font-size: 24px;
    }
    :global(h4){
        font-size: 16px;
    }
    :global(h5){
        font-size: 16px;
        letter-spacing: 2.7px;
        color: var(--text-color);
    }
    :global(button){
        cursor: pointer;
    }
    :global(a){
        text-decoration: none;
        padding: 0;
        margin: 0;
        color: var(--title-color);
    }
    :global(ul){
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .main__content-section {
        display: flex;
        flex-direction: column;
        color: #fff;
    }
    .main {
        position: relative;
        height: 100dvh;
        max-height: 100dvh;
    }
    .main__picture {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .main__image {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 768px) {
        :global(h1){
            font-size: 150px;
        }
        :global(h2){
            font-size: 80px;
        }
        :global(h3){
            font-size: 40px;
        }
        :global(h4){
            font-size: 24px;
        }
        :global(h5){
            font-size: 20px;
            letter-spacing: 3.38px;
        }

    }

    @media (min-width: 1440px) {
        :global(h2){
            font-size: 100px;
        }
        :global(h3){
            font-size: 56px;
        }
        :global(h4){
            font-size: 32px;
        }
        :global(h5){
            font-size: 28px;
            letter-spacing: 4.74px;
        }
        :global(p){
            font-size: 18px;
        }
    }

</style>