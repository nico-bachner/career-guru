<style>
    img {
		width: 100%;
    }
    @media screen and (min-width: 500px) {
		footer {
			display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2em;
		}
		.decoration {
            grid-row: 3;
            grid-column: span 2;
        }
    }
    @media screen and (min-width: 1000px) {
		footer {
			display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 2em;
		}
		.decoration {
            grid-row: 2;
            grid-column: span 4;
        }
    }
</style>

<footer>
    <img class="decoration" src="dot-grid.svg" alt="Career Guru logo">
</footer>