import type {PageLoad} from "../../../.svelte-kit/types/src/routes/[slug]/$types";


export const load: PageLoad = async ({fetch, params}) => {
        try {
            const currentPathname = params.slug;
            const apiKey = import.meta.env.VITE_MY_STRAPI_API_KEY;
            const strapiURL = import.meta.env.VITE_STRAPI_URL
            const response = await fetch(
                `${strapiURL}/api/content-pages?filters[slug]=${currentPathname.replace("/", "")}&populate=deep,10`,
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
            const page = await response.json();
            return {page}
        } catch (error){
            console.error(error);
            return {error: "Unable to fetch pages"};
        }
}