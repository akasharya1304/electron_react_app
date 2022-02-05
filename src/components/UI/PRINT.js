export default function handlePrint(target) {
    return new Promise(() => {
        console.log('forwarding print request to the main process...');
    
        let data = target.contentWindow.document.documentElement.outerHTML;
        //console.log(data);
        let blob = new Blob([data], { type: 'text/html' });
        let url = URL.createObjectURL(blob);
    
        window.electronAPI.printComponent(url, (response) => {
         console.log('Main: ', response);
        });
        //console.log('Main: ', data);
    });
} 