<script lang="ts">
    import type {SlidesType} from "../../types";
    import Slide from "./Slide.svelte";

    export let slides: SlidesType

</script>


<div class="slider">
    <div class="slider__container">
        <ul>
            {#each slides as slide, i(i)}
                <Slide
                        tagline={slide.tagline}
                        title={slide.title}
                        text={slide.text}
                        image={slide.image}
                />
            {/each}
        </ul>
    </div>
</div>


