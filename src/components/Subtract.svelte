<script lang="ts">

    import { count_val } from "../store";

    const subtract = () => {
        count_val.update(prev => prev -= 1);
    }

</script>

<button on:click={subtract}>-</button>