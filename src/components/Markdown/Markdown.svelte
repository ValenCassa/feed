<script>
	import SvelteMarkdown from 'svelte-markdown';
	import CodeBlock from './CodeBlock.svelte';
	import Blockquote from './Blockquote.svelte';
	import Heading from './Heading.svelte';
	import Codespan from './Codespan.svelte';
	import Divider from './Divider.svelte';
	import Image from './Image.svelte';
	import Link from './Link.svelte';
	export let source;
</script>

<SvelteMarkdown
	{source}
	renderers={{
		code: CodeBlock,
		blockquote: Blockquote,
		heading: Heading,
		codespan: Codespan,
		hr: Divider,
		image: Image,
		link: Link
	}}
/>
