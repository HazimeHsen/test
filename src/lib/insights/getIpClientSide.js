
export default async function getIpClientSide() {
    const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace')
    const text = await res.text()

    const arr = text.split('\n');
    const ip = arr[2].replace('ip=', '');
    return ip
}