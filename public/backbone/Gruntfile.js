'use strict';

module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        'dist/*',
                        '!dist/.git*'
                    ]
                }]
            }
        },
        useminPrepare: {
            html: ['app/index.html'],
            options: {
                dest: 'dist'
            }
        },
        usemin: {
            html: ['dist/{,*/}*.html'],
            css: ['dist/styles/{,*/}*.css'],
            options: {
                dirs: ['dist']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'app/scripts/**/*.js'
            ]
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: '*.html',
                    dest: 'dist'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        'app/styles/{,*/}*.css'
                    ]
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'app',
                    dest: 'dist',
                    src: [
                        '*.{ico,txt}',
                        'bower_components/font-awesome/fonts/*'
                    ]
                }]
            }
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'htmlmin',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'usemin'
    ]);

    grunt.registerTask('default', [
        // 'jshint',
        'build'
    ]);
};
