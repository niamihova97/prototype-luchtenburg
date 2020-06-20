import React from 'react';
import Select from 'react-select';
export function PovSelector(props) {
    function optionBackgroundColor(state) {
        if (state.isSelected)
            return "var(--btn-active)";
        if (state.isFocused)
            return "var(--btn-hover)";
    }
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: optionBackgroundColor(state),
        }),
        control: (provided, state) => ({
            ...provided,
            boxShadow: "none",
            borderColor: state.isFocused ? "var(--btn-active)" : provided.borderColor,
            '&:hover': {
                borderColor: state.isFocused ? "var(--btn-active)" : "var(--btn-hover)"
            }
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: state.isFocused ? "var(--btn-active)" : provided.color,
            '&:hover': {
                color: state.isFocused ? "var(--btn-active)" : "var(--btn-hover)"
            }
        }),
    };
    return <Select styles={customStyles} className={props.className} options={props.options} value={props.value} onChange={props.onChange} />;
}
