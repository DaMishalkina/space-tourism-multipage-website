<script lang="ts">
    import {marked} from "marked";
    import {onMount} from "svelte";
    import ExploreButton from "$lib/components/ExploreButton.svelte";
    import NavigationBar from "$lib/components/Naviagation/NavigationBar.svelte";
    import NavigationList from "$lib/components/Naviagation/NavigationList.svelte";
    import Header from "$lib/components/Header.svelte";

    export let data;
    console.log(data)
    const strapiURL = import.meta.env.VITE_STRAPI_URL
    let bgImageMobile = "";
    let bgImageTablet = "";
    let bgImageDesktop = "";
    let content = data?.page?.data?.attributes?.text;
    onMount(async () => {
        content = marked.parse(data?.page?.data?.attributes?.text);
       data?.page?.data?.attributes?.image?.data?.map((image: {[key: string]: {[key: string]: string | number}}) => {
            switch (image?.attributes?.width){
                case 375:
                    bgImageMobile = `${strapiURL}${image?.attributes?.url}`;
                    document.body.style.setProperty("--bg-image", `url('${bgImageMobile}')`);
                    break;
                case 768:
                    bgImageTablet =`${strapiURL}${image?.attributes?.url}`;
                    document.body.style.setProperty("--bg-image--md", `url('${bgImageTablet}')`);
                    break;
                default:
                    bgImageDesktop = `${strapiURL}${image?.attributes?.url}`;
                    document.body.style.setProperty("--bg-image--lg", `url('${bgImageDesktop}')`);
                    break;
            }
        });
    });

    const navigationLinks = ["home", "destination", "crew", "technology"];


</script>

<Header>
    <NavigationBar>
        <NavigationList navItems={navigationLinks} />
    </NavigationBar>
</Header>
<main class="main">
    <section class="main__content-section">
        <h5 class="main__tagline">{data?.page?.data?.attributes?.tagline}</h5>
        <h1 class="main__title">{data?.page?.data?.attributes?.title}</h1>
        <div class="main__text">
            {@html content}
        </div>
    </section>
    <ExploreButton title={data?.page?.data?.attributes?.button_label} />
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
        color: var(--text-color);
        font-size: 16px;
        font-weight: 300;
        line-height: 25px;
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
        font-family: "Barlow Condensed", sans-serif;
    }
    :global(button){
        cursor: pointer;
        outline: none;
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
        :global(body) {
            background-image: var(--bg-image--md);
        }
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
        .main {
            padding: 106px 24px 90px 24px;
            gap: 24px;
        }
        .main__content-section {
            gap: 24px;
        }

    }

    @media (min-width: 1440px) {
        :global(body) {
            background-image: var(--bg-image--lg);
        }
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
        .main {
            flex-direction: row;
            padding: 24px 24px 165px 24px;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 1200px;
            margin: auto auto;
           flex: unset;

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