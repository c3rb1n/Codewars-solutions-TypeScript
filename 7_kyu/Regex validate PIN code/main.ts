export class Kata {
    static validatePin(pin: string) {
        return /^(\d{4}|\d{6})$/.test(pin);
    }
}