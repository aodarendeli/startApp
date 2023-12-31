
export function getCookie(key: string) {
    const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
}
export const numberFormat = (value: number) =>
    new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'USD'
    }).format(value);

export function linearGradient(color:any, colorState:any, angle = 195) {
    return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}
