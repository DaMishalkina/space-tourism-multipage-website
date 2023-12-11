<script lang="ts">
    export let data;
    console.log(data)
</script>

<main>
    <h1>{data?.page?.data[0]?.attributes?.title}</h1>
</main>

<style>
    :global(body){
        font-family: "Barlow Condensed", sans-serif;
    }
</style>