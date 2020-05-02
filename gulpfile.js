'use-strict'

const { src, dest, watch, parallel, series } = require('gulp')
const sass = require('gulp-sass')
const del = require('del')
const browsersync = require('browser-sync')
const jade = require('gulp-jade')
const concat = require('gulp-concat')

sass.compiler = require('node-sass')

const PATHS = {
	MODULES:'./src/modules',
	VENDOR: './src/vendor',
	IN: './src/',
	OUT: './htdocs/'
}

function browserSync () {
	browsersync({
		server: {
			baseDir: './htdocs/',
			open: true
		}
	})
}

function clean () {
	return del(
		PATHS.OUT
	)
}

function css() {
	return src(PATHS.MODULES + '**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('main.css'))
		.pipe(dest(PATHS.OUT + '/css'))
}

function js() {
	return src(PATHS.MODULES + '/**/*.js')
		.pipe(concat('main.js'))
		.pipe(dest(PATHS.OUT + '/js'))
}

function jadeTask() {
	return src(PATHS.IN + '*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(dest(PATHS.OUT))
}

function vendorJs() {
	return src(PATHS.VENDOR + '/**/*.js')
		.pipe(concat('vendor.js'))
		.pipe(dest(PATHS.OUT + '/js'))
};


function watchFiles() {
	watch(PATHS.IN  + '**/*.jade', jadeTask)
	watch(PATHS.MODULES  + '**/*.scss', css)
	watch(PATHS.MODULES  + '**/*.js', js)
}

const build = series(clean, parallel(vendorJs, css, js, jadeTask))

exports.default = parallel(browserSync, watchFiles)
exports.css = css
exports.js = js
exports.vendorJs = vendorJs
exports.build = build
exports.jadeTask = jadeTask
exports.browserSync = browserSync
exports.clean = clean