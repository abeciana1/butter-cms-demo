import { ColorE, FontWeightE, FontSizeE } from '@/definitions/enums'
import { BlogCtaI } from '@/definitions/interfaces/_styled'
import cx from 'classnames'
import ButtonLink from '@/components/_styled/ButtonLink'
import TextContent from '@/components/_styled/TextContent'

const BlogCta: React.FC<BlogCtaI> = ({
    headline,
    bodyText,
    backgroundColor,
    ctaLabel,
    ctaLink,
    ctaColor
}) => {
    const renderWhiteTextColor = backgroundColor?.color === ColorE.SECONDARY || backgroundColor?.color === ColorE.DARKGREY || backgroundColor?.color === ColorE.PRIMARY
    return (
        <section
            className={cx('my-4 p-8 rounded-md flex items-center gap-12 max-w-fit mx-auto',{
                ['bg-secondary']: backgroundColor?.color === ColorE.SECONDARY,
                ['bg-background']: backgroundColor?.color === ColorE.BACKGROUND,
                ['bg-shades-silver']: backgroundColor?.color === ColorE.SILVER,
                ['bg-shades-darkGrey']: backgroundColor?.color === ColorE.DARKGREY,
                ['bg-primary']: backgroundColor?.color === ColorE.PRIMARY,
                ['bg-accent-1']: backgroundColor?.color === ColorE.ACCENT_1
            })}
        >
            <div className=''>
                <TextContent
                    text={headline}
                    color={renderWhiteTextColor ? ColorE.BACKGROUND : ColorE.SECONDARY}
                    fontSize={FontSizeE.XL}
                    fontWeight={FontWeightE.BOLD}
                />
                <TextContent
                    text={bodyText}
                    color={renderWhiteTextColor ? ColorE.BACKGROUND : ColorE.SECONDARY}
                    fontSize={FontSizeE.LG}
                    fontWeight={FontWeightE.MEDIUM}
                />
            </div>
            <div className='whitespace-nowrap'>
                <ButtonLink
                    link={ctaLink}
                    linkText={ctaLabel}
                    fontWeight={FontWeightE.MEDIUM}
                    buttonColor={ctaColor.color}
                />
            </div>
        </section>
    )
}

export default BlogCta