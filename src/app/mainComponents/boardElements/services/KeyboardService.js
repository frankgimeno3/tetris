const KeyboardService = {
    handleArrowPress: null,

    init: function(spaceCallback) {
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
                console.log("Arrow down");
                KeyboardService.handleArrowPress('down');
                break;
            case 'ArrowUp':
                console.log("Arrow up");
                KeyboardService.handleArrowPress('up');
                break;
            case 'ArrowLeft':
                console.log("Arrow left");
                KeyboardService.handleArrowPress('left');
                break;
            case 'ArrowRight':
                console.log("Arrow right");
                KeyboardService.handleArrowPress('right');
                break;
            default:
                break;
        }
    },
};

export default KeyboardService;
