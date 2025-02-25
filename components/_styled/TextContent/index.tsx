import { ColorE, FontWeightE, FontSizeE } from '@/definitions/enums'
import cx from 'classnames'
import { TextContentI } from '@/definitions/interfaces/_styled'

const TextContent: React.FC<TextContentI> = ({
    text,
    color,
    fontWeight,
    fontSize
}) => {
    return (
        <div
            className={cx('relative', {
                ['text-secondary']: color === ColorE.SECONDARY,
                ['text-background']: color === ColorE.BACKGROUND,
                ['text-shades-silver']: color === ColorE.SILVER,
                ['text-shades-darkGrey']: color === ColorE.DARKGREY,
                ['text-primary']: color === ColorE.PRIMARY,
                ['text-foreground']: color === ColorE.FOREGROUND,
                ['text-accent-1']: color === ColorE.ACCENT_1,
                ['font-light']: fontWeight === FontWeightE.LIGHT,
                ['font-medium']: fontWeight === FontWeightE.MEDIUM,
                ['font-normal']: fontWeight === FontWeightE.NORMAL,
                ['font-bold']: fontWeight === FontWeightE.BOLD,
                ['text-sm']: fontSize === FontSizeE.SM,
                ['text-md']: fontSize === FontSizeE.MD,
                ['text-lg']: fontSize === FontSizeE.LG,
                ['text-xl']: fontSize === FontSizeE.XL,
                ['text-2xl']: fontSize === FontSizeE.XXL,
                ['text-3xl']: fontSize === FontSizeE.XXXL,
                ['text-4xl']: fontSize === FontSizeE.XXXXL
            })}
        >
            {text}
        </div>
    )
}

export default TextContent