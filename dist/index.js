function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var MatColors = new Map([['amber', {
  50: '#fff8e1',
  100: '#ffecb3',
  200: '#ffe082',
  300: '#ffd54f',
  400: '#ffca28',
  500: '#ffc107',
  600: '#ffb300',
  700: '#ffa000',
  800: '#ff8f00',
  900: '#ff6f00',
  1000: '#ffe57f',
  2000: '#ffd740',
  4000: '#ffc400',
  7000: '#ffab00'
}], ['blue', {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  1000: '#82b1ff',
  2000: '#448aff',
  4000: '#2979ff',
  7000: '#2962ff'
}], ['blueGrey', {
  50: '#eceff1',
  100: '#cfd8dc',
  200: '#b0bec5',
  300: '#90a4ae',
  400: '#78909c',
  500: '#607d8b',
  600: '#546e7a',
  700: '#455a64',
  800: '#37474f',
  900: '#263238',
  1000: '#cfd8dc',
  2000: '#b0bec5',
  4000: '#78909c',
  7000: '#455a64'
}], ['brown', {
  50: '#efebe9',
  100: '#d7ccc8',
  200: '#bcaaa4',
  300: '#a1887f',
  400: '#8d6e63',
  500: '#795548',
  600: '#6d4c41',
  700: '#5d4037',
  800: '#4e342e',
  900: '#3e2723',
  1000: '#d7ccc8',
  2000: '#bcaaa4',
  4000: '#8d6e63',
  7000: '#5d4037'
}], ['cyan', {
  50: '#e0f7fa',
  100: '#b2ebf2',
  200: '#80deea',
  300: '#4dd0e1',
  400: '#26c6da',
  500: '#00bcd4',
  600: '#00acc1',
  700: '#0097a7',
  800: '#00838f',
  900: '#006064',
  1000: '#84ffff',
  2000: '#18ffff',
  4000: '#00e5ff',
  7000: '#00b8d4'
}], ['deepOrange', {
  50: '#fbe9e7',
  100: '#ffccbc',
  200: '#ffab91',
  300: '#ff8a65',
  400: '#ff7043',
  500: '#ff5722',
  600: '#f4511e',
  700: '#e64a19',
  800: '#d84315',
  900: '#bf360c',
  1000: '#ff9e80',
  2000: '#ff6e40',
  4000: '#ff3d00',
  7000: '#dd2c00'
}], ['deepPurple', {
  50: '#ede7f6',
  100: '#d1c4e9',
  200: '#b39ddb',
  300: '#9575cd',
  400: '#7e57c2',
  500: '#673ab7',
  600: '#5e35b1',
  700: '#512da8',
  800: '#4527a0',
  900: '#311b92',
  1000: '#b388ff',
  2000: '#7c4dff',
  4000: '#651fff',
  7000: '#6200ea'
}], ['green', {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  1000: '#b9f6ca',
  2000: '#69f0ae',
  4000: '#00e676',
  7000: '#00c853'
}], ['grey', {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  1000: '#d5d5d5',
  2000: '#aaaaaa',
  4000: '#303030',
  7000: '#616161'
}], ['indigo', {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  1000: '#8c9eff',
  2000: '#536dfe',
  4000: '#3d5afe',
  7000: '#304ffe'
}], ['lightBlue', {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  1000: '#80d8ff',
  2000: '#40c4ff',
  4000: '#00b0ff',
  7000: '#0091ea'
}], ['lightGreen', {
  50: '#f1f8e9',
  100: '#dcedc8',
  200: '#c5e1a5',
  300: '#aed581',
  400: '#9ccc65',
  500: '#8bc34a',
  600: '#7cb342',
  700: '#689f38',
  800: '#558b2f',
  900: '#33691e',
  1000: '#ccff90',
  2000: '#b2ff59',
  4000: '#76ff03',
  7000: '#64dd17'
}], ['lime', {
  50: '#f9fbe7',
  100: '#f0f4c3',
  200: '#e6ee9c',
  300: '#dce775',
  400: '#d4e157',
  500: '#cddc39',
  600: '#c0ca33',
  700: '#afb42b',
  800: '#9e9d24',
  900: '#827717',
  1000: '#f4ff81',
  2000: '#eeff41',
  4000: '#c6ff00',
  7000: '#aeea00'
}], ['orange', {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  1000: '#ffd180',
  2000: '#ffab40',
  4000: '#ff9100',
  7000: '#ff6d00'
}], ['pink', {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  1000: '#ff80ab',
  2000: '#ff4081',
  4000: '#f50057',
  7000: '#c51162'
}], ['purple', {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  1000: '#ea80fc',
  2000: '#e040fb',
  4000: '#d500f9',
  7000: '#aa00ff'
}], ['red', {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  1000: '#ff8a80',
  2000: '#ff5252',
  4000: '#ff1744',
  7000: '#d50000'
}], ['teal', {
  50: '#e0f2f1',
  100: '#b2dfdb',
  200: '#80cbc4',
  300: '#4db6ac',
  400: '#26a69a',
  500: '#009688',
  600: '#00897b',
  700: '#00796b',
  800: '#00695c',
  900: '#004d40',
  1000: '#a7ffeb',
  2000: '#64ffda',
  4000: '#1de9b6',
  7000: '#00bfa5'
}], ['yellow', {
  50: '#fffde7',
  100: '#fff9c4',
  200: '#fff59d',
  300: '#fff176',
  400: '#ffee58',
  500: '#ffeb3b',
  600: '#fdd835',
  700: '#fbc02d',
  800: '#f9a825',
  900: '#f57f17',
  1000: '#ffff8d',
  2000: '#ffff00',
  4000: '#ffea00',
  7000: '#ffd600'
}]]);
var MatColorShades;

