import { ColorE, FontWeightE, FontSizeE } from '@/definitions/enums'
import { PersonalizedCtaI } from '@/definitions/interfaces/_styled'
import cx from 'classnames'
import ButtonLink from '@/components/_styled/ButtonLink'
import TextContent from '@/components/_styled/TextContent'
import { personalizationDataFetch } from '@/lib/butter'
import { cookies } from 'next/headers'
import { CTADataI, FetchedCTAData } from '@/definitions/interfaces/_personalize'

const PersonalizedCta: React.FC<PersonalizedCtaI> = async ({
    cookieTarget
}) => {
const cookieStore = await cookies()
const cookiePresent = cookieStore.get(cookieTarget)?.value

let ctaData: CTADataI | null = null;

if (cookiePresent) {
    const fetchedData = await personalizationDataFetch('personalization_cta', 1, 1, cookieTarget) as unknown as FetchedCTAData;
    
    if (fetchedData?.personalization_cta?.length) {
        ctaData = fetchedData.personalization_cta[0];
    }
}

if (!ctaData) return null; // Prevent rendering if no data

const {
    cta_title = "Default Title",
    cta_body_text = "Default body text for personalization.",
    cta_link = "#",
    cta_link_label = "Learn More",
    background_color = { color: ColorE.BACKGROUND },
    cta_color = { color: ColorE.PRIMARY }
} = ctaData;

    const renderWhiteTextColor = background_color?.color === ColorE.SECONDARY || background_color?.color === ColorE.DARKGREY || background_color?.color === ColorE.PRIMARY
    return (
        <section
            className={cx('my-32 mx-10 p-8 rounded-md flex items-center gap-12',{
                ['bg-secondary']: background_color?.color === ColorE.SECONDARY,
                ['bg-background']: background_color?.color === ColorE.BACKGROUND,
                ['bg-shades-silver']: background_color?.color === ColorE.SILVER,
                ['bg-shades-darkGrey']: background_color?.color === ColorE.DARKGREY,
                ['bg-primary']: background_color?.color === ColorE.PRIMARY,
                ['bg-accent-1']: background_color?.color === ColorE.ACCENT_1
            })}
        >
            <div className=''>
                <TextContent
                    text={cta_title}
                    color={renderWhiteTextColor ? ColorE.BACKGROUND : ColorE.SECONDARY}
                    fontSize={FontSizeE.XL}
                    fontWeight={FontWeightE.BOLD}
                />
                <TextContent
                    text={cta_body_text}
                    color={renderWhiteTextColor ? ColorE.BACKGROUND : ColorE.SECONDARY}
                    fontSize={FontSizeE.LG}
                    fontWeight={FontWeightE.MEDIUM}
                />
            </div>
            <div className='whitespace-nowrap'>
                <ButtonLink
                    link={cta_link}
                    linkText={cta_link_label}
                    fontWeight={FontWeightE.MEDIUM}
                    buttonColor={cta_color.color}
                />
            </div>
        </section>
    )
}

export default PersonalizedCta