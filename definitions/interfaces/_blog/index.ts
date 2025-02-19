
interface BlogSeoI {
    title: string;
    description: string;
    open_graph_image: string;
}

interface BlogCategory {
    meta?: {
        id: string;
    };
    label: string;
}

export interface BlogPostDataI {
    slug: string;
    published: string;
    fields: {
        seo: BlogSeoI;
    };
    category: BlogCategory[];
}