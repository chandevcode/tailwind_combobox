module.exports = {
  plugins: [require('@tailwindcss/forms')],
  content: [
    './app/components/**/*.html.erb',
    './app/components/**/*.erb',
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ]
}
