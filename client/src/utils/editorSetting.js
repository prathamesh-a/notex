function getFormBackgroundColor(mode, isFocused, isSelected) {
    if (mode === 'dark') {
        if (isSelected) return '#7B6E62'
        else if (isFocused) return 'gray'
        else return '#232323'
    }
    else {
        if (isSelected) return '#57CB95'
        else if (isFocused) return '#26a96c'
        else return 'white'
    }
}

function getFormTextColor(mode, isFocused) {
    if (mode === 'dark') {
        if (isFocused) return 'white'
        else return 'white'
    }
    else {
        if (isFocused) return 'white'
        else return 'black'
    }
}

const languages_options = [
    {value: "javascript", label: 'JavaScript'},
    {value: "java", label: 'Java'},
    {value: "python", label: 'Python'},
    {value: "c_cpp", label: 'C/C++'},
    {value: 'xml', label: 'XML'},
    {value: 'ruby', label: 'Ruby'},
    {value: 'sass', label: 'SASS'},
    {value: 'markdown', label: 'Markdown'},
    {value: 'mysql', label: 'MySQL'},
    {value: 'json', label: 'JSON'},
    {value: 'html', label: 'HTML'},
    {value: 'handlebars', label: 'HandleBars'},
    {value: 'golang', label: 'Golang'},
    {value: 'csharp', label: 'C#'},
    {value: 'elixir', label: 'Elixir'},
    {value: 'typescript', label: 'TypeScript'},
    {value: 'css', label: 'CSS'}
]

function getStyles(mode) {
    return {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: mode === 'dark' ? '#232323' : 'white',
            borderColor: 'transparent',
            '&:hover': {
                borderColor: mode === 'dark' ? 'gray' : 'black',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            ':active': {
                backgroundColor: 'gray'
            },
            backgroundColor: getFormBackgroundColor(mode, state.isFocused, state.isSelected),
            color: getFormTextColor(mode, state.isFocused),
        }),
        singleValue: (provided) => ({
            ...provided,
            color: mode === 'dark' ? 'white' : 'black',
            fontFamily: 'Kanit, sans-serif',
        })
    }
}

export { languages_options, getStyles }

