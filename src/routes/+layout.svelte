<script>
	import Header from "../lib/components/header/Header.svelte"
    import '../app.css';
    import Footer from "$lib/components/footer/Footer.svelte";
    
    
    let { children } = $props();
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
        href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/thin/style.css"
    />
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
<main class="bg-primary text-whiteColor">
    {@render children()}
</main>

<a
  href="https://wa.me/54911XXXXXXXX"
  target="_blank"
  class="
    fixed bottom-4 right-4 z-50
    w-14 h-14 rounded-full
    bg-greenLight hover:bg-green-600
    flex items-center justify-center
    shadow-lg hover:shadow-2xl
    transition-all duration-300
  "
  aria-label="WhatsApp"
>
  <i class="ph ph-whatsapp-logo text-white text-3xl"></i>
</a>


<Footer />



