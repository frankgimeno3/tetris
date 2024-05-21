const KeyboardService = {
    handleArrowPress: null,

    init: function(arrowCallback, spaceCallback) {
        this.handleArrowPress = arrowCallback;
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keydown', function(event) {
            if (event.key === ' ') {
                spaceCallback();
            }
        });
    },

    handleKeyDown: function(event) {
        switch (event.key) {
            case 'ArrowDown':
                KeyboardService.handleArrowPress('down');
                break;
            case 'ArrowUp':
                KeyboardService.handleArrowPress('up');
                break;
            case 'ArrowLeft':
                KeyboardService.handleArrowPress('left');
                break;
            case 'ArrowRight':
                KeyboardService.handleArrowPress('right');
                break;
            default:
                break;
        }
    },
};

export default KeyboardService;
