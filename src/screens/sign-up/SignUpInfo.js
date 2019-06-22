export default class SignUpInfo {
    email = '';
    password = '';

    reset = () => {
        this.email = '';
        this.password = '';
    }
}