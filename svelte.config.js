/*import adapter from '@sveltejs/adapter-auto';

const config = {
	kit:{
		adapter: adapter()
	}
};

export default config;*/



import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	}
};