export type StrapiObjectAttributesType = {
    [key: string]: string | null | number | StrapiObjectType | StrapiObjectType[]
}
export interface StrapiObjectInterface {
    [key: string]: string | null | number | StrapiObjectType | StrapiObjectType[]
}
export type StrapiObjectType = StrapiObjectInterface & {
    attributes?: StrapiObjectAttributesType

}

export type SlideType = {
    tagline: string | undefined,
    title: string | undefined,
    text: string | undefined,
    image: ImageType | undefined
}

export type SlidesType = SlideType[];

export type ImageType = {
    alt: string,
    srcSet: {urlMobile: string, urlTablet: string, urlDesktop: string}
}