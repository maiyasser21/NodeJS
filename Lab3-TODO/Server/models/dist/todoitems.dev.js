"use strict";

var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('todoItemModel', todoSchema);
//# sourceMappingURL=todoitems.dev.js.map
