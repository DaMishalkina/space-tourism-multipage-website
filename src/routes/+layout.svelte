<script lang="ts">
    import {base} from "$app/paths";
    export let data
    console.log(data)
</script>

<svelte:head>
    <link rel="stylesheet" href={base +`/styles/StylesVariables.css`} />
</svelte:head>
<slot />