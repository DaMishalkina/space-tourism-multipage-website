<script lang="ts">
    import type {SlidesType} from "../../../types";
    import Slide from "./Slide.svelte";
    import type {StrapiObjectType} from "../../../types/";
    import {setStrapiSlideData} from "$lib/utils/setStrapiSlideData";

    export let data: StrapiObjectType[];
    let slides: SlidesType;
    const strapiURL = import.meta.env.VITE_STRAPI_URL;
    $: {
        slides = setStrapiSlideData(strapiURL, data) as SlidesType;
    }
    let sliderTransformationIndex = 0;


</script>


<div class="slider">
    <ul  class="slider__checkboxes">
        {#each slides as slide, i(i)}
            <li class="slider-checkbox slider__checkbox">
                <label
                        class="slider-checkbox__input-wrapper"
                        class:active={sliderTransformationIndex === i}
                >
                    <input
                            class="slider-checkbox__hidden-input"
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
        height: 100%;
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*right: 0;*/
        /*bottom: 0;*/
    }
    .slider__checkboxes{
        position: absolute;
        top:50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, 75%);
        display: flex;
        gap: 16px;
    }
    .slider-checkbox__input-wrapper {
        display: flex;
        width: 10px;
        height: 10px;
        position: relative;
        border-radius: 100%;
        background: var(--title-color);
        opacity: 17.44%;
        cursor: pointer;
    }
    .slider-checkbox__hidden-input {
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        right: 0;
        display: none;
    }
    .slider-checkbox__input-wrapper:hover {
        opacity: 50%;

    }
    .slider-checkbox__input-wrapper:active, .slider-checkbox__input-wrapper.active {
        opacity: 100%;
    }
    @media (min-width: 768px) {
        .slider__checkboxes {
            top: 25%;
            transform: translate(-50%, 50%);
        }

    }
    @media (min-width: 1440px) {
       .slider__checkboxes {
           left: 0;
           top: auto;
           bottom: 0;
           transform: translate(0, -94px);
       }
    }
    @media (min-width: 1440px) {
    }
</style>


