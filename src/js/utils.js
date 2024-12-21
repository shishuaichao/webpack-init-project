
function css(el, prop, val) {
	let style = el && el.style;

	if (style) {
		if (val === void 0) {
			if (document.defaultView && document.defaultView.getComputedStyle) {
				val = document.defaultView.getComputedStyle(el, '');
			}
			else if (el.currentStyle) {
				val = el.currentStyle;
			}

			return prop === void 0 ? val : val[prop];
		}
		else {
			if (!(prop in style) && prop.indexOf('webkit') === -1) {
				prop = '-webkit-' + prop;
			}

			style[prop] = val + (typeof val === 'string' ? '' : 'px');
		}
	}
}

export {
  css,
}