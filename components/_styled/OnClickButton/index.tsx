'use client'
import cx from 'classnames'
import { OnClickButtonI } from '@/definitions/interfaces/_styled'

const OnClickButton: React.FC<OnClickButtonI> = ({
    buttonText,
    onClick,
    color
}) => {
    return (
        <button
            onClick={onClick}
            className={cx('w-full h-10 min-w-32 sm:min-w-44 text-lg rounded-md py-1 px-2', {
                ['text-white bg-[#E03C31] ']: color === 'Red',
                ['text-white bg-[#9abeaa] ']: color === 'Green',
            })}
        >
            { buttonText }
        </button>
    )
}

export default OnClickButton