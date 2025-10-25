<script>
	import Header from "../lib/components/header/Header.svelte"
    let { children } = $props();
    import '../app.css';
    import Footer from "$lib/components/footer/Footer.svelte";

</script>



<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- <link rel="icon" href="/favicon.ico" type="image/x-icon" /> -->
    <link rel="stylesheet" href="src/style.css" />
    
   

    <!-- Phosphor Icons -->
    <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css"
    />
    <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css"
    />
    <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/bold/style.css"
    />

    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nata+Sans:wght@100..900&display=swap"
    />
    <title>ÁPICE</title>
</svelte:head>


<Header />
<main class="bg-primary text-whiteColor ">
    {@render children()}
</main>


<Footer />



