import Schema from 'validate'

export const editableOrigin = new Schema({
  slug: {
    type: String,
    required: false,
  },
  display_as: {
    type: String,
    required: true,
  },
  destinations: [{
    type: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    meta: {
      title: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: false
      },
    }
  }],
  meta: {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
  }
})