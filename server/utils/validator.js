const validation_rules = {
    note_get: {
        id: 'required|alpha_dash|size:32'
    },
    note_add: {
        type: 'bail|required|in:javascript,java,python,xml,ruby,sass,markdown,mysql,json,html,handlebars,golang,csharp,elixir,typescript,css,c_cpp',
        data: 'bail|required|string'
    }
}

export default validation_rules