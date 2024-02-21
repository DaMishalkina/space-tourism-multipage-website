export type StrapiObjectAttributesType = {
    [key: string]: string | null | number | StrapiObjectType | StrapiObjectType[]
}
export interface StrapiObjectInterface {
    [key: string]: string | null | number | StrapiObjectType | StrapiObjectType[]
}
export type StrapiObjectType = StrapiObjectInterface & {
    attributes: StrapiObjectAttributesType

}