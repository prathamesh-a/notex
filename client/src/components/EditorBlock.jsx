import {useState} from "react";
import AceEditor from 'react-ace'

import "ace-builds/src-min-noconflict/ext-searchbox"
import "ace-builds/src-min-noconflict/ext-language_tools"

import "ace-builds/src-noconflict/mode-jsx"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-xml"
import "ace-builds/src-noconflict/mode-ruby"
import "ace-builds/src-noconflict/mode-sass"
import "ace-builds/src-noconflict/mode-markdown"
import "ace-builds/src-noconflict/mode-mysql"
import "ace-builds/src-noconflict/mode-json"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-handlebars"
import "ace-builds/src-noconflict/mode-golang"
import "ace-builds/src-noconflict/mode-csharp"
import "ace-builds/src-noconflict/mode-elixir"
import "ace-builds/src-noconflict/mode-typescript"
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/mode-c_cpp"

import "ace-builds/src-noconflict/theme-twilight"
import "ace-builds/src-noconflict/theme-solarized_light"

import Select from "react-select";
import {getStyles, languages_options} from "../utils/editorSetting.js";
import {useNavigate} from "react-router-dom";
import {toast_failed, toast_success} from "../utils/toast.js";
import axios from "axios";

export default function EditorBlock(props) {

    const navigate = useNavigate()
    const {data, setData, theme} = props
    const [lang, setLang] = useState("java")

    function saveNote() {
        if (data.length === 0) {
            toast_failed('Note cannot be empty.', theme)
            return
        }
        props.setLoading(true)
        axios.post(`${import.meta.env.VITE_API_URL}/api/note`, {type: lang, data: data})
            .then(r => {
                setData('')
                props.setLoading(false)
                toast_success('Note saved.', theme)
                navigate(`/${r.data.id}`)
            })
            .catch(err => {
                props.setLoading(false)
                if (err.response.status === 429) {
                    toast_failed(err.response.data.message, theme)
                }
                else toast_failed('Unknown error occured.', theme)
            })
    }

    return (
        <div className="w-[100%] pt-20 sm:pt-24">
            <div className="w-[80%] flex flex-col sm:flex-row mx-auto items-center mb-4 justify-between">
                <div className="flex items-center">
                    <p className="text-lg sm:text-xl font-kanit dark:text-white">Select Language: </p>
                    <Select
                        className="ml-4 w-32 sm:w-36"
                        defaultValue={languages_options[1]}
                        isSearchable={false}
                        options={languages_options}
                        onChange={(newValue)=>setLang(newValue.value)}
                        styles={getStyles(theme)}
                    />
                </div>
                <div className="flex justify-between mt-3 sm:mt-0">
                    <button onClick={() => setData("")} className="hover:bg-red-700 font-kanit bg-red-600 px-4 sm:py-1 rounded-md text-white">Reset</button>
                    <button onClick={() => saveNote()} className="font-kanit bg-green-600 px-4 sm:py-1 rounded-md text-white ml-4 hover:bg-green-700">Save</button>
                </div>
            </div>
            <div className="mx-auto sm:w-[80%] bg-blue-200 flex justify-center py-4 dark:bg-neutral-800 bg-yellow-50 sm:rounded-lg">
                <AceEditor
                    mode={lang}
                    theme={theme === 'dark' ? 'twilight' : 'solarized_light'}
                    value={data}
                    onChange={setData}
                    fontSize={16}
                    name="my-editor"
                    editorProps={{ $blockScrolling: true }}
                    width="100%"
                    height="500px"
                    showGutter={true}
                    readOnly={false}

                    setOptions={{
                        useWorker: false,
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2
                    }}
                />
            </div>

        </div>
    )
}