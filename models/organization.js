const mongoose = require('mongoose');
const organization_schema = new mongoose.Schema({

    org_name:{
        type:String,
        required: true,

    },
    org_mentor:{
        type: String,
        required: true,
    },
    org_proto:{
      type: [],
    },

        
})
mongoose.model('ORGANIZATION',organization_schema);