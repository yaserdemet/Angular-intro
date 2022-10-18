import {reactive} from "vue"

export const store = reactive ({
    url : "https://api.github.com/repos/vuejs/core/commits?per_page=3&sha="
})