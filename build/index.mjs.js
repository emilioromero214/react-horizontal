!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.propTypes=t.defaultProps=t.ScrollMenu=t.InnerWrapper=t.innerStyle=t.Arrow=t.defaultSetting=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=o(n(4)),s=o(n(3));function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function(e){return void 0!==e&&null!==e},c=t.defaultSetting={alignCenter:!0,arrowClass:"scroll-menu-arrow",clickWhenDrag:!1,dragging:!0,data:[],firstPageOffset:0,innerWrapperClass:"menu-wrapper--inner",itemClass:"menu-item-wrapper",itemClassActive:"active",lastPageOffset:0,menuItems:[],menuPos:0,menuWidth:0,menuClass:"horizontal-menu",selected:0,translate:0,transition:.4,wrapperClass:"menu-wrapper",wheel:!0,xPoint:0},m=t.Arrow=function(e){var t=e.className,n=e.onClick,r=e.children;return i.default.createElement("div",{className:t,onClick:n},r)};m.propTypes={className:s.default.string,onClick:s.default.func.isRequired,children:s.default.object.isRequired};var g={display:"flex",alignItems:"center",userSelect:"none"},p={overflow:"hidden",userSelect:"none"},h=t.innerStyle=function(e){var t=e.translate,n=e.dragging,r=e.mounted,a=e.transition;return{width:"9900px",transform:"translate3d("+t+"px, 0px, 0px)",transition:"transform "+(n||!r?"0":a)+"s",whiteSpace:"nowrap",textAlign:"left",userSelect:"none"}},v=t.InnerWrapper=function(e){function t(e){l(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e,t){var r=n.props.setRef;n.ref[e]=t,r(n.ref)},n.ref={},n}return f(t,i.default.Component),a(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.translate,a=t.dragging,s=t.mounted,o=t.transition,l=t.selected,u=t.innerWrapperClass,f=t.itemClass,d=t.onClick,c=t.itemClassActive,m=function(e,t){return String(e)===String(t)},g=n.map(function(e){return i.default.cloneElement(e,{selected:m(e.key,l)})});return i.default.createElement("div",{className:u,style:h({translate:r,dragging:a,mounted:s,transition:o}),ref:function(t){return e.setRef("menuInner",t)}},g.map(function(t,n){return i.default.createElement("div",{ref:function(t){return e.setRef("menuitem-"+n,t)},className:f+" "+(m(t.key,l)?c:""),key:"menuItem-"+t.key,style:{display:"inline-block"},onClick:function(){return d(t.key)}},t)}))}}]),t}();v.propTypes={data:s.default.arrayOf(s.default.object).isRequired,setRef:s.default.func.isRequired,onClick:s.default.func.isRequired,translate:s.default.number,dragging:s.default.bool,mounted:s.default.bool,transition:s.default.number,selected:s.default.oneOfType([s.default.string,s.default.number]),innerWrapperClass:s.default.string,itemClass:s.default.string,itemClassActive:s.default.string},v.defaultProps={data:[],translate:c.translate,dragging:!0,mounted:!1,transition:c.transition,selected:c.selected};var C=t.ScrollMenu=function(e){function t(e){l(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={dragging:!1,xPoint:c.xPoint,translate:n.props.translate,startDragTranslate:null,xDraggedDistance:null},n.setRef=function(e){n.ref=e},n.setWrapperRef=function(e){n.ref.menuWrapper=e},n.setInitial=function(){var e=n.props,t=e.selected,r=e.data,a=n.state.translate;if(!r||!r.length)return!1;var i=n.getMenuItems(r.length),s=r.find(function(e){return e.key===t}),o={menuItems:i,selected:s&&-1!==s?s.key:c.selected};for(var l in o)n[l]=o[l];var u=n.updateWidth({items:i}),f=(u.translate,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(u,["translate"]));for(var d in f)n[d]=f[d];var m=n.getAlignItemsOffset();a!==m&&"number"==typeof m&&n.setState({translate:m},function(){return n.onUpdate({translate:m})})},n.getMenuItems=function(e){return Object.entries(n.ref).filter(function(e){return e[0].includes("menuitem")}).slice(0,e).filter(Boolean)},n.setMounted=function(){var e=n.initialized,t=n.mounted;e?t||(n.mounted=!0):n.initialized=!0},n.getItemsWidth=function(e){var t=e.items,r=void 0===t?n.menuItems:t;return(r&&r.items||r).map(function(e){return e[1]}).filter(Boolean).reduce(function(e,t){return e+t.getBoundingClientRect().width},0)},n.getWidth=function(e){var t=e.items,r=window&&window.innerWidth,a=n.ref.menuWrapper.getBoundingClientRect();return{wWidth:r,menuPos:a.x,menuWidth:a.width,allItemsWidth:n.getItemsWidth({items:t})}},n.updateWidth=function(e){var t=e.items,a=void 0===t?n.menuItems:t,i=n.props.alignCenter,s=n.getWidth({items:a});return r({},s,i?n.getPagesOffsets(r({items:a},s)):{})},n.getPagesOffsets=function(e){var t=e.items,r=void 0===t?n.menuItems:t,a=e.allItemsWidth,i=void 0===a?n.allItemsWidth:a,s=e.wWidth,o=void 0===s?n.wWidth:s,l=e.menuPos,u=void 0===l?n.menuPos:l,f=e.menuWidth,d=void 0===f?n.menuWidth:f,c=e.translate,m=void 0===c?n.state.translate:c,g=n.props.alignCenter,p=n.getVisibleItems({items:r,wWidth:o,menuPos:u,menuWidth:d}),h=n.getCenterOffset({items:p,menuWidth:d}),v=n.getVisibleItems({items:r,offset:-i+d,wWidth:o,menuPos:u,menuWidth:d}),C=n.getCenterOffset({items:v,menuWidth:d}),I=0===m&&g?h:m;return n.firstPageOffset=h,n.lastPageOffset=C,{firstPageOffset:h,lastPageOffset:C,translate:I}},n.onItemClick=function(e){var t=n.props,r=t.clickWhenDrag,a=t.onSelect;if(n.state.xDraggedDistance>5&&!r)return!1;n.selected=e,a&&a(e)},n.getVisibleItems=function(e){var t=e.items,r=void 0===t?n.menuItems:t,a=e.wWidth,i=void 0===a?n.wWidth:a,s=e.menuPos,o=void 0===s?n.menuPos:s,l=e.menuWidth,u=void 0===l?n.menuWidth:l,f=e.offset,d=void 0===f?n.state.translate:f,c=e.firstPageOffset,m=void 0===c?n.firstPageOffset:c,g=e.translate,p=void 0===g?n.state.translate:g;return(r.items||r).filter(function(e){var t=e[1].getBoundingClientRect().width,a=n.getItemInd(r,e),s=n.getOffsetToItem({itemId:a,menuItems:r,translate:p,firstPageOffset:m});return n.elemVisible({x:s,elWidth:t,wWidth:i,menuPos:o,menuWidth:u,offset:d})})},n.elemVisible=function(e){var t=e.x,r=e.offset,a=void 0===r?0:r,i=e.elWidth,s=e.wWidth,o=void 0===s?n.wWidth:s,l=e.menuPos,u=void 0===l?n.menuPos:l,f=e.menuWidth,d=void 0===f?n.menuWidth:f,c=t+a;return c>=u-1&&c+i<=o-(o-(u+d))+1},n.getItemInd=function(e,t){return e&&t?e.findIndex(function(e){return e[0]===t[0]}):0},n.getNextItemInd=function(e,t){var r=n.menuItems;if(e){if(!t.length)return 0}else if(!t.length)return r.length;var a=e?n.getItemInd(r,t[0])-1:n.getItemInd(r,t.slice(-1)[0])+1;return a<0?0:a},n.getOffsetToItem=function(e){var t=e.itemId,r=e.menuItems,a=void 0===r?n.menuItems:r,i=e.translate,s=void 0===i?n.state.translate:i;return a.length?a[t>=a.length?a.length-1:t][1].getBoundingClientRect().x-s:0},n.getScrollRightOffset=function(e,t){var r=n.props.alignCenter,a=n.menuPos,i=n.lastPageOffset,s=n.getNextItem(e&&e.slice(-1)[0]?e.slice(-1)[0][0]:t.slice(-1)[0][0]),o=t.findIndex(function(e){return e[0]===s[0]}),l=n.getOffsetToItem({itemId:o,menuItems:t})-a,u=n.getVisibleItems({items:t,offset:-l});if(u.includes(t.slice(-1)[0]))return r?l+i:l;return r?l-n.getCenterOffset({items:u}):l},n.getScrollLeftOffset=function(e,t){var r=n.props.alignCenter,a=n.menuPos,i=n.menuWidth,s=n.firstPageOffset,o=n.getPrevItem(e&&e[0]?e[0][0]:t[0][0]),l=t.findIndex(function(e){return e[0]===o[0]}),u=n.getOffsetToItem({itemId:l,menuItems:t})-a-(i-n.getItemsWidth({items:[o]})),f=n.getVisibleItems({items:t,offset:-u});if(f.includes(t[0]))return r?-s:0;return r?u+n.getCenterOffset({items:f}):u},n.getAlignItemsOffset=function(){var e=n.menuWidth,t=n.allItemsWidth,r=n.firstPageOffset,a=n.lastPageOffset,i=n.menuItems,s=n.props.alignCenter,o=n.state.translate;if(t<e)return n.handleArrowClick(!s);var l=n.getVisibleItems({})||[],u=l.includes(i[0]),f=l.includes(i.slice(-1)[0]);if(!u&&!f)return o;if(u)return s?r:c.translate;var d=t-e;return s?-d-a:-d},n.getNextItem=function(e){var t=n.menuItems;return t[t.findIndex(function(t){return t[0]===e})+1]||t.slice(-1)[0]},n.getPrevItem=function(e){var t=n.menuItems;return t[t.findIndex(function(t){return t[0]===e})-1]||t[0]},n.getOffset=function(e){var t=n.menuItems,r=n.getVisibleItems({items:t});return e?n.getScrollLeftOffset(r,t):n.getScrollRightOffset(r,t)},n.getCenterOffset=function(e){var t=e.items,r=void 0===t?n.menuItems:t,a=e.menuWidth,i=void 0===a?n.menuWidth:a;return r.length?(i-n.getItemsWidth({items:r}))/2:0},n.handleWheel=function(e){if(!n.props.wheel)return!1;e.stopPropagation(),e.preventDefault(),e.deltaY<0?n.handleArrowClick():n.handleArrowClick(!1)},n.handleArrowClickRight=function(){n.handleArrowClick(!1)},n.handleArrowClick=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=n.props.alignCenter,r=n.allItemsWidth,a=n.menuWidth,i=n.firstPageOffset,s=n.lastPageOffset,o=n.state.translate;if(!t&&!e&&a>=r)return!1;var l=-n.getOffset(e);if(e&&n.itBeforeStart(l)&&(l=t?i:c.translate),!e&&n.itAfterEnd(l)){var u=r-a;l=t?-u-s:-u}n.setState({translate:l,xPoint:c.xPoint,startDragTranslate:null,xDraggedDistance:null},function(){o!==l&&n.onUpdate({})})},n.itBeforeStart=function(e){var t=n.props.alignCenter,r=n.firstPageOffset;return t?e>r:e>c.translate},n.itAfterEnd=function(e){var t=n.props.alignCenter,r=n.menuWidth,a=n.allItemsWidth,i=n.lastPageOffset;return t?e<c.translate&&Math.abs(e)>a-r+i:e<c.translate&&Math.abs(e)>a-r},n.getPoint=function(e){return e.touches&&e.touches.length?e.touches[0].clientX:e.clientX},n.handleDragStart=function(){if(!n.props.dragging)return!1;var e=n.state.translate;n.setState({dragging:!0,xPoint:0,startDragTranslate:e,xDraggedDistance:0})},n.handleDrag=function(e){var t=n.props.dragging,r=n.state,a=r.translate,i=r.dragging,s=r.xPoint,o=r.xDraggedDistance;if(!t||!i)return!1;var l=n.getPoint(e),u=s===c.xPoint?c.xPoint:s-l,f=a-u;n.itBeforeStart(f)&&(f-=Math.abs(u)/2),n.itAfterEnd(f)&&(f+=Math.abs(u)/2),n.setState({xPoint:l,translate:f||c.translate,xDraggedDistance:o+Math.abs(u)})},n.handleDragStop=function(e){var t=n.allItemsWidth,r=n.menuWidth,a=n.firstPageOffset,i=n.lastPageOffset,s=n.startDragTranslate,o=n.state,l=o.dragging,u=o.xPoint,f=void 0===u?n.getPoint(e):u,d=o.translate,m=n.props,g=m.dragging,p=m.alignCenter;if(!g||!l)return!1;var h=d;if(n.itBeforeStart(d)&&(h=p?a:0,f=c.xPoint),n.itAfterEnd(d)){var v=t-r;h=p?-v-i:-v,f=c.xPoint}!p&&r>=t&&(h=0,f=c.xPoint),n.setState({dragging:!1,xPoint:f,translate:h},function(){s!==h&&n.onUpdate({})})},n.onUpdate=function(e){var t=e.translate,r=void 0===t?n.state.translate:t,a=n.props.onUpdate;a&&a({translate:r})},n.ref={},n.initialized=!1,n.mounted=!1,n.needUpdate=!1,n.allItemsWidth=0,n.menuPos=0,n.menuWidth=0,n.wWidth=0,n.firstPageOffset=0,n.lastPageOffset=0,n}return f(t,i.default.Component),a(t,[{key:"componentDidMount",value:function(){this.setInitial(),window.addEventListener("resize",this.setInitial),document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragStop)}},{key:"shouldComponentUpdate",value:function(e,t){var n=this.state,r=n.translate,a=n.dragging,i=t.translate,s=t.dragging,o=this.props,l=o.translate,u=o.selected,f=e.translate,c=e.selected,m=d(f)&&l!==f,g=d(c)&&u!==c,p=m||g,h=!1;return this.props.data!==e.data&&(h=!0,this.needUpdate=h),p&&(g&&(this.selected=c),m&&!h&&this.setState({translate:f})),h||r!==i||a!==s||p}},{key:"componentDidUpdate",value:function(){this.needUpdate&&(this.needUpdate=!1,this.setInitial()),this.setMounted()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setInitial),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragStop)}},{key:"render",value:function(){var e=this.props,t=e.data,n=e.arrowLeft,a=e.arrowRight,s=e.transition,o=e.arrowClass,l=e.menuClass,u=e.wrapperClass,f=e.innerWrapperClass,d=e.itemClass,c=e.itemClassActive,h=e.menuStyle,C=e.wrapperStyle,I=this.state,y=I.translate,P=I.dragging,O=this.selected,b=this.mounted;if(!t||!t.length)return null;var w=r({},g,h),W=r({},p,C);return i.default.createElement("div",{className:l,style:w,onWheel:this.handleWheel},n&&i.default.createElement(m,{className:o,onClick:this.handleArrowClick},n),i.default.createElement("div",{className:u,style:W,ref:this.setWrapperRef,onMouseDown:this.handleDragStart,onTouchStart:this.handleDragStart,onTouchEnd:this.handleDragStop,onMouseMove:this.handleDrag,onTouchMove:this.handleDrag},i.default.createElement(v,{data:t,translate:y,dragging:P,mounted:b,transition:s,selected:O,setRef:this.setRef,onClick:this.onItemClick,innerWrapperClass:f,itemClass:d,itemClassActive:c})),a&&i.default.createElement(m,{className:o,onClick:this.handleArrowClickRight},a))}}]),t}(),I=t.defaultProps={data:c.data,translate:c.translate,selected:c.selected,transition:c.transition,dragging:c.dragging,clickWhenDrag:c.clickWhenDrag,alignCenter:c.alignCenter,wrapperClass:c.wrapperClass,innerWrapperClass:c.innerWrapperClass,itemClass:c.itemClass,itemClassActive:c.itemClassActive,arrowClass:c.arrowClass,menuClass:c.menuClass,wheel:c.wheel},y=t.propTypes={data:s.default.array.isRequired,selected:s.default.oneOfType([s.default.number,s.default.string]),translate:s.default.number,transition:s.default.number,arrowLeft:s.default.object,arrowRight:s.default.object,alignCenter:s.default.bool,onSelect:s.default.func,onClick:s.default.func,onUpdate:s.default.func,dragging:s.default.bool,clickWhenDrag:s.default.bool,wheel:s.default.bool,wrapperClass:s.default.string,innerWrapperClass:s.default.string,itemClass:s.default.string,itemClassActive:s.default.string,arrowClass:s.default.string,menuClass:s.default.string,menuStyle:s.default.object,wrapperStyle:s.default.object};C.defaultProps=I,C.propTypes=y,t.default=C},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(1);function a(){}e.exports=function(){function e(e,t,n,a,i,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=a,n.PropTypes=n,n}},function(e,t,n){e.exports=n(2)()},function(e,t){e.exports=void 0},function(e,t,n){"use strict";n.r(t);var r=n(0);t.default=r}]);