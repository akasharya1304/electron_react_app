const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  printComponent: async (url, callback) => {
    let response = await ipcRenderer.invoke("printComponent", url);
    callback(response);
  },
  previewComponent: async (url, callback) => {
    let response = await ipcRenderer.invoke("previewComponent", url);
    callback(response);
  },
  previewTableComponent: async (url, callback) => {
    let response = await ipcRenderer.invoke("previewTableComponent", url);
    callback(response);
  },
  previewPageComponent: async (url, callback) => {
    let response = await ipcRenderer.invoke("previewPageComponent", url);
    callback(response);
  },
  printPageComponent: async (url, callback) => {
    let response = await ipcRenderer.invoke("printPageComponent", url);
    callback(response);
  },
  previewLegalPageComponent: async (url, callback) => {
    let response = await ipcRenderer.invoke("previewLegalPageComponent", url);
    callback(response);
  },
  previewSuperBPageComponent: async (url, callback) => {
    let response = await ipcRenderer.invoke("previewSuperBPageComponent", url);
    callback(response);
  },
});
