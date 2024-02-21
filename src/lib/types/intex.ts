export type StrapiImageType = {
    attributes: {
        id: number,
        width: number,
        url: string,
        [key: string]: string | null | number
    }
}

export type StrapiImagesType = StrapiImageType[];