'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vis = require('vis');
var uuid = require('uuid');

var Graph = function (_Component) {
  _inherits(Graph, _Component);

  function Graph(props) {
    _classCallCheck(this, Graph);

    var _this = _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).call(this, props));

    var identifier = _this.props.identifier;

    _this.updateGraph = _this.updateGraph.bind(_this);
    _this.state = {
      hierarchicalLayout: false,
      identifier: identifier ? identifier : uuid.v4()
    };
    return _this;
  }

  _createClass(Graph, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateGraph();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateGraph();
    }
  }, {
    key: 'updateGraph',
    value: function updateGraph() {
      var container = document.getElementById(this.state.identifier);
      var options = {
        stabilize: false,
        smoothCurves: false,
        edges: {
          color: '#000000',
          width: 0.5,
          arrowScaleFactor: 2,
          style: 'arrow'
        },
        physics: {
          repulsion: {
            nodeDistance: 1000
          },
          barnesHut: {
            springLength: 300,
            avoidOverlap: 1,
            springConstant: 0.01,
            gravitationalConstant: -10000
          }
        }
      };

      new vis.Network(container, this.props.graph, options);
    }
  }, {
    key: 'render',
    value: function render() {
      var identifier = this.state.identifier;
      var style = this.props.style;

      return _react2.default.createElement('div', {id: identifier, style: style }, identifier);
    }
  }]);

  return Graph;
}(_react.Component);

Graph.defaultProps = {
  graph: {},
  style: { width: '640px', height: '480px' }
};

exports.default = Graph;