(function (MatColorShades) {
  MatColorShades[MatColorShades["S50"] = 50] = "S50";
  MatColorShades[MatColorShades["S100"] = 100] = "S100";
  MatColorShades[MatColorShades["S200"] = 200] = "S200";
  MatColorShades[MatColorShades["S300"] = 300] = "S300";
  MatColorShades[MatColorShades["S400"] = 400] = "S400";
  MatColorShades[MatColorShades["S500"] = 500] = "S500";
  MatColorShades[MatColorShades["S600"] = 600] = "S600";
  MatColorShades[MatColorShades["S700"] = 700] = "S700";
  MatColorShades[MatColorShades["S800"] = 800] = "S800";
  MatColorShades[MatColorShades["S900"] = 900] = "S900";
  MatColorShades[MatColorShades["A100"] = 1000] = "A100";
  MatColorShades[MatColorShades["A200"] = 2000] = "A200";
  MatColorShades[MatColorShades["A400"] = 4000] = "A400";
  MatColorShades[MatColorShades["A700"] = 7000] = "A700";
})(MatColorShades || (MatColorShades = {}));

var MatColorVariants;

(function (MatColorVariants) {
  MatColorVariants["RED"] = "red";
  MatColorVariants["YELLOW"] = "yellow";
  MatColorVariants["AMBER"] = "amber";
  MatColorVariants["BLUE"] = "blue";
  MatColorVariants["BLUE_GREY"] = "blueGrey";
  MatColorVariants["BROWN"] = "brown";
  MatColorVariants["CYAN"] = "cyan";
  MatColorVariants["DEEP_ORANGE"] = "deepOrange";
  MatColorVariants["DEEP_PURPLE"] = "deepPurple";
  MatColorVariants["GREEN"] = "green";
  MatColorVariants["GREY"] = "grey";
  MatColorVariants["INDIGO"] = "indigo";
  MatColorVariants["LIGHT_BLUE"] = "lightBlue";
  MatColorVariants["LIGHT_GREEN"] = "lightGreen";
  MatColorVariants["LIME"] = "lime";
  MatColorVariants["ORANGE"] = "orange";
  MatColorVariants["PINK"] = "pink";
  MatColorVariants["PURPLE"] = "purple";
  MatColorVariants["TEAL"] = "teal";
})(MatColorVariants || (MatColorVariants = {}));

var getMatColor = function getMatColor(variant, shade) {
  var _MatColors$get;

  if (shade === void 0) {
    shade = MatColorShades.S500;
  }

  return (_MatColors$get = MatColors.get(variant)) === null || _MatColors$get === void 0 ? void 0 : _MatColors$get[shade];
};
var matColorKeys = Array.from(MatColors.keys());

