import type {StrapiObjectType} from "../types";

export const strapiImagesURLsMapper = (sourceUrl: string, strapiImages: StrapiObjectType[]) => {
    const imageUrls = {
        urlMobile: "",
        urlTablet: "",
        urlDesktop: ""
    };
    strapiImages?.map((image: StrapiObjectType) => {
        switch (image?.attributes?.width){
            case 375:
                imageUrls.urlMobile = `${sourceUrl}${image?.attributes?.url}`;
                break;
            case 768:
                imageUrls.urlTablet =`${sourceUrl}${image?.attributes?.url}`;
                break;
            default:
                imageUrls.urlDesktop = `${sourceUrl}${image?.attributes?.url}`;
                break;
        }
    })
    return imageUrls;
}