import validation_rules from "../utils/validator.js"

import { noteModel as Note } from "../models/Note.js"
import { make } from 'simple-body-validator'
import { nanoid } from "nanoid"
import {messages} from "../utils/reader.js";


const add_note = async (req, res, next) => {
    let existingNote
    let newNote
    const data = req.body
    const msg = messages()
    const validator = make(data, validation_rules.note_add)

    if (!validator.stopOnFirstFailure().validate()) {
        res.status(406).json({message: validator.errors().first()})
        return
    }

    try { existingNote = await Note.findOne({id: data.id})}
    catch (e) {
        console.error(e)
        res.status(503).json({message: msg.db_fetch_err})
        return
    }

    if (existingNote) {
        res.status(403).json({message: `${msg.note_already_exist} ${existingNote.id}`})
        return
    }

    newNote = new Note({
        type: data.type,
        data: data.data,
        expiry: new Date().getTime() + 86400000,
        id: nanoid(32)
    })

    await newNote.save().catch(e => {
        console.error(e)
        res.status(503).json({message: msg.db_save_err})
        return
    })

    res.status(200).json({id: newNote.id, message: `${msg.note_saved}`})
}

export default add_note