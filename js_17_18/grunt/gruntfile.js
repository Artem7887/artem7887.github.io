module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      // concat task configuration goes here.
        options: {
            separator: ';'
        },
        dist : {
            src: ['script/*.js'],
            dest: 'script/script.main.js'
        }
    },
    uglify: {
        dist: {
            src: ['script/script.main.js'],
            dest: 'script/script.main.min.js'
        }
}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);
};
