<script lang="ts">
    import type {ImageType} from "../../../types";
    import Image from "$lib/components/Image.svelte";
    export let tagline = "", title = "", text = "", image: ImageType | undefined = undefined;

</script>

<li>
    {#if image}
        <Image image={image} />
    {/if}
</li>
