export default class UserInfo {
    email = '';
    password = '';

    reset = () => {
        this.email = '';
        this.password = '';
    }
}