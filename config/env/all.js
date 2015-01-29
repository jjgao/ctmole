'use strict';

module.exports = {
	app: {
		title: 'ClinicalTrials',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/_lib/bootstrap/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/fontawesome/css/font-awesome.css',
				'public/lib/datatables/media/css/jquery.dataTables.css',
				'public/lib/angular-datatables/dist/plugins/bootstrap/datatables.bootstrap.min.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-cookies/angular-cookies.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-touch/angular-touch.js',
				'public/lib/angular-sanitize/angular-sanitize.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/chosen/chosen.jquery.js',
				'public/lib/angular-chosen-localytics/chosen.js',
				'public/lib/underscore/underscore.js',
				'public/lib/angular-underscore/angular-underscore.js',
				'public/lib/d3/d3.min.js',
				'public/lib/venn.js/venn.js',
				'public/lib/string/lib/string.js',
				'public/lib/datatables/media/js/jquery.dataTables.js',
				'public/lib/angular-datatables/dist/angular-datatables.js',
				'public/lib/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.min.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};