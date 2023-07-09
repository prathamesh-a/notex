import AceEditor from 'react-ace'
import axios from "axios"

import "ace-builds/src-noconflict/mode-jsx"
import "ace-builds/src-min-noconflict/ext-searchbox"
import "ace-builds/src-min-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/mode-c_cpp"
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

import "ace-builds/src-noconflict/theme-twilight"
import "ace-builds/src-noconflict/theme-solarized_light"

import {useEffect, useState} from "react";
import {toast_failed, toast_success} from "../utils/toast.js";
import {useNavigate, useParams} from "react-router-dom";

export default function NoteBlock(props) {

    const [lang, setLang] = useState('java')
    const [data, setData] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()
    const {theme} = props

    useEffect(() => {
        props.setLoading(true)
        axios.get(`${import.meta.env.VITE_API_URL}/api/note?id=${id}`)
            .then(res => {
                setLang(res.data.type)
                setData(res.data.data)
                props.setLoading(false)
            })
            .catch(err => {
                props.setLoading(false)
                if (err.response.status === 429) {
                    toast_failed(err.response.data.message, theme)
                    setLang('css')
                    setData(`ERROR 429: ${err.response.data.message}`)
                }
                else {
                    navigate('/error')
                }
            })
    }, [])

    return (
        <div className="w-[100%] pt-20 sm:pt-24">
            <div className="w-[80%] flex flex-col sm:flex-row mx-auto items-center mb-4 justify-between pb-4">
                <div className="flex justify-between">
                    <p className="text-lg sm:text-xl font-kanit dark:text-white">Create New Note: </p>
                    <button onClick={() => navigate('/')}
                            className="flex font-kanit bg-green-600 pl-2 pr-3 sm:py-1 rounded-md text-white ml-4 hover:bg-green-700">
                        <img width="25px" alt="" src="https://img.icons8.com/ios-filled/50/ffffff/plus-math.png"/>
                        Create
                    </button>
                </div>
                <div className="flex items-center mt-4 sm:mt-0">
                    <button onClick={() => {
                        navigator.clipboard.writeText(data)
                        toast_success('Copied!', theme)
                    }}
                            className="flex items-center font-kanit bg-sky-600 pl-2 pr-3 sm:py-1 rounded-md text-white ml-4 hover:bg-sky-700">
                        <img className="mr-1" width="20px" alt="" src="https://img.icons8.com/material-outlined/24/ffffff/copy.png"/>
                        Copy
                    </button>

                    <button onClick={() => {
                        navigator.clipboard.writeText(window.location.href)
                        toast_success('Link copied.', theme)
                    }}
                            className="flex items-center font-kanit bg-sky-600 pl-2 pr-3 sm:py-1 rounded-md text-white ml-4 hover:bg-sky-700">
                        <img className="mr-2" width="18px" alt="" src="https://img.icons8.com/android/24/ffffff/share.png"/>
                        Share
                    </button>
                </div>
            </div>
            <div
                className="mx-auto sm:w-[80%] flex justify-center py-4 dark:bg-neutral-800 bg-yellow-50 sm:rounded-lg">
                <AceEditor
                    mode={lang}
                    theme={theme === 'dark' ? 'twilight' : 'solarized_light'}
                    value={data}
                    fontSize={16}
                    name="my-editor"
                    editorProps={{$blockScrolling: true}}
                    width="100%"
                    height="500px"
                    showGutter={true}
                    readOnly={true}

                    setOptions={{
                        useWorker: false,
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2
                    }}
                />
            </div>

        </div>
    )
}