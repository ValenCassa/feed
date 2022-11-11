<script>
	import { dataStore } from '../../stores/dataStore';
	import Container from '$components/Container/index.svelte';
	import { getFormattedDate } from '../../utils/getFormattedDate';
	import Markdown from '$components/Markdown/Markdown.svelte';
	import { page } from '$app/stores';
	import Trash from '../../icons/Trash.svelte';
	import { deletePost } from '../../services/posts';

	$: posts = $dataStore.posts.sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});

	const onDelete = async (id) => {
		await deletePost(id);
		dataStore.update((data) => ({
			...data,
			posts: data.posts.filter((post) => post._id !== id)
		}));
	};
</script>

<div>
	{#each posts as post}
		<div class="border-b border-borderGray last:border-none ">
			<Container sx="py-5 flex w-full gap-3">
				<div
					class="w-[40px] h-[40px] rounded-full bg-profilePic bg-cover bg-no-repeat bg-center shrink-0"
				/>
				<div class="w-full min-w-0">
					<div class="flex w-full justify-between items-center">
						<p class="font-bold text-md">
							Valen <span class="font-normal text-darkGray text-sm">@devCassa</span>
						</p>
						{#if $page.data.authenticated}
							<button
								class="text-red-400 hover:brightness-[80%] cursor-pointer"
								on:click={() => onDelete(post._id)}
							>
								<Trash /></button
							>
						{:else}
							<p class="text-darkGray text-sm">{getFormattedDate(post.date)}</p>
						{/if}
					</div>
					<div class="relative w-full">
						<Markdown source={post.body} />
					</div>
					{#if post.opengraph}
						<a href={post.opengraph.href} target="_blank" rel="noreferrer">
							<div
								class="w-full border border-borderGray rounded-md mt-4 cursor-pointer transition-all hover:brightness-[99%]"
							>
								<img
									src={post.opengraph.image}
									class="w-full h-[200px] object-cover object-center"
									alt={post.opengraph.title}
								/>
								<div class="p-3 bg-neutral-100">
									<p class="font-bold text-sm">{post.opengraph.title}</p>
									<p class="text-sm text-darkGray">{post.opengraph.description}</p>
								</div>
							</div></a
						>
					{/if}
				</div>
			</Container>
		</div>
	{/each}
</div>
