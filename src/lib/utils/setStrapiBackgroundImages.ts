import type {StrapiObjectType} from "../types";
import {strapiImagesURLsMapper} from "$lib/utils/strapiImagesURLsMapper";
import {browser} from "$app/environment";

export const setStrapiBackgroundImages = (sourceUrl: string, data: {[key: string]: StrapiObjectType}) => {
    const {urlMobile, urlTablet, urlDesktop} =strapiImagesURLsMapper(sourceUrl, (data?.attributes?.bgImage as StrapiObjectType)?.data as StrapiObjectType[])
    if(browser){
        document.body.style.setProperty("--bg-image", `url('${urlMobile}')`);
        document.body.style.setProperty("--bg-image--md", `url('${urlTablet}')`);
        document.body.style.setProperty("--bg-image--lg", `url('${urlDesktop}')`);
    }

}