<script>
	import axios from 'axios';
	import { setCookie } from '../../utils/cookies';

	const logIn = async (e) => {
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());
		try {
			const res = await axios.post('/api/login', data);
			setCookie('token', res.data);
			window.location.href = '/';
		} catch (e) {
			throw new Error(e);
		}
	};
</script>

<div class="grid place-content-center w-full h-full">
	<p class="font-bold text-lg">Login</p>
	<form on:submit|preventDefault={logIn}>
		<div>
			<label for="password" class="mb-2 font-medium">Password</label>
		</div>
		<div>
			<input
				id="password"
				type="password"
				name="password"
				class="border border-borderGray bg-transparent "
			/>
		</div>
		<button class="w-full px-2 py-1 text-sm font-medium bg-neutral-100 mt-2 rounded-sm">
			Login
		</button>
	</form>
</div>
