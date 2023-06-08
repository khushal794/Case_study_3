const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({

    title:{
        type:String,
        required : true,
    },
    description:{
        type: String,
        required : true,
    },
    Assign:{
        type:String,
        required : true,
    },
    CreationDate:{
        type:Date,
    },
    DueDate:{
        type:String,
        required: true
    },
    Priority:{
        type: String,
        required:true
    }

});

const Task= mongoose.model("Task",TaskSchema);

module.exports = Task;