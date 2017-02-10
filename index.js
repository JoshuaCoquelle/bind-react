/**
 * Accepts an array of methods/method names and will resolve their bindings in the "to()" method.
 *
 * @param {Array|String} methodsArray ~ An array of method names to bind, or optionally a string (if singular).
 *
 * ex:
 * array:  Bind(['foo', 'bar']).to(this);
 * string: Bind('foo').to(this);
 */
function Bind(methodsArray) {
    var methods = methodsArray;

    return {
        /**
         * Bind all methods from 'Bind()' to the desired context.
         *
         * @param  {Object} context ~ Scope that you would like to bind to.
         *
         * This will typically be your component constructor ex: App.
         */
        to: function(context) {
            var $this = context;

            // If the method exists, bind the method to the passed context.
            methods.forEach(function(method) {
                if (!$this[method]) {
                    return;
                }

                $this[method] = $this[method].bind($this);
            });
        }
    };
}

module.exports = Bind;
