const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Page', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: 'newPage'
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: 'Título de la página' // Título de la página que se muestra en la pestaña del navegador
    },
    metaDescription: {
      type: DataTypes.STRING,
      defaultValue: 'Descripción de la página' // Descripción de la página para metaetiqueta description
    },
    cssStyles: {
      type: DataTypes.TEXT,
      defaultValue: '' // Estilos CSS adicionales para aplicar en la página
    },
    scripts: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [''] // Scripts adicionales que se deben incluir en la página
    },
    keywords: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [''] // Palabras clave relevantes para la página (metaetiqueta keywords)
    },
    author: {
      type: DataTypes.STRING,
      defaultValue: '' // Nombre del autor o responsable de la página
    },
    ogTitle: {
      type: DataTypes.STRING,
      defaultValue: 'Título para Open Graph' // Título para Open Graph (compartir en redes sociales)
    },
    ogDescription: {
      type: DataTypes.STRING,
      defaultValue: 'Descripción para Open Graph' // Descripción para Open Graph (compartir en redes sociales)
    },
    ogImage: {
      type: DataTypes.STRING,
      defaultValue: 'url_de_la_imagen.jpg' // URL de la imagen para Open Graph (compartir en redes sociales)
    },
    urlSlug: {
      type: DataTypes.STRING,
      defaultValue: '' // Versión amigable de la URL de la página
    },
    canonicalUrl: {
      type: DataTypes.STRING,
      defaultValue: '' // URL canónica para indicar la versión principal de la página (evitar contenido duplicado)
    },
    sitemapPriority: {
      type: DataTypes.FLOAT,
      defaultValue: 0.5 // Valor por defecto de prioridad del sitemap (rango de 0.0 a 1.0)
    },
    changeFrequency: {
      type: DataTypes.STRING,
      defaultValue: 'weekly' // Frecuencia de cambio de la página en el sitemap (always, hourly, daily, weekly, monthly, yearly, never)
    },
    robotsMeta: {
      type: DataTypes.STRING,
      defaultValue: 'index,follow' // Directivas para los robots de búsqueda (index, noindex, follow, nofollow)
    },
    altTags: {
      type: DataTypes.TEXT,
      defaultValue: '' // Texto alternativo para imágenes (accesibilidad y SEO)
    }
  })
