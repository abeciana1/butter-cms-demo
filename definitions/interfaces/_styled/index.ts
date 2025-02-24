import {
    ColorE,
    FontWeightE,
    FontSizeE
} from '@/definitions/enums'
import { ButterColor } from '../general';

export interface ImageI {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface LinkI {
    href: string;
    linkText: string;
    color: ColorE;
    fontWeight: FontWeightE;
    fontSize: FontSizeE;
}

export interface TextContentI {
    text: string;
    color: ColorE | string;
    fontWeight: FontWeightE | string;
    fontSize: FontSizeE | string;
}

export interface HeadingI {
    text: string;
    color: string;
    fontWeight: string;
}

export interface ButtonLinkI {
    linkText: string;
    buttonColor: string | ColorE;
    link: string;
    fontWeight?: FontWeightE
}

export interface HTMLContentI {
    textContent: string;
}

export interface BlogCtaI {
    headline: string;
    bodyText: string
    backgroundColor: ButterColor;
    ctaLabel: string
    ctaLink: string;
    ctaColor: ButterColor;
}

export interface OnClickButtonI {
    buttonText: string;
    color: string;
    onClick: () => void;
}

export interface PersonalizedCtaI {
    cookieTarget: string;
}