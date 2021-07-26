/*! smooth-scroll v16.1.2 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(q){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},F=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},L=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(q.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof q.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var A,a,O,C,M={};M.cancelScroll=function(e){cancelAnimationFrame(C),C=null,e||H("scrollCancel",A)},M.animateScroll=function(i,c,e){M.cancelScroll();var s=F(A||I,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=q.pageYOffset;s.header&&!O&&(O=document.querySelector(s.header));var n,o,a,m,r,d,f,h,p=x(O),g=u?i:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,L()-q.innerHeight)),a})(t,p,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),y=g-l,v=L(),w=0,S=(n=y,a=(o=s).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&a>o.durationMax?o.durationMax:o.durationMin&&a<o.durationMin?o.durationMin:parseInt(a,10)),E=function(e,t){var n,o,a,r=q.pageYOffset;if(e==t||r==t||(l<t&&q.innerHeight+r)>=v)return M.cancelScroll(!0),o=t,a=u,0===(n=i)&&document.body.focus(),a||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),q.scrollTo(0,o)),H("scrollStop",s,i,c),!(C=m=null)},b=function(e){var t,n,o;m||(m=e),w+=e-m,d=l+y*(n=r=1<(r=0===S?0:w/S)?1:r,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),q.scrollTo(0,Math.floor(d)),E(d,g)||(C=q.requestAnimationFrame(b),m=e)};0===q.pageYOffset&&q.scrollTo(0,0),f=i,h=s,u||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in q&&q.matchMedia("(prefers-reduced-motion)").matches?q.scrollTo(0,Math.floor(g)):(H("scrollStart",s,i,c),M.cancelScroll(!0),q.requestAnimationFrame(b))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(A.ignore)&&a.hostname===q.location.hostname&&a.pathname===q.location.pathname&&/#/.test(a.href)){var t,n;try{t=r(decodeURIComponent(a.hash))}catch(e){t=r(a.hash)}if("#"===t){if(!A.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=q.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||q.pageYOffset},document.title,t||q.location.href)}})(A),M.animateScroll(n,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||M.animateScroll(t,null,{updateURL:!1})}};M.destroy=function(){A&&(document.removeEventListener("click",t,!1),q.removeEventListener("popstate",n,!1),M.cancelScroll(),C=O=a=A=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in q&&"requestAnimationFrame"in q&&"closest"in q.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";M.destroy(),A=F(I,e||{}),O=A.header?document.querySelector(A.header):null,document.addEventListener("click",t,!1),A.updateURL&&A.popstate&&q.addEventListener("popstate",n,!1)})(),M}}));
/**
 * This work is licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
 */

 (function() {
    // Return early if we're not running inside of the browser.
    if (typeof window === 'undefined') {
      return;
    }
  
    // Convenience function for converting NodeLists.
    /** @type {typeof Array.prototype.slice} */
    const slice = Array.prototype.slice;
  
    /**
     * IE has a non-standard name for "matches".
     * @type {typeof Element.prototype.matches}
     */
    const matches =
        Element.prototype.matches || Element.prototype.msMatchesSelector;
  
    /** @type {string} */
    const _focusableElementsString = ['a[href]',
                                      'area[href]',
                                      'input:not([disabled])',
                                      'select:not([disabled])',
                                      'textarea:not([disabled])',
                                      'button:not([disabled])',
                                      'details',
                                      'summary',
                                      'iframe',
                                      'object',
                                      'embed',
                                      '[contenteditable]'].join(',');
  
    /**
     * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
     * attribute.
     *
     * Its main functions are:
     *
     * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
     *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
     *   each focusable node in the subtree with the singleton `InertManager` which manages all known
     *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
     *   instance exists for each focusable node which has at least one inert root as an ancestor.
     *
     * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
     *   attribute is removed from the root node). This is handled in the destructor, which calls the
     *   `deregister` method on `InertManager` for each managed inert node.
     */
    class InertRoot {
      /**
       * @param {!Element} rootElement The Element at the root of the inert subtree.
       * @param {!InertManager} inertManager The global singleton InertManager object.
       */
      constructor(rootElement, inertManager) {
        /** @type {!InertManager} */
        this._inertManager = inertManager;
  
        /** @type {!Element} */
        this._rootElement = rootElement;
  
        /**
         * @type {!Set<!InertNode>}
         * All managed focusable nodes in this InertRoot's subtree.
         */
        this._managedNodes = new Set();
  
        // Make the subtree hidden from assistive technology
        if (this._rootElement.hasAttribute('aria-hidden')) {
          /** @type {?string} */
          this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
        } else {
          this._savedAriaHidden = null;
        }
        this._rootElement.setAttribute('aria-hidden', 'true');
  
        // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
        this._makeSubtreeUnfocusable(this._rootElement);
  
        // Watch for:
        // - any additions in the subtree: make them unfocusable too
        // - any removals from the subtree: remove them from this inert root's managed nodes
        // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
        //   element, make that node a managed node.
        this._observer = new MutationObserver(this._onMutation.bind(this));
        this._observer.observe(this._rootElement, {attributes: true, childList: true, subtree: true});
      }
  
      /**
       * Call this whenever this object is about to become obsolete.  This unwinds all of the state
       * stored in this object and updates the state of all of the managed nodes.
       */
      destructor() {
        this._observer.disconnect();
  
        if (this._rootElement) {
          if (this._savedAriaHidden !== null) {
            this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
          } else {
            this._rootElement.removeAttribute('aria-hidden');
          }
        }
  
        this._managedNodes.forEach(function(inertNode) {
          this._unmanageNode(inertNode.node);
        }, this);
  
        // Note we cast the nulls to the ANY type here because:
        // 1) We want the class properties to be declared as non-null, or else we
        //    need even more casts throughout this code. All bets are off if an
        //    instance has been destroyed and a method is called.
        // 2) We don't want to cast "this", because we want type-aware optimizations
        //    to know which properties we're setting.
        this._observer = /** @type {?} */ (null);
        this._rootElement = /** @type {?} */ (null);
        this._managedNodes = /** @type {?} */ (null);
        this._inertManager = /** @type {?} */ (null);
      }
  
      /**
       * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
       */
      get managedNodes() {
        return new Set(this._managedNodes);
      }
  
      /** @return {boolean} */
      get hasSavedAriaHidden() {
        return this._savedAriaHidden !== null;
      }
  
      /** @param {?string} ariaHidden */
      set savedAriaHidden(ariaHidden) {
        this._savedAriaHidden = ariaHidden;
      }
  
      /** @return {?string} */
      get savedAriaHidden() {
        return this._savedAriaHidden;
      }
  
      /**
       * @param {!Node} startNode
       */
      _makeSubtreeUnfocusable(startNode) {
        composedTreeWalk(startNode, (node) => this._visitNode(node));
  
        let activeElement = document.activeElement;
  
        if (!document.body.contains(startNode)) {
          // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
          let node = startNode;
          /** @type {!ShadowRoot|undefined} */
          let root = undefined;
          while (node) {
            if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              root = /** @type {!ShadowRoot} */ (node);
              break;
            }
            node = node.parentNode;
          }
          if (root) {
            activeElement = root.activeElement;
          }
        }
        if (startNode.contains(activeElement)) {
          activeElement.blur();
          // In IE11, if an element is already focused, and then set to tabindex=-1
          // calling blur() will not actually move the focus.
          // To work around this we call focus() on the body instead.
          if (activeElement === document.activeElement) {
            document.body.focus();
          }
        }
      }
  
      /**
       * @param {!Node} node
       */
      _visitNode(node) {
        if (node.nodeType !== Node.ELEMENT_NODE) {
          return;
        }
        const element = /** @type {!Element} */ (node);
  
        // If a descendant inert root becomes un-inert, its descendants will still be inert because of
        // this inert root, so all of its managed nodes need to be adopted by this InertRoot.
        if (element !== this._rootElement && element.hasAttribute('inert')) {
          this._adoptInertRoot(element);
        }
  
        if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
          this._manageNode(element);
        }
      }
  
      /**
       * Register the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
      _manageNode(node) {
        const inertNode = this._inertManager.register(node, this);
        this._managedNodes.add(inertNode);
      }
  
      /**
       * Unregister the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
      _unmanageNode(node) {
        const inertNode = this._inertManager.deregister(node, this);
        if (inertNode) {
          this._managedNodes.delete(inertNode);
        }
      }
  
      /**
       * Unregister the entire subtree starting at `startNode`.
       * @param {!Node} startNode
       */
      _unmanageSubtree(startNode) {
        composedTreeWalk(startNode, (node) => this._unmanageNode(node));
      }
  
      /**
       * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
       * @param {!Element} node
       */
      _adoptInertRoot(node) {
        let inertSubroot = this._inertManager.getInertRoot(node);
  
        // During initialisation this inert root may not have been registered yet,
        // so register it now if need be.
        if (!inertSubroot) {
          this._inertManager.setInert(node, true);
          inertSubroot = this._inertManager.getInertRoot(node);
        }
  
        inertSubroot.managedNodes.forEach(function(savedInertNode) {
          this._manageNode(savedInertNode.node);
        }, this);
      }
  
      /**
       * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
      _onMutation(records, self) {
        records.forEach(function(record) {
          const target = /** @type {!Element} */ (record.target);
          if (record.type === 'childList') {
            // Manage added nodes
            slice.call(record.addedNodes).forEach(function(node) {
              this._makeSubtreeUnfocusable(node);
            }, this);
  
            // Un-manage removed nodes
            slice.call(record.removedNodes).forEach(function(node) {
              this._unmanageSubtree(node);
            }, this);
          } else if (record.type === 'attributes') {
            if (record.attributeName === 'tabindex') {
              // Re-initialise inert node if tabindex changes
              this._manageNode(target);
            } else if (target !== this._rootElement &&
                      record.attributeName === 'inert' &&
                      target.hasAttribute('inert')) {
              // If a new inert root is added, adopt its managed nodes and make sure it knows about the
              // already managed nodes from this inert subroot.
              this._adoptInertRoot(target);
              const inertSubroot = this._inertManager.getInertRoot(target);
              this._managedNodes.forEach(function(managedNode) {
                if (target.contains(managedNode.node)) {
                  inertSubroot._manageNode(managedNode.node);
                }
              });
            }
          }
        }, this);
      }
    }
  
    /**
     * `InertNode` initialises and manages a single inert node.
     * A node is inert if it is a descendant of one or more inert root elements.
     *
     * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
     * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
     * is intrinsically focusable or not.
     *
     * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
     * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
     * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
     * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
     * or removes the `tabindex` attribute if the element is intrinsically focusable.
     */
    class InertNode {
      /**
       * @param {!Node} node A focusable element to be made inert.
       * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
       */
      constructor(node, inertRoot) {
        /** @type {!Node} */
        this._node = node;
  
        /** @type {boolean} */
        this._overrodeFocusMethod = false;
  
        /**
         * @type {!Set<!InertRoot>} The set of descendant inert roots.
         *    If and only if this set becomes empty, this node is no longer inert.
         */
        this._inertRoots = new Set([inertRoot]);
  
        /** @type {?number} */
        this._savedTabIndex = null;
  
        /** @type {boolean} */
        this._destroyed = false;
  
        // Save any prior tabindex info and make this node untabbable
        this.ensureUntabbable();
      }
  
      /**
       * Call this whenever this object is about to become obsolete.
       * This makes the managed node focusable again and deletes all of the previously stored state.
       */
      destructor() {
        this._throwIfDestroyed();
  
        if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
          const element = /** @type {!Element} */ (this._node);
          if (this._savedTabIndex !== null) {
            element.setAttribute('tabindex', this._savedTabIndex);
          } else {
            element.removeAttribute('tabindex');
          }
  
          // Use `delete` to restore native focus method.
          if (this._overrodeFocusMethod) {
            delete element.focus;
          }
        }
  
        // See note in InertRoot.destructor for why we cast these nulls to ANY.
        this._node = /** @type {?} */ (null);
        this._inertRoots = /** @type {?} */ (null);
        this._destroyed = true;
      }
  
      /**
       * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
       * If the object has been destroyed, any attempt to access it will cause an exception.
       */
      get destroyed() {
        return /** @type {!InertNode} */ (this)._destroyed;
      }
  
      /**
       * Throw if user tries to access destroyed InertNode.
       */
      _throwIfDestroyed() {
        if (this.destroyed) {
          throw new Error('Trying to access destroyed InertNode');
        }
      }
  
      /** @return {boolean} */
      get hasSavedTabIndex() {
        return this._savedTabIndex !== null;
      }
  
      /** @return {!Node} */
      get node() {
        this._throwIfDestroyed();
        return this._node;
      }
  
      /** @param {?number} tabIndex */
      set savedTabIndex(tabIndex) {
        this._throwIfDestroyed();
        this._savedTabIndex = tabIndex;
      }
  
      /** @return {?number} */
      get savedTabIndex() {
        this._throwIfDestroyed();
        return this._savedTabIndex;
      }
  
      /** Save the existing tabindex value and make the node untabbable and unfocusable */
      ensureUntabbable() {
        if (this.node.nodeType !== Node.ELEMENT_NODE) {
          return;
        }
        const element = /** @type {!Element} */ (this.node);
        if (matches.call(element, _focusableElementsString)) {
          if (/** @type {!HTMLElement} */ (element).tabIndex === -1 &&
              this.hasSavedTabIndex) {
            return;
          }
  
          if (element.hasAttribute('tabindex')) {
            this._savedTabIndex = /** @type {!HTMLElement} */ (element).tabIndex;
          }
          element.setAttribute('tabindex', '-1');
          if (element.nodeType === Node.ELEMENT_NODE) {
            element.focus = function() {};
            this._overrodeFocusMethod = true;
          }
        } else if (element.hasAttribute('tabindex')) {
          this._savedTabIndex = /** @type {!HTMLElement} */ (element).tabIndex;
          element.removeAttribute('tabindex');
        }
      }
  
      /**
       * Add another inert root to this inert node's set of managing inert roots.
       * @param {!InertRoot} inertRoot
       */
      addInertRoot(inertRoot) {
        this._throwIfDestroyed();
        this._inertRoots.add(inertRoot);
      }
  
      /**
       * Remove the given inert root from this inert node's set of managing inert roots.
       * If the set of managing inert roots becomes empty, this node is no longer inert,
       * so the object should be destroyed.
       * @param {!InertRoot} inertRoot
       */
      removeInertRoot(inertRoot) {
        this._throwIfDestroyed();
        this._inertRoots.delete(inertRoot);
        if (this._inertRoots.size === 0) {
          this.destructor();
        }
      }
    }
  
    /**
     * InertManager is a per-document singleton object which manages all inert roots and nodes.
     *
     * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
     * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
     * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
     * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
     * is created for each such node, via the `_managedNodes` map.
     */
    class InertManager {
      /**
       * @param {!Document} document
       */
      constructor(document) {
        if (!document) {
          throw new Error('Missing required argument; InertManager needs to wrap a document.');
        }
  
        /** @type {!Document} */
        this._document = document;
  
        /**
         * All managed nodes known to this InertManager. In a map to allow looking up by Node.
         * @type {!Map<!Node, !InertNode>}
         */
        this._managedNodes = new Map();
  
        /**
         * All inert roots known to this InertManager. In a map to allow looking up by Node.
         * @type {!Map<!Node, !InertRoot>}
         */
        this._inertRoots = new Map();
  
        /**
         * Observer for mutations on `document.body`.
         * @type {!MutationObserver}
         */
        this._observer = new MutationObserver(this._watchForInert.bind(this));
  
        // Add inert style.
        addInertStyle(document.head || document.body || document.documentElement);
  
        // Wait for document to be loaded.
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
        } else {
          this._onDocumentLoaded();
        }
      }
  
      /**
       * Set whether the given element should be an inert root or not.
       * @param {!Element} root
       * @param {boolean} inert
       */
      setInert(root, inert) {
        if (inert) {
          if (this._inertRoots.has(root)) { // element is already inert
            return;
          }
  
          const inertRoot = new InertRoot(root, this);
          root.setAttribute('inert', '');
          this._inertRoots.set(root, inertRoot);
          // If not contained in the document, it must be in a shadowRoot.
          // Ensure inert styles are added there.
          if (!this._document.body.contains(root)) {
            let parent = root.parentNode;
            while (parent) {
              if (parent.nodeType === 11) {
                addInertStyle(parent);
              }
              parent = parent.parentNode;
            }
          }
        } else {
          if (!this._inertRoots.has(root)) { // element is already non-inert
            return;
          }
  
          const inertRoot = this._inertRoots.get(root);
          inertRoot.destructor();
          this._inertRoots.delete(root);
          root.removeAttribute('inert');
        }
      }
  
      /**
       * Get the InertRoot object corresponding to the given inert root element, if any.
       * @param {!Node} element
       * @return {!InertRoot|undefined}
       */
      getInertRoot(element) {
        return this._inertRoots.get(element);
      }
  
      /**
       * Register the given InertRoot as managing the given node.
       * In the case where the node has a previously existing inert root, this inert root will
       * be added to its set of inert roots.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {!InertNode} inertNode
       */
      register(node, inertRoot) {
        let inertNode = this._managedNodes.get(node);
        if (inertNode !== undefined) { // node was already in an inert subtree
          inertNode.addInertRoot(inertRoot);
        } else {
          inertNode = new InertNode(node, inertRoot);
        }
  
        this._managedNodes.set(node, inertNode);
  
        return inertNode;
      }
  
      /**
       * De-register the given InertRoot as managing the given inert node.
       * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
       * node from the InertManager's set of managed nodes if it is destroyed.
       * If the node is not currently managed, this is essentially a no-op.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
       */
      deregister(node, inertRoot) {
        const inertNode = this._managedNodes.get(node);
        if (!inertNode) {
          return null;
        }
  
        inertNode.removeInertRoot(inertRoot);
        if (inertNode.destroyed) {
          this._managedNodes.delete(node);
        }
  
        return inertNode;
      }
  
      /**
       * Callback used when document has finished loading.
       */
      _onDocumentLoaded() {
        // Find all inert roots in document and make them actually inert.
        const inertElements = slice.call(this._document.querySelectorAll('[inert]'));
        inertElements.forEach(function(inertElement) {
          this.setInert(inertElement, true);
        }, this);
  
        // Comment this out to use programmatic API only.
        this._observer.observe(this._document.body || this._document.documentElement, {attributes: true, subtree: true, childList: true});
      }
  
      /**
       * Callback used when mutation observer detects attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
      _watchForInert(records, self) {
        const _this = this;
        records.forEach(function(record) {
          switch (record.type) {
          case 'childList':
            slice.call(record.addedNodes).forEach(function(node) {
              if (node.nodeType !== Node.ELEMENT_NODE) {
                return;
              }
              const inertElements = slice.call(node.querySelectorAll('[inert]'));
              if (matches.call(node, '[inert]')) {
                inertElements.unshift(node);
              }
              inertElements.forEach(function(inertElement) {
                this.setInert(inertElement, true);
              }, _this);
            }, _this);
            break;
          case 'attributes':
            if (record.attributeName !== 'inert') {
              return;
            }
            const target = /** @type {!Element} */ (record.target);
            const inert = target.hasAttribute('inert');
            _this.setInert(target, inert);
            break;
          }
        }, this);
      }
    }
  
    /**
     * Recursively walk the composed tree from |node|.
     * @param {!Node} node
     * @param {(function (!Element))=} callback Callback to be called for each element traversed,
     *     before descending into child nodes.
     * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
     */
    function composedTreeWalk(node, callback, shadowRootAncestor) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        const element = /** @type {!Element} */ (node);
        if (callback) {
          callback(element);
        }
  
        // Descend into node:
        // If it has a ShadowRoot, ignore all child elements - these will be picked
        // up by the <content> or <shadow> elements. Descend straight into the
        // ShadowRoot.
        const shadowRoot = /** @type {!HTMLElement} */ (element).shadowRoot;
        if (shadowRoot) {
          composedTreeWalk(shadowRoot, callback, shadowRoot);
          return;
        }
  
        // If it is a <content> element, descend into distributed elements - these
        // are elements from outside the shadow root which are rendered inside the
        // shadow DOM.
        if (element.localName == 'content') {
          const content = /** @type {!HTMLContentElement} */ (element);
          // Verifies if ShadowDom v0 is supported.
          const distributedNodes = content.getDistributedNodes ?
            content.getDistributedNodes() : [];
          for (let i = 0; i < distributedNodes.length; i++) {
            composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
          }
          return;
        }
  
        // If it is a <slot> element, descend into assigned nodes - these
        // are elements from outside the shadow root which are rendered inside the
        // shadow DOM.
        if (element.localName == 'slot') {
          const slot = /** @type {!HTMLSlotElement} */ (element);
          // Verify if ShadowDom v1 is supported.
          const distributedNodes = slot.assignedNodes ?
            slot.assignedNodes({flatten: true}) : [];
          for (let i = 0; i < distributedNodes.length; i++) {
            composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
          }
          return;
        }
      }
  
      // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
      // element, nor a <shadow> element recurse normally.
      let child = node.firstChild;
      while (child != null) {
        composedTreeWalk(child, callback, shadowRootAncestor);
        child = child.nextSibling;
      }
    }
  
    /**
     * Adds a style element to the node containing the inert specific styles
     * @param {!Node} node
     */
    function addInertStyle(node) {
      if (node.querySelector('style#inert-style, link#inert-style')) {
        return;
      }
      const style = document.createElement('style');
      style.setAttribute('id', 'inert-style');
      style.textContent = '\n'+
                          '[inert] {\n' +
                          '  pointer-events: none;\n' +
                          '  cursor: default;\n' +
                          '}\n' +
                          '\n' +
                          '[inert], [inert] * {\n' +
                          '  -webkit-user-select: none;\n' +
                          '  -moz-user-select: none;\n' +
                          '  -ms-user-select: none;\n' +
                          '  user-select: none;\n' +
                          '}\n';
      node.appendChild(style);
    }
  
    if (!Element.prototype.hasOwnProperty('inert')) {
      /** @type {!InertManager} */
      const inertManager = new InertManager(document);
      
      Object.defineProperty(Element.prototype, 'inert', {
        enumerable: true,
        /** @this {!Element} */
        get: function() {
          return this.hasAttribute('inert');
        },
        /** @this {!Element} */
        set: function(inert) {
          inertManager.setInert(this, inert);
        },
      });
    }
  })();




