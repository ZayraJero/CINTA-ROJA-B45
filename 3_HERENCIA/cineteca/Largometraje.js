class Largometraje {
    constructor(titulo, duración, director, actores, procedencia) {
        this.titulo = titulo;
        this.duración = duración;
        this.director = director;
        this.actores = actores;
        this.procedencia = procedencia;
    }
    producir() {
        console.log('holi');
    }
}

module.exports = Largometraje;