<script>
	export let text;
	export let lang;
	const languages = {
		abnf: () => import('svelte-highlight/languages/abnf'),
		accesslog: () => import('svelte-highlight/languages/accesslog'),
		actionscript: () => import('svelte-highlight/languages/actionscript'),
		ada: () => import('svelte-highlight/languages/ada'),
		angelscript: () => import('svelte-highlight/languages/angelscript'),
		apache: () => import('svelte-highlight/languages/apache'),
		applescript: () => import('svelte-highlight/languages/applescript'),
		arcade: () => import('svelte-highlight/languages/arcade'),
		arduino: () => import('svelte-highlight/languages/arduino'),
		armasm: () => import('svelte-highlight/languages/armasm'),
		xml: () => import('svelte-highlight/languages/xml'),
		asciidoc: () => import('svelte-highlight/languages/asciidoc'),
		aspectj: () => import('svelte-highlight/languages/aspectj'),
		autohotkey: () => import('svelte-highlight/languages/autohotkey'),
		autoit: () => import('svelte-highlight/languages/autoit'),
		avrasm: () => import('svelte-highlight/languages/avrasm'),
		awk: () => import('svelte-highlight/languages/awk'),
		axapta: () => import('svelte-highlight/languages/axapta'),
		bash: () => import('svelte-highlight/languages/bash'),
		basic: () => import('svelte-highlight/languages/basic'),
		bnf: () => import('svelte-highlight/languages/bnf'),
		brainfuck: () => import('svelte-highlight/languages/brainfuck'),
		c: () => import('svelte-highlight/languages/c'),
		cal: () => import('svelte-highlight/languages/cal'),
		capnproto: () => import('svelte-highlight/languages/capnproto'),
		ceylon: () => import('svelte-highlight/languages/ceylon'),
		clean: () => import('svelte-highlight/languages/clean'),
		clojure: () => import('svelte-highlight/languages/clojure'),
		cmake: () => import('svelte-highlight/languages/cmake'),
		coffeescript: () => import('svelte-highlight/languages/coffeescript'),
		coq: () => import('svelte-highlight/languages/coq'),
		cos: () => import('svelte-highlight/languages/cos'),
		cpp: () => import('svelte-highlight/languages/cpp'),
		crmsh: () => import('svelte-highlight/languages/crmsh'),
		crystal: () => import('svelte-highlight/languages/crystal'),
		csharp: () => import('svelte-highlight/languages/csharp'),
		csp: () => import('svelte-highlight/languages/csp'),
		css: () => import('svelte-highlight/languages/css'),
		d: () => import('svelte-highlight/languages/d'),
		markdown: () => import('svelte-highlight/languages/markdown'),
		dart: () => import('svelte-highlight/languages/dart'),
		delphi: () => import('svelte-highlight/languages/delphi'),
		diff: () => import('svelte-highlight/languages/diff'),
		django: () => import('svelte-highlight/languages/django'),
		dns: () => import('svelte-highlight/languages/dns'),
		dockerfile: () => import('svelte-highlight/languages/dockerfile'),
		dos: () => import('svelte-highlight/languages/dos'),
		dsconfig: () => import('svelte-highlight/languages/dsconfig'),
		dts: () => import('svelte-highlight/languages/dts'),
		dust: () => import('svelte-highlight/languages/dust'),
		ebnf: () => import('svelte-highlight/languages/ebnf'),
		elixir: () => import('svelte-highlight/languages/elixir'),
		elm: () => import('svelte-highlight/languages/elm'),
		ruby: () => import('svelte-highlight/languages/ruby'),
		erb: () => import('svelte-highlight/languages/erb'),
		erlang: () => import('svelte-highlight/languages/erlang'),
		excel: () => import('svelte-highlight/languages/excel'),
		fix: () => import('svelte-highlight/languages/fix'),
		flix: () => import('svelte-highlight/languages/flix'),
		fortran: () => import('svelte-highlight/languages/fortran'),
		fsharp: () => import('svelte-highlight/languages/fsharp'),
		gams: () => import('svelte-highlight/languages/gams'),
		gauss: () => import('svelte-highlight/languages/gauss'),
		gcode: () => import('svelte-highlight/languages/gcode'),
		gherkin: () => import('svelte-highlight/languages/gherkin'),
		glsl: () => import('svelte-highlight/languages/glsl'),
		gml: () => import('svelte-highlight/languages/gml'),
		go: () => import('svelte-highlight/languages/go'),
		golo: () => import('svelte-highlight/languages/golo'),
		gradle: () => import('svelte-highlight/languages/gradle'),
		graphql: () => import('svelte-highlight/languages/graphql'),
		groovy: () => import('svelte-highlight/languages/groovy'),
		haml: () => import('svelte-highlight/languages/haml'),
		handlebars: () => import('svelte-highlight/languages/handlebars'),
		haskell: () => import('svelte-highlight/languages/haskell'),
		haxe: () => import('svelte-highlight/languages/haxe'),
		hsp: () => import('svelte-highlight/languages/hsp'),
		http: () => import('svelte-highlight/languages/http'),
		hy: () => import('svelte-highlight/languages/hy'),
		inform7: () => import('svelte-highlight/languages/inform7'),
		ini: () => import('svelte-highlight/languages/ini'),
		irpf90: () => import('svelte-highlight/languages/irpf90'),
		isbl: () => import('svelte-highlight/languages/isbl'),
		java: () => import('svelte-highlight/languages/java'),
		javascript: () => import('svelte-highlight/languages/javascript'),
		json: () => import('svelte-highlight/languages/json'),
		julia: () => import('svelte-highlight/languages/julia'),
		kotlin: () => import('svelte-highlight/languages/kotlin'),
		lasso: () => import('svelte-highlight/languages/lasso'),
		latex: () => import('svelte-highlight/languages/latex'),
		ldif: () => import('svelte-highlight/languages/ldif'),
		leaf: () => import('svelte-highlight/languages/leaf'),
		less: () => import('svelte-highlight/languages/less'),
		lisp: () => import('svelte-highlight/languages/lisp'),
		livecodeserver: () => import('svelte-highlight/languages/livecodeserver'),
		livescript: () => import('svelte-highlight/languages/livescript'),
		llvm: () => import('svelte-highlight/languages/llvm'),
		lsl: () => import('svelte-highlight/languages/lsl'),
		lua: () => import('svelte-highlight/languages/lua'),
		makefile: () => import('svelte-highlight/languages/makefile'),
		mathematica: () => import('svelte-highlight/languages/mathematica'),
		matlab: () => import('svelte-highlight/languages/matlab'),
		maxima: () => import('svelte-highlight/languages/maxima'),
		mel: () => import('svelte-highlight/languages/mel'),
		mercury: () => import('svelte-highlight/languages/mercury'),
		mipsasm: () => import('svelte-highlight/languages/mipsasm'),
		mizar: () => import('svelte-highlight/languages/mizar'),
		perl: () => import('svelte-highlight/languages/perl'),
		mojolicious: () => import('svelte-highlight/languages/mojolicious'),
		monkey: () => import('svelte-highlight/languages/monkey'),
		moonscript: () => import('svelte-highlight/languages/moonscript'),
		n1ql: () => import('svelte-highlight/languages/n1ql'),
		nestedtext: () => import('svelte-highlight/languages/nestedtext'),
		nginx: () => import('svelte-highlight/languages/nginx'),
		nim: () => import('svelte-highlight/languages/nim'),
		nix: () => import('svelte-highlight/languages/nix'),
		nsis: () => import('svelte-highlight/languages/nsis'),
		objectivec: () => import('svelte-highlight/languages/objectivec'),
		ocaml: () => import('svelte-highlight/languages/ocaml'),
		openscad: () => import('svelte-highlight/languages/openscad'),
		oxygene: () => import('svelte-highlight/languages/oxygene'),
		parser3: () => import('svelte-highlight/languages/parser3'),
		pf: () => import('svelte-highlight/languages/pf'),
		pgsql: () => import('svelte-highlight/languages/pgsql'),
		php: () => import('svelte-highlight/languages/php'),
		plaintext: () => import('svelte-highlight/languages/plaintext'),
		pony: () => import('svelte-highlight/languages/pony'),
		powershell: () => import('svelte-highlight/languages/powershell'),
		processing: () => import('svelte-highlight/languages/processing'),
		profile: () => import('svelte-highlight/languages/profile'),
		prolog: () => import('svelte-highlight/languages/prolog'),
		properties: () => import('svelte-highlight/languages/properties'),
		protobuf: () => import('svelte-highlight/languages/protobuf'),
		puppet: () => import('svelte-highlight/languages/puppet'),
		purebasic: () => import('svelte-highlight/languages/purebasic'),
		python: () => import('svelte-highlight/languages/python'),
		q: () => import('svelte-highlight/languages/q'),
		qml: () => import('svelte-highlight/languages/qml'),
		r: () => import('svelte-highlight/languages/r'),
		reasonml: () => import('svelte-highlight/languages/reasonml'),
		rib: () => import('svelte-highlight/languages/rib'),
		roboconf: () => import('svelte-highlight/languages/roboconf'),
		routeros: () => import('svelte-highlight/languages/routeros'),
		rsl: () => import('svelte-highlight/languages/rsl'),
		ruleslanguage: () => import('svelte-highlight/languages/ruleslanguage'),
		rust: () => import('svelte-highlight/languages/rust'),
		sas: () => import('svelte-highlight/languages/sas'),
		scala: () => import('svelte-highlight/languages/scala'),
		scheme: () => import('svelte-highlight/languages/scheme'),
		scilab: () => import('svelte-highlight/languages/scilab'),
		scss: () => import('svelte-highlight/languages/scss'),
		shell: () => import('svelte-highlight/languages/shell'),
		smali: () => import('svelte-highlight/languages/smali'),
		smalltalk: () => import('svelte-highlight/languages/smalltalk'),
		sml: () => import('svelte-highlight/languages/sml'),
		sqf: () => import('svelte-highlight/languages/sqf'),
		sql: () => import('svelte-highlight/languages/sql'),
		stan: () => import('svelte-highlight/languages/stan'),
		stata: () => import('svelte-highlight/languages/stata'),
		step21: () => import('svelte-highlight/languages/step21'),
		stylus: () => import('svelte-highlight/languages/stylus'),
		subunit: () => import('svelte-highlight/languages/subunit'),
		swift: () => import('svelte-highlight/languages/swift'),
		taggerscript: () => import('svelte-highlight/languages/taggerscript'),
		yaml: () => import('svelte-highlight/languages/yaml'),
		tap: () => import('svelte-highlight/languages/tap'),
		tcl: () => import('svelte-highlight/languages/tcl'),
		thrift: () => import('svelte-highlight/languages/thrift'),
		tp: () => import('svelte-highlight/languages/tp'),
		twig: () => import('svelte-highlight/languages/twig'),
		typescript: () => import('svelte-highlight/languages/typescript'),
		vala: () => import('svelte-highlight/languages/vala'),
		vbnet: () => import('svelte-highlight/languages/vbnet'),
		vbscript: () => import('svelte-highlight/languages/vbscript'),
		verilog: () => import('svelte-highlight/languages/verilog'),
		vhdl: () => import('svelte-highlight/languages/vhdl'),
		vim: () => import('svelte-highlight/languages/vim'),
		wasm: () => import('svelte-highlight/languages/wasm'),
		wren: () => import('svelte-highlight/languages/wren'),
		x86asm: () => import('svelte-highlight/languages/x86asm'),
		xl: () => import('svelte-highlight/languages/xl'),
		xquery: () => import('svelte-highlight/languages/xquery'),
		zephir: () => import('svelte-highlight/languages/zephir')
	};
	let language;
	import Highlight from 'svelte-highlight';
	import { github } from 'svelte-highlight/styles';

	$: {
		const asyncImport = async () => {
			if (Object.keys(languages).includes(lang)) {
				language = (await languages[lang]()).default;
			} else {
				if (language?.name !== 'plaintext') {
					language = (await languages['plaintext']()).default;
				}
			}
		};
		asyncImport();
	}
</script>

<svelte:head>
	{@html github}
</svelte:head>

<div class="code my-2">
	<Highlight code={text} {language} />
</div>

<style global>
	.code {
		position: relative;
		font-size: 13px;
		overflow: hidden;
	}

	.code pre {
		position: relative;
		display: block;
		overflow-x: auto;
	}

	code.hljs {
		position: relative;
		background-color: #f5f5f5 !important;
		border-radius: 5px;
		overflow: auto;
		display: block;
	}
</style>
