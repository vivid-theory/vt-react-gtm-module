import Snippets from './Snippets'

const TagManager = {
  dataScript: function (dataLayer) {
    const script = document.createElement('script')
    script.innerHTML = dataLayer
    return script
  },
  gtm: function (args) {
    const snippets = Snippets.tags(args)

    const noScript = () => {
      const noscript = document.createElement('noscript')
      noscript.innerHTML = snippets.iframe
      return noscript
    }

    const script = () => {
      const script = Object.assign(document.createElement('script'));
      script.innerHTML = snippets.script
      return script
    }

    const dataScript = this.dataScript(snippets.dataLayerVar)

    return {
      noScript,
      script,
      dataScript
    }
  },
  initialize: function (
    { 
      gtmId, 
      events = {}, 
      domain, 
      dataLayer, 
      dataLayerName = 'dataLayer', 
      auth = '', 
      preview = '' 
    }) {
    const gtm = this.gtm({
      id: gtmId,
      events: events,
      domain: domain,
      dataLayer: dataLayer || undefined,
      dataLayerName: dataLayerName,
      auth,
      preview
    })
    if (dataLayer) document.head.appendChild(gtm.dataScript)
    document.head.insertBefore(gtm.script(), document.head.childNodes[0])
    document.body.insertBefore(gtm.noScript(), document.body.childNodes[0])
  },
  dataLayer: function ({dataLayer, dataLayerName = 'dataLayer'}) {
    if (!window) return;
    if (window[dataLayerName])  return window["dataLayerName"].push(dataLayer)
    const snippets = Snippets.dataLayer(dataLayer, dataLayerName)
    const dataScript = this.dataScript(snippets)
    document.head.insertBefore(dataScript, document.head.childNodes[0])
  }
}
export default TagManager;