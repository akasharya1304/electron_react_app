export default function handleSuperBPagePreview(target) {
    return new Promise(() => {
        console.log('forwarding print SuperB preview request...');
    
        let data = target.contentWindow.document.documentElement.outerHTML;
        //console.log(data);
        let blob = new Blob([data], { type: 'text/html' });
        let url = URL.createObjectURL(blob);
    
        window.electronAPI.previewSuperBPageComponent(url, (response) => {
         console.log('Main: ', response);
        });
        //console.log('Main: ', data);
    });
}