import express from "express"
import get_notes from "../controllers/get_notes.js";
import add_note from "../controllers/add_note.js";

const router = express.Router()

router.post('/', add_note)
router.get('/', get_notes)

export { router as note_routes }