const Largometraje = require('./Largometraje');

class Documental extends Largometraje {
    constructor(titulo, duracion, director, actores, procedecia, genero, esReal) {
        super(titulo, duracion, director, actores, procedecia);
        this.genero = genero;
        this.esReal = esReal;
    }
}

module.exports = Documental;