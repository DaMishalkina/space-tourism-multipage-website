<script lang="ts">
    import {marked} from "marked";
    import {onMount} from "svelte";

    export let data;
    console.log(data);
    let content = data?.page?.data?.attributes?.text;
    onMount(async () => {
        content = marked.parse(data?.page?.data?.attributes?.text);
    });
</script>

<main class="main">

    <section class="content-section">
        <p>{data?.page?.data?.attributes?.tagline}</p>
        <h1>{data?.page?.data?.attributes?.title}</h1>
        <div>
            {@html content}
        </div>
    </section>
</main>