var getColorByVariant = function getColorByVariant(variant, shade) {
  if (shade === void 0) {
    shade = MatColorShades.S500;
  }

  console.log(';variant ', variant);

  switch (variant) {
    case 'accent':
      return getMatColor(MatColorVariants.TEAL, shade);

    case 'primary':
      return getMatColor(MatColorVariants.INDIGO, shade);

    case 'secondary':
      return getMatColor(MatColorVariants.PINK, shade);

    case 'warning':
      return getMatColor(MatColorVariants.AMBER, shade);

    case 'danger':
      return getMatColor(MatColorVariants.RED, shade);

    case 'default':
      return getMatColor(MatColorVariants.GREY, shade);

    default:
      return getMatColor(variant, shade);
  }
};

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n      opacity: 0.5;\n      cursor: progress;\n      ", "\n      ", "\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n      color: rgba(0, 0, 0, 0.26);\n      ", "\n      ", "\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n      ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border: none;\n  box-shadow: none;\n  padding: unset;\n  color: #fff;\n  transition: all .5s ease;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  @keyframes anim-rotate {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  > .vv-btn-loading {\n    display: inline-block;\n    color: currentcolor;\n    width: 1em;\n    height: 1em;\n    vertical-align: bottom;\n    margin-right: 6px;\n    border-width: 2px;\n    border-color: currentcolor currentcolor transparent transparent;\n    border-style: solid;\n    border-radius: 9999px;\n    animation: 0.65s linear 0s infinite normal none running anim-rotate;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled__default.button(_templateObject(), function (_ref) {
  var variant = _ref.variant;
  return variant !== 'link' && "\n    border-radius: 3px;\n  ";
}, function (_ref2) {
  var disabled = _ref2.disabled,
      variant = _ref2.variant,
      colorVariant = _ref2.colorVariant;
  return disabled !== true && variant !== 'link' && styled.css(_templateObject2(), (variant === 'outline' || variant === 'solid') && "\n          border: 1px solid " + getColorByVariant(colorVariant, MatColorShades.S200) + ";\n        ", (variant === 'outline' || variant === 'text') && "\n        color: " + getColorByVariant(colorVariant, MatColorShades.S500) + ";\n        &:hover {\n          background: " + getColorByVariant(colorVariant, MatColorShades.S50) + ";\n        }\n      ", variant === 'outline' && "\n        &:hover {\n          border: 1px solid " + getColorByVariant(colorVariant, MatColorShades.S500) + ";\n        }\n      ", variant === 'solid' && colorVariant !== 'default' && "\n        background: " + getColorByVariant(colorVariant, MatColorShades.S500) + ";\n        &:hover {\n          background: " + getColorByVariant(colorVariant, MatColorShades.S700) + ";\n        }\n      ", variant === 'solid' && colorVariant === 'default' && "\n        background: " + getColorByVariant(colorVariant, MatColorShades.S200) + ";\n        &:hover {\n          background: " + getColorByVariant(colorVariant, MatColorShades.S400) + ";\n        }\n      ", colorVariant === 'default' && "\n        color: #212121;\n      ");
}, function (_ref3) {
  var disabled = _ref3.disabled,
      variant = _ref3.variant;
  return disabled !== true && variant === 'link' && "\n    color: " + getMatColor(MatColorVariants.BLUE, MatColorShades.S700) + ";\n    &:hover {\n      text-decoration: underline;\n    }\n  ";
}, function (_ref4) {
  var disabled = _ref4.disabled,
      variant = _ref4.variant;
  return disabled === true && styled.css(_templateObject3(), (variant === 'solid' || variant === 'outline') && "\n        border: 1px solid rgba(0, 0, 0, 0.15);\n      ", variant === 'solid' && "\n        background: rgba(0, 0, 0, 0.12);\n      ");
}, function (_ref5) {
  var size = _ref5.size;
  return size === 'xs' && "\n    padding: 3px 8px;\n    font-size: 0.625rem;\n    font-weight: 500;\n  ";
}, function (_ref6) {
  var size = _ref6.size;
  return size === 'sm' && "\n    padding: 4px 12px;\n    font-size: 0.75rem;\n    font-weight: 500;\n  ";
}, function (_ref7) {
  var size = _ref7.size;
  return size === 'md' && "\n    padding: 8px 16px;\n    font-size: 0.8125rem;\n    font-weight: 500;\n  ";
}, function (_ref8) {
  var size = _ref8.size;
  return size === 'lg' && "\n    padding: 16px 24px;\n    font-size: 0.9375rem;\n    font-weight: 800;\n    text-transform: uppercase;\n  ";
}, function (_ref9) {
  var disabled = _ref9.disabled;
  return disabled === true && "\n    cursor: not-allowed;\n  ";
}, function (_ref10) {
  var loading = _ref10.loading,
      size = _ref10.size;
  return loading === true && styled.css(_templateObject4(), size === 'xs' && "\n        & > .vv-btn-loading {\n          width: 0.6em;\n          height: 0.6em;\n        }\n      ", size === 'sm' && "\n        & > .vv-btn-loading {\n          width: 0.8em;\n          height: 0.8em;\n        }\n      ");
});

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'solid' : _ref$variant,
      _ref$colorVariant = _ref.colorVariant,
      colorVariant = _ref$colorVariant === void 0 ? 'default' : _ref$colorVariant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "variant", "colorVariant", "size", "disabled", "loading"]);

  return React.createElement(StyledButton, Object.assign({
    className: "vv-btn vv-btn-" + variant + " vv-btn-color-" + colorVariant,
    size: size,
    disabled: disabled,
    loading: loading,
    variant: variant,
    colorVariant: colorVariant
  }, props), React.createElement(React.Fragment, null, loading && React.createElement("div", {
    className: 'vv-btn-loading'
  }), children));
};

module.exports = Button;
//# sourceMappingURL=index.js.map
