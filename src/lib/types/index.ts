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
    image: {
        src: string,
        alt: string
    } | undefined
}

export type SlidesType = SlideType[];