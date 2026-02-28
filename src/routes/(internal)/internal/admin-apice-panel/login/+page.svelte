<script lang="ts">
    import Section from "$lib/components/section/Section.svelte";
    import ButtonLink from "$lib/components/buttons/ButtonLink.svelte";
    import { adminService } from "$lib/services/adminsService";
    import { goto } from "$app/navigation";
  import { showError } from "$lib/domain/errorHandler";

    let usuario = $state('')
    let password = $state('')

    async function login() {
        try {
            const data = await adminService.login(usuario, password)

            console.log(data)

            // si viene token:
            localStorage.setItem("token", data.token)
            localStorage.setItem("logeado", 'true')

            goto('/internal/admin-apice-panel/panel')

        } catch (error) {
            showError("Error de login", error)
        }
    }
</script>

<Section class="bg-whiteColor h-screen flex flex-col justify-center items-center ">

    <!-- Logo -->
    <div class="mb-10">
        <img 
            src="/images/logos/LOGO-POSITIVO-APICE.png" 
            alt="APICE" 
            class="h-40 md:h-56 lg:h-40 w-auto mx-auto 
                   drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]
                   drop-shadow-[0_0_60px_rgba(0,0,0,0.6)]
                   brightness-110 contrast-110"
        />  
    </div>

    <!-- Wrapper para controlar ancho real -->
    <div class="w-full flex justify-center">
        <form 
            class="text-whiteColor bg-base-200 border-base-300 
                   rounded-box w-full max-w-2xl border p-8 shadow-xl space-y-4"
            on:submit|preventDefault={login}
        >
            <fieldset class="space-y-2">
                <label class="label">Usuario</label>
                <input 
                    type="email" 
                    class="input validator w-full" 
                    placeholder="Usuario" 
                    required 
                    bind:value={usuario}
                />
                <p class="validator-hint hidden">Required</p>
            </fieldset>

            <fieldset class="space-y-2">
                <label class="label">Contraseña</label>
                <input 
                    type="password" 
                    class="input validator w-full" 
                    placeholder="Contraseña" 
                    required 
                    bind:value={password}
                />
                <span class="validator-hint hidden">Required</span>
            </fieldset>

            <div class="flex flex-col gap-2 pt-4">
                <button 
                    class="bg-secondary hover:bg-orange-600 
                           text-whiteColor btn"
                    type="submit"
                    
                >
                    Login
                </button>

                <button 
                    class="bg-whiteColor text-secondary 
                           border-2 border-secondary 
                           hover:bg-whiteBGLite btn"
                    type="reset"
                >
                    Reset
                </button>
            </div>
        </form>
    </div>

</Section>