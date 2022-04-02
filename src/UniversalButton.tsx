import React from 'react'

type UniversalButtonType = {
    name: string
    className: string
    callback: () => void
    disabledOnCondition: boolean
}

const UniversalButton: React.FC<UniversalButtonType> = ({
    name,
    className,
    callback,
    disabledOnCondition,
}) => {
    function onClickHandler() {
        callback()
    }

    return (
        <button
            className={className}
            onClick={onClickHandler}
            disabled={disabledOnCondition}
        >
            {name}
        </button>
    )
}

export default UniversalButton
