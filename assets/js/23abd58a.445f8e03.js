"use strict";(self.webpackChunklaio_documentation=self.webpackChunklaio_documentation||[]).push([[723],{7595:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var a=i(4848),r=i(8453);const s={},o="SceneLoading",t={id:"Laio/common/Library/SceneLoading",title:"SceneLoading",description:"Overview",source:"@site/docs/Laio/common/Library/SceneLoading.md",sourceDirName:"Laio/common/Library",slug:"/Laio/common/Library/SceneLoading",permalink:"/Laio/common/Library/SceneLoading",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Object Pool",permalink:"/Laio/common/Library/ObjectPool"},next:{title:"Notify",permalink:"/Laio/common/Library/Selector"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Events",id:"events",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"sceneloading",children:"SceneLoading"})}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"Static class to handle loading screens in unity. Use delegates to get information on changes, and simply call LoadScene."}),"\n",(0,a.jsx)(n.p,{children:"When loading the scene, there will be a couple frames where the scene is loaded but the screen does not disable. This is to ensure that the progress bar will always fill up, even if it requires extra time after the scene is done loading."}),"\n",(0,a.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"public static onProgressUpdate\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"public static onLoadingScreenVisibilityChange\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"public static onLoadingFinished\n"})}),"\n",(0,a.jsx)(n.h2,{id:"static-methods",children:"Static Methods"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"public static void LoadScene(int buildIndex)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"public static void LoadScene(string sceneName)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"public static void LoadScene(AsyncOperation loadSceneOperation)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"Using the static class for loading scene, all that needs to be done is the visual implementation. Create a script that can manage that, by subscribing to the events."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",metastring:"showLineNumbers",children:'// Loading screen UI element that uses the static class SceneLoading\r\npublic class LoadingScreen : MonoBehaviour\r\n{\r\n    //Loading screen parent object\r\n    [SerializedField] private GameObject _loadingScreen;\r\n    //Scene loading progress bar\r\n    [SerializedField] private Slider _progress;\r\n\r\n    private void Awake()\r\n    {\r\n        //Assign delegates on awake\r\n        SceneLoading.onProgressUpdate += OnProgressUpdate;\r\n        SceneLoading.onLoadingScreenVisibilityChange += OnLoadingScreenVisibilityChange;\r\n        SceneLoading.onLoadingFinished += OnLoadingFinished;\r\n    }\r\n\r\n    private void OnDestroy()\r\n    {\r\n        //Make sure to remove delegate assignments when object is destroyed\r\n        SceneLoading.onProgressUpdate += OnProgressUpdate;\r\n        SceneLoading.onLoadingScreenVisibilityChange += OnLoadingScreenVisibilityChange;\r\n        SceneLoading.onLoadingFinished += OnLoadingFinished;\r\n    }\r\n\r\n    // Callbacks from SceneLoading\r\n\r\n    private void OnProgressUpdate(float progress) => _progress.vale = progress;\r\n\r\n    private void OnLoadingScreenVisibilityChange(bool isVisible) => _loadingScreen.SetActive(isVisible);\r\n\r\n    private void OnLoadingFinished() => Debug.Log("Loading has been completed!");\r\n\r\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var a=i(6540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);