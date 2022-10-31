import warn from './utils/warn'

// https://developers.google.com/tag-manager/quickstart

const Snippets = {
  tags: function ({ id, events, domain, dataLayer, dataLayerName, preview, auth }
    :
  {
    id: any,
    events: any,
    domain: any,
    dataLayer: any,
    dataLayerName: any,
    preview: any,
    auth: any,
  }) {
    const gtm_auth = `&gtm_auth=${auth}`
    const gtm_preview = `&gtm_preview=${preview}`

    if (!id) warn('GTM Id is required')
    
    const iframe = `
      <iframe src="https://${domain}/ns.html?id=${id}${gtm_auth}${gtm_preview}&gtm_cookies_win=x"
        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>`
    
    const script = `
      (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', ${JSON.stringify(events).slice(1, -1)}});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://${domain}/gtm.js?id='+i+dl+'${gtm_auth}${gtm_preview}&gtm_cookies_win=x';
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','${dataLayerName}','${id}');`
  
    const dataLayerVar = this.dataLayer(dataLayer, dataLayerName)
  
    return {
      iframe,
      script,
      dataLayerVar
    }
  },
  dataLayer: function (dataLayer : any, dataLayerName : any) {
    return `
      window.${dataLayerName} = window.${dataLayerName} || [];
      window.${dataLayerName}.push(${JSON.stringify(dataLayer)})`
  }
}  

export default Snippets;