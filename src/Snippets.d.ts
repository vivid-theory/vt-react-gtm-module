declare const Snippets: {
    tags: ({ id, events, domain, dataLayer, dataLayerName, preview, auth }: {
        id: any;
        events: any;
        domain: any;
        dataLayer: any;
        dataLayerName: any;
        preview: any;
        auth: any;
    }) => {
        iframe: string;
        script: string;
        dataLayerVar: string;
    };
    dataLayer: (dataLayer: any, dataLayerName: any) => string;
};
export default Snippets;
