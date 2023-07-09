import validation_rules from "../utils/validator.js"

import { make } from 'simple-body-validator'
import {noteModel as Note} from "../models/Note.js"
import {messages} from "../utils/reader.js";


const get_notes = async (req, res, next) => {
    let existingNote
    const data = req.query
    const msg = messages()
    const validator = make(data, validation_rules.note_get)

    if (!validator.validate()) {
        res.status(406).json({message: validator.errors().first()})
        return
    }

    try { existingNote = await Note.findOne({id: data.id})}
    catch (e) {
        console.error(e)
        res.status(503).json({message: msg.db_fetch_err})
        return
    }

    if (!existingNote) {
        res.status(404).json({message: msg.note_not_found})
        return
    }

    res.status(200).send(existingNote)
}

export default get_notes