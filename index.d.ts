declare module "utils/warn" {
    export default warn;
    function warn(s: any): void;
}
declare module "Snippets" {
    export default Snippets;
    namespace Snippets {
        function tags({ id, events, domain, dataLayer, dataLayerName, preview, auth }: {
            id: any;
            events: any;
            domain: any;
            dataLayer: any;
            dataLayerName: any;
            preview: any;
            auth: any;
        }): {
            iframe: string;
            script: string;
            dataLayerVar: string;
        };
        function dataLayer(dataLayer: any, dataLayerName: any): string;
    }
}
declare module "TagManager" {
    export default TagManager;
    namespace TagManager {
        function dataScript(dataLayer: any): HTMLScriptElement;
        function gtm(args: any): {
            noScript: () => HTMLElement;
            script: () => any;
            dataScript: HTMLScriptElement;
        };
        function initialize({ gtmId, events, domain, dataLayer, dataLayerName, auth, preview }: {
            gtmId: any;
            events?: {};
            domain: any;
            dataLayer: any;
            dataLayerName?: string;
            auth?: string;
            preview?: string;
        }): void;
        function dataLayer({ dataLayer, dataLayerName }: {
            dataLayer: any;
            dataLayerName?: string;
        }): any;
    }
}
declare module "index" {
    export default TagManager;
    import TagManager from "TagManager";
}
declare module "__tests__/Snippets.spec" {
    export {};
}
declare module "__tests__/TagManager.spec" {
    export {};
}
declare module "__tests__/warn.spec" {
    export {};
}
//# sourceMappingURL=index.d.ts.map