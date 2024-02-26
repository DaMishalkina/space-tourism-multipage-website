<script lang="ts">
    export let tagline = "", title = "", text = "", image: {src: string, alt: string} | undefined = undefined;

</script>

<li class="slide">
    {#if tagline || title || text}
        <div class="slide__text-container">
            {#if title || tagline}
                <div class="slide__titles">
                    {#if tagline}
                        <span class="slide__tagline">{tagline}</span>
                    {/if}
                    {#if title}
                        <h3 class="slide__title">{title}</h3>
                    {/if}
                </div>
            {/if}
            {#if text}
                <p class="slide__text">{text}</p>
            {/if}
        </div>
    {/if}
    {#if image}
        <div class="slide__image-container">
            <img
                    class="slide__image"
                    src={image.src}
                    alt={image.alt}
            />
        </div>
    {/if}
</li>

<style>
    .slide {
        flex-shrink: 0;
        display: flex;
        flex-direction: column-reverse;
        gap: 74px;
        align-items: center;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        justify-content: start;
    }
    .slide__text-container {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 16px;
    }
    .slide__tagline {
        font-family: "Bellefair",serif;
        text-transform: uppercase;
        color: var(--title-color);
        opacity: 50%;
    }
    .slide__text {
        max-width: 458px;
    }
    .slide__titles {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .slide__image-container {
        display: flex;
        justify-content: center;
        width: 100%;
        border-bottom: 1px solid #383B4B;
        box-sizing: border-box;
    }
    .slide__image {
        height: 222px;
        width: auto;
    }
    @media (min-width: 768px) {
        .slide {
            flex-direction: column;
            gap: 90px;
            padding: 0;
        }
        .slide__tagline {
            font-size: 24px;
        }
        .slide__image-container {
            border-bottom: none;
            flex: 1;
            align-items: end;
        }
        .slide__image {
            height: 572px;
        }
    }
    @media (min-width: 1440px) {
        .slide {
            flex-direction: row;
            gap: 80px;
        }
        .slide__text-container {
            gap: 27px;
            text-align: unset;
        }
        .slide__titles {
            gap: 15px;
        }
        .slide__title {
            white-space: nowrap;
        }
        .slide__image {
            height: 654px;
        }

    }
</style>