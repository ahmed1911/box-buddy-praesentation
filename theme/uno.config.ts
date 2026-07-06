// Plain-Objekt ohne `unocss`-Import: das Theme wird per Pfad referenziert und
// hat kein eigenes node_modules, daher würde ein Import hier fehlschlagen.
// Slidev merged diese Config in die UnoCSS-Instanz der Präsentation.
export default {
  theme: {
    colors: {
      ivory: '#FAF9F6',
      clay: '#E8DFD0',
      moss: '#1F4D3A',
      stone: '#606C66',
      forest: '#0F1A14',
    },
    fontFamily: {
      sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
      serif: '"Instrument Serif", ui-serif, Georgia, serif',
    },
  },
}
