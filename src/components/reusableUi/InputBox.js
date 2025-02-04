const InputBox = (props) =>{
    const {inputValue, updateInputBox, dataTestId}  = props
    return  (
        <input
        data-testid={dataTestId}
        type="text"
        className=" border-solid border-2 mr-2 py-1 rounded-lg border-gray-400"
        value={inputValue}
        onChange={(e) => updateInputBox(e.target.value)}
      />
    )
}

export default InputBox