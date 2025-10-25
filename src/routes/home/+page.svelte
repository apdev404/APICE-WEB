<script lang="ts">
    import Galeria from "../../lib/components/galeria/Galeria.svelte"
</script>


    <Galeria 
    images={[
        '/images/galery/img1.jpg',
        '/images/galery/img2.jpg',
        '/images/galery/img3.jpg',
    ]}
    autoplay={true}
    delay={4000}
    />
