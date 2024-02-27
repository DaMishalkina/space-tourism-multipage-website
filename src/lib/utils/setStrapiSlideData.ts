import type {StrapiObjectType} from "../types";
import {strapiImagesURLsMapper} from "./strapiImagesURLsMapper";

export const setStrapiSlideData = (strapiURL: string, slides: StrapiObjectType[]) => {
    return slides?.map((slide: StrapiObjectType) => {
        const imageAlt = ((slide["Image"] as StrapiObjectType)?.data as StrapiObjectType[])[0]?.attributes?.alternativeText;
        const image = {
            srcSet: strapiImagesURLsMapper(strapiURL, (slide["Image"] as StrapiObjectType)?.data as StrapiObjectType[]),
            alt: imageAlt
        }
        return {
            text: slide.Text,
            title: slide.Title,
            tagline: slide.Tagline,
            image: image
        }
    })
}