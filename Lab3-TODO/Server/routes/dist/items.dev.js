"use strict";

var router = require('express').Router();

var todoschema = require('../models/todoitems');

router.post('/api/item', function _callee(req, res) {
  var newItem, saveItem;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newItem = new todoItemModel({
            item: req.body.item
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(newItem.save());

        case 4:
          saveItem = _context.sent;
          res.status(200).json("Item Added");
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.json(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
router.get('/api/item', function _callee2(req, res) {
  var items;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(todoItemModel.find({}));

        case 3:
          items = _context2.sent;
          res.status(200).json(items);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.json(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;
//# sourceMappingURL=items.dev.js.map
