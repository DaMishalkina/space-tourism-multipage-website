export type StrapiObjectAttributesType = {
    [key: string]: string | null | number
}
export interface StrapiObjectInterface {
    [key: string]: string | null | number
}
export type StrapiObjectType = StrapiObjectInterface & {
    attributes: StrapiObjectAttributesType

}