import type {PageLoad} from "../../.svelte-kit/types/src/routes/[slug]/$types";


export const load: PageLoad = async ({fetch}) => {
        try {

            const apiKey = import.meta.env.VITE_MY_STRAPI_API_KEY;
            const pageDataResponse = await fetch(
                " http://localhost:1337/api/home?populate=bgImage.image",

                {
                    headers: {
                        "Authorization": `Bearer ${apiKey}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            if(!pageDataResponse.ok){
                throw new Error(`HTTP error: ${pageDataResponse.status}`)
            }
            const page = await pageDataResponse.json();
            const allSlugsResponses = await fetch(
                " http://localhost:1337/api/content-pages?_select=slug",

                {
                    headers: {
                        "Authorization": `Bearer ${apiKey}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            if(!allSlugsResponses.ok){
                throw new Error(`HTTP error: ${allSlugsResponses.status}`)
            }
            const slugs = await allSlugsResponses.json();
            return {
                page: page,
                slugs: slugs
            }
        } catch (error){
            console.error(error);
            return {error: "Unable to fetch pages"};
        }
}