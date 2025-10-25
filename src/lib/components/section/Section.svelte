<script lang="ts">
    let { children, className = '', margin = 'my-16' } = $props();
</script>

<section class="w-full bg-whiteBGLite text-primaryFontColor py-20 lg:py-28 {margin}">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <div class="prose prose-lg max-w-none text-primaryFontColor leading-relaxed {className}">
            {@render children()}
        </div>
    </div>
</section>
<style>
    .prose {
        color: inherit;
    }
    .prose h1, .prose h2, .prose h3, .prose h4 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        color: #06171E;
        margin-bottom: 1rem;
    }
    .prose h1 {
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.2;
    }
    .prose h2 {
        font-size: 2rem;
        border-bottom: 2px solid #FD7D00;
        padding-bottom: 0.5rem;
    }
    .prose h3 {
        font-size: 1.5rem;
        color: #FD7D00;
    }
    .prose p {
        margin-bottom: 1.5rem;
        line-height: 1.7;
        font-size: 1.125rem;
    }
    .prose ul, .prose ol {
        margin-bottom: 1.5rem;
        padding-left: 1.5rem;
    }
    .prose li {
        margin-bottom: 0.5rem;
        line-height: 1.6;
    }
</style>