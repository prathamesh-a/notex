import mongoose from "mongoose"
import mongooseUniqueValidator from "mongoose-unique-validator"

const Schema = mongoose.Schema

const noteSchema = new Schema({
    type: {type: String, required: true},
    data: {type: String, required: true},
    id: {type: String, required: true, unique: true},
    createdAt: { type: Date, default: Date.now }
})

noteSchema.plugin(mongooseUniqueValidator)
noteSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

const noteModel = mongoose.model('Note', noteSchema)

export { noteModel }