const {
	src
} = require('gulp');
const webpConv = require('gulp-webp'); // 4.0.1
const changed = require('gulp-changed');
const multiDest = require('gulp-multi-dest'); //ok
const plumber = require('gulp-plumber');

module.exports = function webp() {
	return src('build/img/**/*.+(png|jpg|jpeg)')
		.pipe(plumber())
		.pipe(changed('build/img', {
			extension: '.webp'
		}))
		.pipe(webpConv())
		.pipe(multiDest(['src/img', 'build/img']))
}