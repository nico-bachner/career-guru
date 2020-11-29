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
	img {
		height: 100%;
	}
	#logo {
		position: fixed;
		height: 4em;
		width: 11em;
		top: .5em;
		left: .5em;
	}
	.expanded {
		display: none;
	}
	details {
		display: initial;
		position: fixed;
		right: 2em;
		top: 1.5em;
	}
	ul {
		background-color: white;
	}
	summary {
		font-size: 1.6em;
		color: var(--content);
	}
	@media screen and (min-width: 750px) {
		.expanded {
			display: block;
			position: fixed;
			right: 2em;
		}
		details {
			display: none;
		}
	}
</style>

<nav>
	<a id="logo" href="."><img src="logo.svg" alt="logo"></a>
	<div class="expanded">
		<NavbarItem label={"Home"} active="{segment == undefined ? 'page' : undefined}" />
		<NavbarItem label={"About"} to={"about"} active="{segment == 'about' ? 'page' : undefined}" />
		<NavbarItem label={"Forum"} to={"forum"} active="{segment == 'forum' ? 'page' : undefined}" />
		<NavbarItem label={"Chat"} to={"chat"} active="{segment == 'chat' ? 'page' : undefined}" />
		<NavbarItem label={"Help"} to={"help"} active="{segment == 'help' ? 'page' : undefined}" />
	</div>
	<details>
		<summary>Menu</summary>
		<ul>
			<li><NavbarItem label={"Home"} active="{segment == undefined ? 'page' : undefined}" /></li>
			<li><NavbarItem label={"About"} to={"about"} active="{segment == 'about' ? 'page' : undefined}" /></li>
			<li><NavbarItem label={"Forum"} to={"forum"} active="{segment == 'forum' ? 'page' : undefined}" /></li>
			<li><NavbarItem label={"Chat"} to={"chat"} active="{segment == 'chat' ? 'page' : undefined}" /></li>
			<li><NavbarItem label={"Help"} to={"help"} active="{segment == 'help' ? 'page' : undefined}" /></li>
		</ul>
	</details>
</nav>