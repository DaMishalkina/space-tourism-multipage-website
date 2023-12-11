import type {PageLoad} from "../../../.svelte-kit/types/src/routes/[slug]/$types";

export const load: PageLoad = async ({fetch}) => {
    try {
        const currentPathname = window.location.pathname;
        const apiKey = import.meta.env.VITE_MY_STRAPI_API_KEY;
        const strapiURL = import.meta.env.VITE_STRAPI_URL
        const response = await fetch(
           `${strapiURL}/api/content-pages?filters[slug]=${currentPathname.replace("/", "")}`,
            // Update the endpoint based on your content type
            {
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                }
            }
        );
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`)
        }
        const pages = await response.json();
        return {pages}
    } catch (error){
        console.error(error);
        return {error: "Unable to fetch pages"};
    }
}