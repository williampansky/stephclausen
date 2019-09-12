const autoprefixer = require(`autoprefixer`);
const postcssPresetEnv = require(`postcss-preset-env`);

/**
 * @name postcss
 * @see https://github.com/postcss/postcss
 */
module.exports = {
    plugins: [
        /**
         * Autoprefixer parses CSS and adds vendor prefixes to CSS rules
         * using values from [CanIUse]. It is recommended by Google & used in
         * Twitter and Alibaba. Write your CSS rules without vendor
         * prefixes; _(in fact, forget about them entirely)_.
         *
         * @summary Parse CSS and add vendor prefixes to rules by [CanIUse].
         * @member autoprefixer
         * @memberof postcss
         * @see https://github.com/postcss/autoprefixer
         * [CanIUse](https://caniuse.com/)
         */
        autoprefixer({
            // add prefixes
            add: true,
            // removed outdated prefixes
            remove: true,
            // add prefixes for @supports parameters
            supports: true,
            // add prefixes only for final and IE 10 versions of specification
            flexbox: 'no-2009',
            // enable grid translations, but exclude autoplacement support
            grid: 'no-autoplace'
        }),

        /**
         * The `stage` option determines which CSS features to polyfill, based
         * upon their stability in the process of becoming implemented web
         * standards. The `stage` can be `0` (experimental) through `4` (stable).
         *
         * @summary Convert modern CSS into something browsers understand.
         * @member postcssPresetEnv
         * @memberof postcss
         * @see https://github.com/csstools/postcss-preset-env
         */
        postcssPresetEnv({
            stage: 0
        })
    ]
};
