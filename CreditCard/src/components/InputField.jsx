
function InputField(props) {

    const {placeholder, handleOnChange} = props;

    return (
        <input type="text"
        placeholder={ placeholder }
        onChange={ (event) => handleOnChange(event)}>

        </input>
    )
}

export default InputField;