import type {StrapiImageType} from "../types/intex";

export const setStrapiBackgroundImages = (sourceUrl: string, image: StrapiImageType) => {
    switch (image?.attributes?.width){
        case 375:
            const bgImageMobile = `${sourceUrl}${image?.attributes?.url}`;
            document.body.style.setProperty("--bg-image", `url('${bgImageMobile}')`);
            break;
        case 768:
            const  bgImageTablet =`${sourceUrl}${image?.attributes?.url}`;
            document.body.style.setProperty("--bg-image--md", `url('${bgImageTablet}')`);
            break;
        default:
            const bgImageDesktop = `${sourceUrl}${image?.attributes?.url}`;
            document.body.style.setProperty("--bg-image--lg", `url('${bgImageDesktop}')`);
            break;
    }

}