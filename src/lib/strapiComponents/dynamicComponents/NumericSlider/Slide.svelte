<script lang="ts">
    import type {ImageType} from "../../../types";
    import Image from "$lib/components/Image.svelte";
    export let tagline = "", title = "", text = "", image: ImageType | undefined = undefined;

</script>

<li class="numeric-slide">
    <div class="numeric-slide__text-container">
        {#if tagline || title}
            <div class="numeric-slide__title-container">
                {#if tagline}
                    <span class="numeric-slide__tagline">{tagline}</span>
                {/if}
                {#if title}
                    <h3 class="numeric-slide__title">{title}</h3>
                {/if}
            </div>
        {/if}
        {#if text}
            <p class="numeric-slide__text">{text}</p>
        {/if}
    </div>
    {#if image}
        <div class="numeric-slide__image-container">
            <Image image={image} className="numeric-slide__image" />
        </div>
    {/if}
</li>

<style>
    .numeric-slide {
        display: flex;
        flex-direction: column-reverse;
        gap: 100px;
    }
    .numeric-slide__text-container {
        padding: 0 24px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;

    }
    .numeric-slide__title-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
    }
    .numeric-slide__tagline {
        color: var(--text-color);
        letter-spacing: 2.36px;
    }
    .numeric-slide__text {
        text-align: center;
    }
    .numeric-slide__image-container {
        display: flex;
    }
    :global(.numeric-slide__image) {
        width: 100vw;
        min-height: 170px;
        height: auto;
    }
</style>
