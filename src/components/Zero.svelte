<script lang="ts">

    import { count_val } from "../store";

    const zero = () => {
        count_val.set(0);
    }

</script>

<button on:click={zero}>Reset</button>