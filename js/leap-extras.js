Leap.Controller.plugin('leapExtras', function() {

    function radians2degrees(radians) {
        return radians * (180 / Math.PI);
    }

    return {
        frame: {
            getHandsCount: function () {
                return this.hands.length;
            },

            getFingersCount: function () {
                return _.reduce(this.hands, function (memo, hand) {
                    return memo + hand.fingers.length;
                }, 0);
            },

            getExtendedFingersCount: function () {
                return _.reduce(this.hands, function (memo, hand) {
                    return memo + _.filter(hand.fingers, function (finger) { return finger.extended }).length;
                }, 0);
            },

            getLeftHand: function () {
                return _.findWhere(this.hands, { type: 'left' });
            },

            getRightHand: function () {
                return _.findWhere(this.hands, { type: 'right' });
            },

            getFrameRate: function () {
                return this.currentFrameRate;
            }
        },

        hand: {
            pitchDegree: function () {
                return radians2degrees(this.pitch());
            },

            rollDegree: function () {
                return radians2degrees(this.roll());
            },

            yawDegree: function () {
                return radians2degrees(this.yaw());
            }
        }
    };
});
