// Ejemplo de esquema Camiseta (simplificado)
const CamisetaSchema = new Schema({
  creador: { type: Schema.Types.ObjectId, ref: 'Usuario' },
  torsoColor: String,
  mangaIzqColor: String,
  mangaDerColor: String,
  cuelloColor: String,
  fechaCreacion: { type: Date, default: Date.now },
  votos: [ votoSchema ],       // (ver siguiente sección)
  calificacion: { type: Number, default: 0 }
});


const Camiseta = model('Camiseta', CamisetaSchema);

module.exports = Camiseta;