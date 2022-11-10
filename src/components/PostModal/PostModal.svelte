<script>
	import Portal from 'svelte-portal';
	import { modalStore } from '../../stores/postModal';
	import { fade } from 'svelte/transition';
	import { createPost } from '../../services/posts';
	import { authenticated } from '../../stores/sessionStore';
	import { dataStore } from '../../stores/dataStore';

	const openModal = () => {
		modalStore.set(true);
	};

	const closeModal = () => {
		modalStore.set(false);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());
		try {
			const post = await createPost(data);
			modalStore.set(false);
			dataStore.update((data) => ({
				...data,
				posts: [...data.posts, post]
			}));
		} catch (e) {
			console.log(e);
		}
	};

	$: modal = $modalStore;
</script>

{#if $authenticated}
	<Portal target="body">
		{#if modal}
			<div
				class="w-100 fixed z-50 w-full inset-0 h-modal md:h-full bg-black bg-opacity-25 flex items-center justify-center "
				tabindex="-1"
				in:fade={{ opacity: 0, duration: 80 }}
				out:fade={{ opacity: 0, duration: 80 }}
			>
				<div
					class="relative p-3 bg-bodyBackground border border-borderGray rounded-md max-w-md w-full "
				>
					<div class="flex justify-between w-100">
						<div class="font-medium text-lg"><p>Create Post</p></div>
						<div>
							<button
								class="text-neutral-500 transition-all hover:text-neutral-800 text-sm"
								on:click={closeModal}
							>
								Close
							</button>
						</div>
					</div>
					<form class="w-full relative" on:submit|preventDefault={onSubmit}>
						<div class="mt-3 w-full relative">
							<textarea
								name="body"
								id="body"
								class="shadow-sm block sm:text-sm border w-full border-borderGray rounded-sm px-2 py-1 min-h-[100px]"
								placeholder="Write!"
							/>
						</div>
						<button
							type="submit"
							class="w-full bg-neutral-100 mt-2 text-sm font-medium transition-all hover:brightness-95"
						>
							Create
						</button>
					</form>
				</div>
			</div>
		{/if}
		<button
			class="bottom-3 right-3 fixed rounded-full text-3xl bg-textPrimary text-white h-12 w-12 flex items-center justify-center transition-all hover:brightness-[80%]"
			on:click={openModal}
		>
			+
		</button>
	</Portal>
{/if}
