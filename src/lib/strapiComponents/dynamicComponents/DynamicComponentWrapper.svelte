<script lang="ts">
    import BulletedSlider from "$lib/strapiComponents/dynamicComponents/BulletedSlider/BulletedSlider.svelte";
    import type {StrapiObjectType} from "../../types";
    type dynamicComponentType = {
        id: string,
        __component: string,
        [key: string]: StrapiObjectType | string
    }
    type ComponentMap = {
        [key: string]: any; // Consider using a specific type for Svelte components if available
    };

    export let dynamicComponentData: dynamicComponentType;
    const componentMapping: ComponentMap = {
        "slider.slider": BulletedSlider
    }
</script>

<svelte:component this={componentMapping[dynamicComponentData["__component"]]} data={dynamicComponentData["Slide"]} />