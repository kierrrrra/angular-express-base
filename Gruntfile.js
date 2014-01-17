module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: [
                    'public/css/*.scss',
                    'public/css/**/*.scss'
                ],
                tasks: ['compass', 'notify:sass'],
                options: {
                    livereload: true
                }
            }
        },
        compass: {
            sass: {
                options: {
                    sassDir: "public/css",
                    cssDir: "public/css"
                }
            }
        },
        notify: {
            sass: {
                options: {
                    title: "SASS",
                    message: "Stylesheet compiled"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('default', ['compass', 'watch']);
};