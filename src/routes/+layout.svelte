<script lang="ts">
    import {base} from "$app/paths";
    import {sharedHeaders} from "$lib/stores/headers";
    import Header from "$lib/components/Header.svelte";
    import NavigationBar from "$lib/components/Naviagation/NavigationBar.svelte";
    import NavigationList from "$lib/components/Naviagation/NavigationList.svelte";
    import type {StrapiObjectType} from "../lib/types";

    export let data;
    let headers: {[key: string]: string}[] = [{"home": ""}];
    $: {
        data?.slugs?.data.map((slugPage: StrapiObjectType) => {
            const header: { [key: string]: string } = {};
            header[slugPage?.attributes?.slug as string] = slugPage?.attributes?.slug as string;
            headers.push(header);
        })
        $sharedHeaders = headers
    }
</script>

<svelte:head>
    <link rel="stylesheet" href={base +`/styles/global.css`} />
</svelte:head>
{#if data?.slugs}
    <Header>
        <NavigationBar>
            <NavigationList navItems={$sharedHeaders} />
        </NavigationBar>
    </Header>
{/if}
<slot />