export const OptCookie = (method, name, value, expiresIn =null) => {
    if (method === "all") {

    }
    if (method === "get") {
        const nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        // return null
    }
    if (method === "set") {
        let expires = "";
        let date = new Date();
        if (expiresIn !== null){
            date.setTime(date.getTime() + (3 * 60 * 60 * 1000));
        }else{
            date.setTime(date.getTime() + (6 * 24 * 60 * 60 * 1000));
        }

        expires = "; expires=" + date.toUTCString();
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
        return {msg:'success'}
    }

    if (method === "remove") {

    }
}
