import React, { ChangeEvent } from 'react'
import UniversalButton from './UniversalButton'

type MaxStartValueComponentType = {
    startValue: number
    maxValue: number
    callBackOnChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    callBackSetValue: () => void
    count: number
    callBackOnChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    callBackDisabledOnConditionSet: () => boolean
}

export const MaxStartValueComponent: React.FC<MaxStartValueComponentType> = ({
    startValue,
    maxValue,
    callBackOnChangeMaxValue,
    callBackSetValue,
    callBackOnChangeStartValue,
    callBackDisabledOnConditionSet,
}) => {
    let inputValueCSS =
        startValue === maxValue
            ? 'inputValue inputValue_incorrect'
            : 'inputValue'
    let inputStartValueCSS =
        startValue === maxValue || startValue < 0
            ? 'inputValue inputValue_incorrect'
            : 'inputValue'
    let universalButtonSetCSS =
        startValue === maxValue || startValue < 0
            ? 'button_set button_opac'
            : 'button_set'

    function onChangeMaxValue(e: ChangeEvent<HTMLInputElement>) {
        callBackOnChangeMaxValue(e)
    }

    function setValue() {
        callBackSetValue()
    }

    function onChangeStartValue(e: ChangeEvent<HTMLInputElement>) {
        callBackOnChangeStartValue(e)
    }

    return (
        <div className="container">
            <div className="container_buttons">
                <div>
                    max value:{' '}
                    <input
                        type={'number'}
                        className={inputValueCSS}
                        value={maxValue}
                        onChange={onChangeMaxValue}
                    />
                </div>
                <div>
                    start value:{' '}
                    <input
                        type={'number'}
                        className={inputStartValueCSS}
                        value={startValue}
                        onChange={onChangeStartValue}
                    />
                </div>
            </div>

            <div className="container_buttons">
                <UniversalButton
                    name={'set'}
                    className={universalButtonSetCSS}
                    callback={setValue}
                    disabledOnCondition={callBackDisabledOnConditionSet()}
                />
            </div>
        </div>
    )
}
