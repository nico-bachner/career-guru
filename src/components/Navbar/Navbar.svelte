<script>
	import NavbarItem from './NavbarItem.svelte';
	export let segment;
</script>

<style>
	nav {
		background-color: white;
		position: fixed;
		width: 100vw;
		height: 5em;
	}
	nav:first-child {
		padding-left: calc(100vw - 42em);
	}
	img {
		height: 100%;
	}
	#logo {
		position: fixed;
		height: 4em;
		top: .5em;
		left: .5em;
	}
</style>

<nav>
	<a id="logo" href="."><img src="logo.png" alt="logo"></a>
	<NavbarItem label={"Home"} active="{segment == undefined ? 'page' : undefined}" />
	<NavbarItem label={"About"} to={"about"} active="{segment == 'about' ? 'page' : undefined}" />
	<NavbarItem label={"Forum"} to={"forum"} active="{segment == 'forum' ? 'page' : undefined}" />
	<NavbarItem label={"Chat"} to={"chat"} active="{segment == 'chat' ? 'page' : undefined}" />
	<NavbarItem label={"Log In"} to={"login"} active="{segment == 'login' ? 'page' : undefined}" />
	<NavbarItem label={"Sign Up"} to={"signup"} active="{segment == 'signup' ? 'page' : undefined}" />
</nav>