/**
 * Set font size by inline style
 */
(function(wysihtml5) {

  wysihtml5.commands.fontSizeStyle = {
    exec: function(composer, command, size) {
      size = size.size || size;
      if (!(/^\s*$/).test(size)) {
        wysihtml5.commands.formatInline.exec(composer, command, {styleProperty: "fontSize", styleValue: size});
      }
    },

    state: function(composer, command, size) {
      return wysihtml5.commands.formatInline.state(composer, command, {styleProperty: "fontSize"});
    },

    stateValue: function(composer, command) {
      var st = this.state(composer, command),
          styleStr, fontsizeMatches,
          val = false;

      if (st && wysihtml5.lang.object(st).isArray()) {
          st = st[0];
      }
      if (st) {
        styleStr = st.getAttribute('style');
        if (styleStr) {
          return wysihtml5.quirks.styleParser.parseFontSize(styleStr);
        }
      }
      return false;
    }
  };
})(wysihtml5);
