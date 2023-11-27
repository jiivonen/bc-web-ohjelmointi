const kohde = {
    x: Math.random() * 300 + 50,
    y: Math.random() * 200 + 50,
    tarkistaX: function(x) {
        if (x < this.x - 20) {
            return -1;
        }
        else if (x > this.x + 20) {
            return 1;
        }
        else {
            return 0;
        }
    },
    tarkistaY: function(y) {
        if (y < this.y - 20) {
            return -1;
        }
        else if (y > this.y + 20) {
            return 1;
        }
        else {
            return 0;
        }
    }
};