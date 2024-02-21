<script lang="ts">
    import {base} from "$app/paths";
    import {sharedHeaders} from "$lib/stores/headers";
    import Header from "$lib/components/Header.svelte";
    import NavigationBar from "$lib/components/Naviagation/NavigationBar.svelte";
    import NavigationList from "$lib/components/Naviagation/NavigationList.svelte";

    // const receivedHeaders = getContext("headers");
    console.log($sharedHeaders)
</script>

<svelte:head>
    <link rel="stylesheet" href={base +`/styles/StylesVariables.css`} />
</svelte:head>
<Header>
    <NavigationBar>
        <NavigationList navItems={$sharedHeaders} />
    </NavigationBar>
</Header>
<slot />