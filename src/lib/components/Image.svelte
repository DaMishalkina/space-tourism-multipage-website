<script lang="ts">
    import type {ImageType} from "../types";

    export let className = "", image: ImageType;

</script>

<picture>
    <source
            srcset={image.srcSet.urlDesktop}
            media="(min-width: 1200px)"
    />
    <source
            srcset={image.srcSet.urlTablet}
            media="(min-width: 768px)"
    />
    <img
            src={image.srcSet.urlMobile || image.srcSet.urlTablet || image.srcSet.urlDesktop}
            alt={image.alt}
            class={className}
    />
</picture>