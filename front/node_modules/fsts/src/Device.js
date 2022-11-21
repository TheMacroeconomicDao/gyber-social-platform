export default class Device {
    static hasWindow() {
        return (typeof window !== 'undefined');
    }

    static createScript(src, async, onload) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = onload;
        document.body.appendChild(script);
    }
}
