declare global {
    interface Window {
        dataLayerName: any;
    }
}
export interface InitInterface {
    readonly gtmId: string;
    readonly events?: any;
    readonly domain: string;
    readonly dataLayer?: any;
    readonly dataLayerName?: any;
    readonly auth?: any;
    readonly preview?: any;
}
declare const TagManager: {
    dataScript: (dataLayer: any) => HTMLScriptElement;
    gtm: (args: any) => {
        noScript: () => HTMLElement;
        script: () => HTMLScriptElement;
        dataScript: HTMLScriptElement;
    };
    initialize: ({ gtmId, events, domain, dataLayer, dataLayerName, auth, preview }: InitInterface) => void;
    dataLayer: ({ dataLayer, dataLayerName }: {
        dataLayer: any;
        dataLayerName: any;
    }) => any;
};
export default TagManager;
