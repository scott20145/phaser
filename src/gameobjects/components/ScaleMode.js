var ScaleModes = require('../../renderer/ScaleModes');

/**
 * Provides methods used for getting and setting the scale of a Game Object.
 * 
 * @name Phaser.GameObjects.Components.ScaleMode
 * @since 3.0.0
 */

var ScaleMode = {

    _scaleMode: ScaleModes.DEFAULT,

    /**
     * The Scale Mode being used by this Game Object.
     * Can be either `ScaleModes.LINEAR` or `ScaleModes.NEAREST`.
     * 
     * @name Phaser.GameObjects.Components.ScaleMode#scaleMode
     * @type {integer}
     * @since 3.0.0
     */
    scaleMode: {

        get: function ()
        {
            return this._scaleMode;
        },

        set: function (value)
        {
            if (value === ScaleModes.LINEAR || value === ScaleModes.NEAREST)
            {
                this._scaleMode = value;
            }
        }

    },

    /**
     * Sets the Scale Mode being used by this Game Object.
     * Can be either `ScaleModes.LINEAR` or `ScaleModes.NEAREST`.
     * 
     * @method Phaser.GameObjects.Components.ScaleMode#setScaleMode
     * @since 3.0.0
     *
     * @param {integer} value - The Scale Mode to be used by this Game Object.
     * 
     * @return {Phaser.GameObjects.GameObject} This Game Object instance.
     */
    setScaleMode: function (value)
    {
        this.scaleMode = value;

        return this;
    }

};

module.exports = ScaleMode;
