function setCookie(name, sting) {
    const expirationMin = 15;
    const dateNow = new Date();
    dateNow.setTime(dateNow.getTime() + (expirationMin * 1000 * 60));
    const expire = dateNow.toString();
    document.cookie = `${name}=${sting};expires = ${expire};`;
};
setCookie('viewed', '55');
setCookie('uid', '354774631237');
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');

const cookieHandler = {
    getAll(){

    },
    toSessionStorage(name, value){

    },
    flush(){

    }
};




export { cookieHandler };
