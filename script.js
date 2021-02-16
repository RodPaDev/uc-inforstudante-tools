function createURL() {
    let url = document.getElementsByTagName('iframe')[0].src
    url = url.replaceAll('js/pdfjs/web/viewer.html?file=', '')
    url = url.replaceAll('..%2F', '').replace('%2F', '/').replaceAll('%3F', '?').replaceAll('%3D', '=')
    return url
}

function downloadPdf(url) {
    const a = document.createElement("a")
    a.style.display = "none"
    document.body.appendChild(a)
    a.href = url
    a.download = 'file.pdf'
    a.click()
}

document.getElementById('pdf-download').addEventListener('click', () => {
    chrome.tabs.executeScript({
        code: `(${createURL})()`
    }, ([results]) => {
        downloadPdf(results)
    })
})