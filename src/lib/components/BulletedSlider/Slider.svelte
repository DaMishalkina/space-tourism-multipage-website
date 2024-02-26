<script lang="ts">
    import type {SlidesType} from "../../types";
    import Slide from "./Slide.svelte";

    export let slides: SlidesType
    let sliderTransformationIndex = 0;


</script>


<div class="slider">
    <ul  class="slider__radio-buttons">
        {#each slides as slide, i(i)}
            <li class="slider-button slider__radio-button">
                <label
                        class="slider-button__input-wrapper"
                        class:active={sliderTransformationIndex === i}
                >
                    <input
                            class="slider-button__hidden-input"
                            value={i}
                            type="checkbox"
                            id={slide.title}
                            on:change={() => sliderTransformationIndex = i}
                    />
                </label>
            </li>
        {/each}
    </ul>
    <div class="slider__container">
        <ul
                class="slider__slides"
                style={`transform: translateX(${-sliderTransformationIndex*100}%)`}
        >
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

<style>
    .slider {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1;
    }
    .slider__container {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .slider__slides {
        display: flex;
        transition: transform 0.5s ease-in-out;
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*right: 0;*/
        /*bottom: 0;*/
    }
    .slider__radio-buttons {
        position: absolute;
        top:50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, calc(50% + 16px));
        display: flex;
        gap: 16px;
    }
    .slider-button__input-wrapper {
        display: flex;
        width: 10px;
        height: 10px;
        position: relative;
        border-radius: 100%;
        background: var(--title-color);
        opacity: 17.44%;
        cursor: pointer;
    }
    .slider-button__hidden-input {
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        right: 0;
        display: none;
    }
    .slider-button__input-wrapper:hover {
        opacity: 50%;

    }
    .slider-button__input-wrapper:active, .slider-button__input-wrapper.active {
        opacity: 100%;
    }
</style>


