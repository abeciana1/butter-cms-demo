import { ButterColor } from "../general";

export interface CTADataI {
    meta: {
        id: number;
    }
    cta_title: string;
    cta_body_text: string;
    cta_link: string;
    cta_link_label: string;
    background_color: ButterColor;
    cta_color: ButterColor;
}

export interface FetchedCTAData {
    personalization_cta: CTADataI[];
}