import type {StrapiObjectType} from "../types/intex";

export const setStrapiBackgroundImages = (sourceUrl: string, data: {[key: string]: StrapiObjectType}) => {
    const bgImagesUrls = {
        bgImageMobile: "",
        bgImageTablet: "",
        bgImageDesktop: ""
    };
    ((data?.attributes?.bgImage as StrapiObjectType)?.data as StrapiObjectType[])?.map((image: StrapiObjectType) => {
        switch (image?.attributes?.width){
            case 375:
                bgImagesUrls.bgImageMobile = `${sourceUrl}${image?.attributes?.url}`;
                break;
            case 768:
                bgImagesUrls.bgImageTablet =`${sourceUrl}${image?.attributes?.url}`;
                break;
            default:
                bgImagesUrls.bgImageDesktop = `${sourceUrl}${image?.attributes?.url}`;
                break;
        }
    })
    return bgImagesUrls;

}