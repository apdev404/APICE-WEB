<script lang="ts">
    import Galeria from "../../lib/components/galeria/Galeria.svelte"
</script>

<h1>
    <Galeria 
    slides={[
        'https://img1.wallspic.com/previews/4/5/3/0/30354/30354-suministros_de_oficina-550x310.jpg',
        'https://www.wallsauce.com/images/blogs/office-wallpapers/Map-wallpaper-in-boardroom.jpg',
        'https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?semt=ais_hybrid&w=740&q=80'
    ]}
    autoplay={true}
    delay={4000}
    />
</h1>