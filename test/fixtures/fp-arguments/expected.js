"use strict";

var _map2 = _interopRequireDefault(require("lodash/fp/map"));
var _head2 = _interopRequireDefault(require("lodash/fp/head"));
var _compose2 = _interopRequireDefault(require("lodash/fp/compose"));
var _capitalize2 = _interopRequireDefault(require("lodash/fp/capitalize"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(0, _compose2.default)((0, _map2.default)(_capitalize2.default), _head2.default)([]);