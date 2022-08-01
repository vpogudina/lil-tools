(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);t(26);var o,r,a,c=t(0),i=t.n(c),l=t(35),d=t.n(l),s=(t(48),t(3)),u=t(7),g=t(36),h=t.n(g),m=t(37),b=t(2),p=t(1),f=b.c.label(o||(o=Object(s.a)(["\n  border: 2px solid #326881;\n  border-radius: 10px;\n  display: inline-block;\n  padding: 10px 12px;\n  cursor: pointer;\n  background-color: #8be3e9;\n  margin: 50px auto;\n  height: 50px;\n  display: flex;\n  align-items: center;\n"]))),j=b.c.div(r||(r=Object(s.a)(["\n  width: 100%;\n  display: inline-flex;\n  align-content: space-around;\n  justify-content: space-around;\n"]))),x=b.c.input(a||(a=Object(s.a)(["\n  display: none;\n"]))),v="canary",y="integ";var O,w,k,C=Object(u.f)((function(){var e=function(e,n){var t,o=e.target.files[0],r=[],a=[];h.a.parse(o,{download:!0,header:!0,skipEmptyLines:!0,forceUniformNewline:!0,step:function(e){a.push(e.data)},complete:function(e){var o;if(console.log("Complete",a.length,"records."),t=a,n===v)o=t.filter((function(e){return e.message.includes("Agent log chunk")}));else if(n===y){var c=0;o=[];for(var i=0;i<t.length;i++)t[i].message.includes("Agent log chunk")&&(o[c]=t[i+1],c++)}for(var l=o.map((function(e){var t,o=null===e||void 0===e?void 0:e.message;return o?(n===v?t=o.indexOf("log chunk:")+10:n===y&&(t=o.indexOf("log chunk:")>-1?o.indexOf("log chunk:")+10:0),o.slice(t)):""})),d=0;d<l.length&&!l[d].includes('"_logs"');)d++;for(var s=d;s<l.length;s++){var u=[],g=s;do{l[g]=l[g].replace(/\n/g,""),l[g]=l[g].replace(/\\ /g,"\\\\ "),u.push(l[g]),g++}while(g<l.length&&!l[g].includes('"_logs"'));r.push(u),s=g-1}for(var h,b=function(e,n){return e+n},p=0;p<r.length;p++){var f=(h=r[p].reduce(b)).indexOf('"_logs": ')+9,j=void 0;n===v?j=h.indexOf('"_rolledLogs"')-5:n===y&&(j=h.indexOf('"_rolledLogs"')-6),h=h.slice(f,j);var x=new Blob([h],{type:"text/plain;charset=utf-8"});Object(m.saveAs)(x,"agent_log_".concat(p,".txt"))}}})};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(j,{children:[Object(p.jsx)(f,{htmlFor:"file-upload",className:"custom-file-upload",children:"Choose csv to get txt file(s) with CANARY agent logs"}),Object(p.jsx)(x,{id:"file-upload",name:"file-upload",type:"file",accept:".csv",onChange:function(n){return e(n,v)}})]}),Object(p.jsxs)(j,{children:[Object(p.jsx)(f,{htmlFor:"file-upload-2",className:"custom-file-upload-2",children:"Choose csv to get txt file(s) with agent logs from INTEG TEST csv"}),Object(p.jsx)(x,{id:"file-upload-2",name:"file-upload-2",type:"file",accept:".csv",onChange:function(n){return e(n,y)}})]})]})})),B=t(19),F=t(8),S=t(20),z=t(13),E=t(14),A=t(16),G=t(18),R=["href","loading","loaderColor","btnRef","collapseBreakpoint","disabled","iconSize","icon","children"],D=function(e){e.button;var n=e.fontsWeight;return"\n  white-space: nowrap;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 260px;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10);\n  transition: background-color 0.12s ease;\n  font-weight: ".concat(n.medium,";\n  cursor: pointer;\n  \n  &:disabled {\n    cursor: not-allowed; \n    opacity: 0.4;\n    outline: none;\n  }\n\n")},T=function(e){var n=e.button;return"\n  font-size: ".concat(n.normal.fontSize,";\n  height: ").concat(n.normal.height,"\n")},I=function(e){var n=e.button;return"\n  font-size: ".concat(n.small.fontSize,";\n  height: ").concat(n.small.height,"\n")},N=function(e,n){var t=e.button;e.globals;return"\n  background: ".concat(t[n].bg,";\n  color: ").concat(t[n].color,";\n  box-shadow: ").concat(t[n].boxShadow,";\n\n  &:not(:disabled):hover {\n    background: ").concat(t[n].bgHover,";\n  }\n")},M=b.c.button(O||(O=Object(s.a)(["\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ","\n"])),(function(e){var n=e.theme;return D(n)}),(function(e){return function(e,n){var t=e.button,o=e.spacing,r=e.breakpoints,a=e.palette;return"\n  background: ".concat(t.default.bg,";\n  color: ").concat(t.default.color,";\n  padding: ").concat(t.padding,";\n  \n  > ").concat(me,", .loader {\n    margin-right: ").concat(o.regular,";\n    position: relative;\n\n    @media screen and (max-width: ").concat(r[n]||0,") {\n      margin-right: 0;\n    };\n  }\n\n  ").concat(me," {\n    margin-top: 1px;\n  }\n\n  &:focus {\n    outline: 3px auto ").concat(a.mediumGray,";\n  }\n\n  &:disabled:focus {\n    outline-width: 0;\n  }\n")}(e.theme,e.collapseBreakpoint)}),(function(e){return"default"!==e.styledType&&N(e.theme,e.styledType)}),(function(e){return e.small?I(e.theme):T(e.theme)}),(function(e){return e.useDarkerFocus&&function(e){var n=e.palette;return"\n  &:focus {\n    outline: 3px auto ".concat(n.secondaryBlack,";\n  }\n")}(e.theme)}),(function(e){return e.darkMode?"&:not(:disabled):focus {\n    outline-color: ".concat(e.theme.palette.white,"\n  }"):""}));M.displayName="StyledButton";var H=b.c.a(w||(w=Object(s.a)(["\n  ",";\n  ",";\n  ",";\n  display: inline-flex;\n  line-height: normal;\n\n  &:visited,\n  &:active,\n  &:link {\n    text-decoration: none;\n    ",";\n  }\n"])),(function(e){return e.theme.typography.base}),(function(e){return e.type&&N(e.theme,e.type)}),(function(e){return e.small?I(e.theme):T(e.theme)}),(function(e){var n=e.theme;return D(n)}));H.displayName="StyledLink";var P=b.c.div(k||(k=Object(s.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  @media screen and (max-width: ",") {\n    display: none;\n  }\n"])),(function(e){var n=e.theme,t=e.collapseBreakpoint;return n.breakpoints[t]||0})),L=function(e){Object(A.a)(t,e);var n=Object(G.a)(t);function t(){return Object(z.a)(this,t),n.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){var e=this.props,n=e.href,t=e.loading,o=e.loaderColor,r=e.btnRef,a=e.collapseBreakpoint,c=e.disabled,i=e.iconSize,l=e.icon,d=e.children,s=Object(S.a)(e,R);return n?Object(p.jsx)(H,Object(F.a)(Object(F.a)({},s),{},{type:void 0})):Object(p.jsxs)(M,Object(F.a)(Object(F.a)({type:"button"},s),{},{disabled:t||c,ref:r,collapseBreakpoint:a,children:[t&&Object(p.jsx)(Fe,{color:o}),l&&!t&&Object(p.jsx)(be,{src:l,type:i}),d&&Object(p.jsx)(P,{id:"button-content",collapseBreakpoint:a,children:d})]}))}}]),t}(c.PureComponent);L.defaultProps={styledType:"default",small:!1,disabled:!1,loading:!1,collapseBreakpoint:null,href:void 0,loaderColor:"#fff",iconSize:"small",darkMode:!1,btnRef:null};var _,W,q,U,J,V,Y,$,K,Q,X,Z,ee,ne,te,oe,re=t.p+"static/media/ico-ccp-logo.2c11ad97.svg",ae=Object(b.b)(_||(_=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: ",";\n  align-items: ","; \n"])),(function(e){return e.center?"center":"space-between"}),(function(e){return e.center?"center":"normal"})),ce=Object(b.b)(W||(W=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: ",";\n  align-items: ",";\n"])),(function(e){return e.center?"center":"space-between"}),(function(e){return e.center?"center":"normal"})),ie=(b.c.div(q||(q=Object(s.a)(["\n  ","\n"])),ae),b.c.div(U||(U=Object(s.a)(["\n  ","\n"])),ce),b.c.div(J||(J=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"])))),le=(b.c.div(V||(V=Object(s.a)(["\n  display:flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),b.c.div(Y||(Y=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.7;\n  outline: none;\n  background-color: ",";\n  z-index: ",";\n"])),(function(e){return e.theme.palette.white}),(function(e){return e.theme.zIndex.level_2})),b.c.span($||($=Object(s.a)(["\n  position: absolute;\n  pointer-events: none;\n  color: transparent;\n  width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n"]))),Object(b.b)(K||(K=Object(s.a)(["\n  width: 0;\n  height: 0;\n  pointer-events: none;\n  color: transparent;\n  overflow: hidden;\n"])))),de=b.c.button(Q||(Q=Object(s.a)(["\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n"]))),se=(Object(b.c)(de)(X||(X=Object(s.a)(["\n  ","\n"])),ae),Object(b.c)(de)(Z||(Z=Object(s.a)(["\n  ","\n"])),ce),b.c.h1(ee||(ee=Object(s.a)(["\n  ","\n"])),le),b.c.h2(ne||(ne=Object(s.a)(["\n  ","\n"])),le),["type","src","className","withMargin","margin"]),ue=function(e){var n=e.src,t=e.alt,o={role:"img",width:"100%",height:"100%","aria-label":""!==t?t:void 0,"aria-hidden":""===t},r=n;return Object(p.jsx)(r,Object(F.a)({},o))},ge=b.c.img(te||(te=Object(s.a)([""]))),he={relative:{w:"100%",h:"100%"},nano:{w:"0.75rem",h:"0.75rem"},micro:{w:"0.875rem",h:"0.875rem"},mini:{w:"0.9375rem",h:"0.9375rem"},small:{w:"1.125rem",h:"1.125rem"},medium:{w:"1.3125rem",h:"1.3125rem"},large:{w:"1.5rem",h:"1.5rem"},extra_large:{w:"1.75rem",h:"1.75rem"},original:{w:"124px",h:"108px"}};be.defaultProps={type:"small",src:re,alt:""};var me=Object(b.c)(ie)(oe||(oe=Object(s.a)(["\n  ",";\n  ","\n  ","\n"])),(function(e){var n=e.size;return"width: ".concat(n.w,"; height: ").concat(n.h,";")}),(function(e){return"original"===e.type&&"\n    margin-top:3.123rem;\n    margin-bottom: 5rem;\n  "}),(function(e){var n=e.withMargin,t=e.margin;return n&&(t.top&&"margin-top: ".concat(t.top),t.bottom&&"margin-bottom: ".concat(t.bottom),t.left&&"margin-left: ".concat(t.left),t.right&&"margin-right: ".concat(t.right))}));function be(e){var n=e.type,t=e.src,o=e.className,r=e.withMargin,a=e.margin,c=Object(S.a)(e,se),i="string"===typeof t?ge:ue;return Object(p.jsx)(me,{type:n,size:he[n],withMargin:r,margin:a,className:o,children:Object(p.jsx)(i,Object(F.a)({src:t},c))})}var pe,fe,je,xe,ve,ye,Oe,we,ke,Ce=t(31),Be=b.c.span(pe||(pe=Object(s.a)(["\n  display: inline-flex;\n  align-items: center;\n"]))),Fe=function(e){Object(A.a)(t,e);var n=Object(G.a)(t);function t(){return Object(z.a)(this,t),n.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return Object(p.jsx)(Be,{className:"loader",children:Object(p.jsx)(Ce.ClipLoader,Object(F.a)({size:15,color:this.props.color||"#fff"},this.props))})}}]),t}(c.PureComponent),Se=(c.PureComponent,t(32)),ze=["label","id","value","onChange","name","maxCharacterCount","required","autoSize","showOutlineOnFocus","maxLength"],Ee=Object(b.b)(fe||(fe=Object(s.a)(["\n  outline: none;\n  border: none;\n  display: block;\n  width: 100%;\n  padding: "," 0;\n  background-color: transparent;\n  border-bottom: 1px solid ",";\n  margin-top: ",";\n  font-size: ",";\n"])),(function(e){return e.theme.spacing.micro}),(function(e){return e.theme.palette.boulder}),(function(e){return e.theme.spacing.small}),(function(e){return e.theme.fontsSize.regular})),Ae=Object(b.b)(je||(je=Object(s.a)(["  \n  &:focus-within, :focus {\n    outline: 3px auto ",";\n"])),(function(e){return e.theme.palette.mediumGray})),Ge=b.c.div(xe||(xe=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ",";\n\n  & label {\n    font-size: ",";\n    font-weight: ",";\n  }\n"])),(function(e){return e.theme.spacing.base}),(function(e){return e.theme.fontsSize.small}),(function(e){return e.theme.fontsWeight.bold})),Re=b.c.input(ve||(ve=Object(s.a)(["\n  ","\n"])),Ee),De=Object(b.c)(Se.a)(ye||(ye=Object(s.a)(["\n  ","\n  resize: none;\n"])),Ee),Te=b.c.input(Oe||(Oe=Object(s.a)(["\n  ","\n  ","\n"])),Ee,Ae),Ie=Object(b.c)(Se.a)(we||(we=Object(s.a)(["\n  ","\n  ","\n  resize: none;\n"])),Ee,Ae),Ne=b.c.span(ke||(ke=Object(s.a)(["\n  padding-top: 2px;\n"])));function Me(e,n){var t=e.label,o=e.id,r=e.value,a=e.onChange,i=e.name,l=e.maxCharacterCount,d=e.required,s=e.autoSize,u=e.showOutlineOnFocus,g=e.maxLength,h=Object(S.a)(e,ze),m=Object(c.useState)(!0),b=Object(B.a)(m,2),f=b[0],j=b[1];return Object(c.useEffect)((function(){r&&r.length>g?j(!1):j(!0)}),[r,g]),Object(p.jsxs)(Ge,{children:[Object(p.jsxs)("label",{htmlFor:o,children:[t,function(){var e;return e=s?u?Ie:De:u?Te:Re,Object(p.jsx)(e,Object(F.a)({id:o,value:r,name:i,onChange:a,maxLength:l||g,required:d,"aria-invalid":!f,ref:n},h))}()]}),l&&Object(p.jsx)(Ne,{children:"".concat(r.length," / ").concat(l)})]})}Me.defaultProps={required:!1,autoSize:!1,maxCharacterCount:null};var He=Object(c.forwardRef)(Me),Pe={white:"#FFFFFF",alabaster:"#FBFBFB",concrete:"#F3F3F3",haze:"#F7F7F7",alto:"#DDDDDD",darkgold:"#E27710",darkerGold:"#8A480A",whiteSmoke:"#EFEFEF",mercury:"#F2F2F2",zumthor:"#EBF5FF",water:"#CEE5F6",mango:"#E77600",danube:"#6D9CCF",silver:"#BFBFBF",inkwell:"#232F3E",shuttle:"#556478",azure:"#326295",icyblue:"#4a596c",black:"rgba(0,0,0,0.74)",secondaryBlack:"#222222",bronzeBlack:"#111111",emperor:"#555555",boulder:"#767676",dustyGray:"rgba(242, 242, 242, 0.49)",dustyGrayOpaque:"rgba(242, 242, 242)",darkGray:"#4A4A4A",lightGray:"#CCCCCC",mediumGrayAlt:"#777777",mediumGray:"#666666",whisper:"#EDEDED",rust:"#C45500",green:"#117E26",darkGreen:"#0B4115",lightGreen:"#AADFB4",lightBlue:"#E8F6F8",red:"#D0021B",darkRed:"#760410",yellow:"#F5A623",lightYellow:"#FDDF93",night:"#002B4F",aqua:"#2E8CB8",tangerine:"#DD7703",raspberry:"#A3317B",moss:"#678227",indigo:"#4F4FCD",apple:"#33C336",tea:"#BFEBB8",ghost:"#F5F9FA",honeydew:"#EFF5ED",linen:"#FFF5E9",blush:"#FBEDED",tbd:"transparent",brown:"#47596E",blue:"#257CAF",darkBlue:"#415266",mediumBlue:"#004A75",astral:"#377f9b",lightRed:"#fcecee",pureRed:"#ff0000"},Le={mediumGray:"#D1D1D1",darkerGray:"#949494",green:"#E1EFE1",blue:"#C2E1F3",darkerBlue:"#389AD6",yellow:"#FCE4BD"},_e={nano:.188,micro:.3125,mini:.375,mid:.5,small:.625,regular:.75,base:.875,medium:1.125,large:1.25,xlarge:1.625,xxlarge:2.75},We={};Object.keys(_e).forEach((function(e){We[e]="".concat(_e[e],"rem")}));var qe,Ue={regular:"AmazonEmber"},Je={mini:"0.75rem",small:"0.8125rem",regular:"0.875rem",large:"1.125rem",extraLarge:"1.875rem",system:"1rem",body:"0.875rem"},Ve={thin:"100",light:"200",normal:"400",medium:"600",bold:"700",bolder:"900"},Ye={primary:"#06adcb",secondary:"#1166BB",success:Pe.auigreen,warning:Pe.mango,error:Pe.red,boxShadowColor:Pe.alto,borderColor:Pe.dustyGray,highlightColor:"#398ADA"},$e={bodyBackground:Pe.mercury,channelViewBackground:Pe.mercury,bodyFontColor:Pe.black,bodyFontFamily:"".concat(Ue.regular,", Helvetica, sans-serif"),bodyFontWeight:Ve.normal,bodyFontSize:Je.body,baseFontSize:"1rem",textDisabledColor:Pe.boulder,textSecondaryColor:Pe.emperor,textTertiaryColor:Pe.boulder,letterSpacing:"0.01875rem",radius:"2px",boxShadow:"0 2px 4px 0 rgba(0,0,0,0.2)",boxShadowFocus:"0 0 2px 0 ".concat(Pe.mango),baseBorder:"1px solid ".concat(Pe.alto),secondaryBorder:"1px solid ".concat(Pe.whiteSmoke),baseMargin:We.small,basePadding:We.small,link:{color:Ye.secondary,hoverColor:Pe.rust,decoration:"none",hoverDecoration:"underline",base:"1em",small:"0.9em",tiny:"0.8em"},disabled:"\n      pointer-events: none;\n      opacity: 0.7;\n    ",ellipses:"\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    "},Ke={palette:Pe,lightPalette:Le,spacingValues:_e,spacing:We,globals:$e,fonts:Ue,screen:{minWidth:200,minHeight:465,small:{width:320,height:465},medium:{width:740,height:760}},color:Ye,fontsSize:Je,fontsWeight:Ve,zIndex:{level_0:30,level_1:20,level_2:10,level_3:1},breakpoints:{xs:"225px",sm:"300px",md:"320px"},maxWidths:{form:"25rem"},minHeights:{contactActionBar:"5.3125rem"},typography:{color:{base:"\n        color: ".concat($e.bodyFontColor,";\n        "),secondary:"\n        color: ".concat($e.textSecondaryColor,";\n        "),tertiary:"\n        color: ".concat($e.textTertiaryColor,";\n        ")},h1:"\n        font-size: 28px;\n        line-height: 1.2;\n        font-weight: ".concat(Ve.normal,";\n        padding: 0;\n      "),h1Margin:"0.67em 0 0.34em 0",h2:"\n        font-size: ".concat(Je.large,";\n        line-height: 1.3;\n        padding: 0;\n      "),h2Margin:"0.83em 0 0.42em 0",h3:"\n        font-size: 17px;\n        line-height: 1.255;\n        padding: 0;\n      ",h3Margin:"1em 0 0.5em 0",h4:"\n        font-size: 17px;\n        line-height: 1.255;\n        padding: 0;\n      ",h4Margin:"1.33em 0 0.67em 0",h5:"\n        font-size: 13px;\n        line-height: 1.465;\n        padding: 0;\n      ",h5Margin:"1.67em 0 0.84em 0",h6:"\n        font-size: 11px;\n        line-height: 1.465;\n        font-weight: ".concat(Ve.normal,";\n        text-transform: uppercase;\n        padding: 0;\n      "),h6Margin:"2.33em 0 1.17em 0",base:"\n        font-size: ".concat($e.bodyFontSize,";\n        line-height: 1.465;\n        font-weight: ").concat(Ve.normal,";\n        padding: 0;\n      "),baseMargin:"1em 0 0.5em 0",a:"\n        font-size: ".concat($e.link.base,";\n        color: ").concat($e.link.color,";\n        text-decoration: ").concat($e.link.decoration,";\n  \n        &:hover{\n          color: ").concat($e.link.hoverColor,";\n          text-decoration: ").concat($e.link.hoverDecoration,";\n        }\n      ")},button:{boxShadowFocus:$e.boxShadowFocus,cursor:"pointer",padding:"0 15px",normal:{fontSize:Je.body,height:"36px"},small:{fontSize:Je.small,height:"30px",padding:We.micro},default:{bg:Pe.white,color:"rgba(0,0,0,0.74)",bgHover:"hsl(0, 0%, 98%)"},default_flat:{bg:"",color:"rgba(0,0,0,0.74)",bgHover:"",boxShadow:"none"},primary:{bg:Pe.blue,bgHover:"hsl(202, 65%, 40%)",color:Pe.white},primary_alt:{bg:Pe.green,bgHover:"hsl(132, 76%, 25%)",color:Pe.white},primary_flat:{bg:"",color:Pe.blue,bgHover:"",boxShadow:"none"},secondary:{bg:Pe.darkBlue,bgHover:"hsl(212, 22%, 24%)",color:Pe.white},tertiary:{bg:Pe.alto,bgHover:"hsl(0, 0%, 84%)",color:Pe.black},secondary_alt:{bg:"rgb(208, 2, 27)",bgHover:"hsl(353, 98%, 34%)",color:Pe.white},toggle:{borderColor:Pe.silver,borderColorActive:Pe.azure,bg:Pe.white,bgHover:Pe.concrete,bgActive:Pe.zumthor}},message:{iconSize:"24px",bg:Pe.white,borderRadius:"3px",info:{bg:Pe.ghost,solidBg:Pe.auiblue,iconColor:Pe.azure,color:$e.bodyFontColor,borderColor:Pe.azure},success:{bg:Pe.honeydew,solidBg:Pe.auigreen,iconColor:Pe.auigreen,color:Pe.auigreen,borderColor:Pe.apple},warning:{bg:Pe.linen,solidBg:Pe.mango,iconColor:Pe.mango,color:Pe.rust,borderColor:Pe.rust},error:{bg:Pe.blush,solidBg:Pe.red,iconColor:Pe.red,color:Pe.red,borderColor:Pe.red}},listItem:{selectedBg:Pe.brown,selectedColor:Pe.white,hoverBg:Pe.brown,spacing:We.small,hoverColor:Pe.white,height:45},contactStatusColorsHover:{incoming:Pe.darkGreen,connected:Pe.mediumBlue,missed:Pe.blue,"no-longer-available":Pe.darkgold,"failed-connect-agent":Pe.darkRed,"failed-connect-customer":Pe.darkRed,"cancelled-connect-agent":Pe.darkGray,"missed-callback":Pe.darkRed,"agent-hungup":Pe.darkRed,"line-engaged-agent":Pe.darkRed,"line-engaged-customer":Pe.darkRed,"missed-call-agent":Pe.darkRed,"missed-call-customer":Pe.darkRed,"multiple-ccp-windows":Pe.darkRed,"realtime-communication-error":Pe.darkRed,"bad-address-customer":Pe.darkRed,"bad-address-agent":Pe.darkRed,acw:Pe.darkGray,disconnected:Pe.darkGray,connecting:Pe.darkGreen,ended:Pe.darkGray,error:Pe.darkRed,pending:Pe.mediumBlue,hold:Pe.darkerGold,rejected:Pe.darkRed,joined:Pe.mediumBlue},contactStatusColors:{incoming:Pe.green,connected:Pe.blue,missed:Pe.red,"no-longer-available":Pe.yellow,"failed-connect-agent":Pe.red,"failed-connect-customer":Pe.red,"cancelled-connect-agent":Pe.mediumGray,"missed-callback":Pe.red,"agent-hungup":Pe.red,"line-engaged-agent":Pe.red,"line-engaged-customer":Pe.red,"missed-call-agent":Pe.red,"missed-call-customer":Pe.red,"multiple-ccp-windows":Pe.red,"realtime-communication-error":Pe.red,"bad-address-customer":Pe.red,"bad-address-agent":Pe.red,acw:Pe.mediumGray,disconnected:Pe.mediumGray,connecting:Pe.green,ended:Pe.mediumGray,error:Pe.red,pending:Pe.blue,hold:Pe.darkgold,rejected:Pe.red,joined:Pe.blue},contactStatusColorsInactive:{missed:Pe.red,rejected:Pe.red},contactStatusTextColors:{missed:Pe.white,rejected:Pe.white,hold:Pe.white},contactStatusTextColorsInactive:{missed:Pe.white,rejected:Pe.white,hold:Pe.black},contactStatusTextColorsInactiveHover:{missed:Pe.white,rejected:Pe.white,hold:Pe.black,ended:Pe.white,connected:Pe.white},contactStatusColorsLight:{incoming:Le.green,connected:Le.blue,joined:Le.blue,missed:Pe.red,"no-longer-available":Le.yellow,acw:Le.mediumGray,disconnected:Le.mediumGray,connecting:Le.green,pending:Le.blue,ended:Le.mediumGray,error:"#F1B3BB",rejected:Pe.red,"failed-connect-agent":Pe.yellow,"failed-connect-customer":Pe.yellow,"missed-callback":Pe.red,"agent-hungup":Pe.red,"line-engaged-agent":Pe.red,"line-engaged-customer":Pe.red,"missed-call-agent":Pe.red,"missed-call-customer":Pe.red,"multiple-ccp-windows":Pe.red,"realtime-communication-error":Pe.red,"bad-address-customer":Pe.red,"bad-address-agent":Pe.red},contactStatusColorsLightHover:{incoming:Le.green,connected:Le.darkerBlue,joined:Le.darkerBlue,missed:Pe.darkRed,"no-longer-available":Le.yellow,acw:Le.darkerGray,disconnected:Le.darkerGray,connecting:Le.green,pending:Le.darkerBlue,ended:Le.darkerGray,error:"#E26071",rejected:Pe.darkRed,"failed-connect-agent":Pe.darkgold,"failed-connect-customer":Pe.darkgold,"missed-callback":Pe.darkRed,"agent-hungup":Pe.darkRed,"line-engaged-agent":Pe.darkRed,"line-engaged-customer":Pe.darkRed,"missed-call-agent":Pe.darkRed,"missed-call-customer":Pe.darkRed,"multiple-ccp-windows":Pe.darkRed,"realtime-communication-error":Pe.darkRed,"bad-address-customer":Pe.darkRed,"bad-address-agent":Pe.darkRed},toasts:{marginLeft:We.large,marginTop:We.small,stackOffsetLeft:We.micro,stackOffsetTop:We.mid,padding:We.small,borderRadius:"2px",defaultBackground:"white"},chatTabs:{inactive:Pe.white,inactiveText:Pe.secondaryBlack,unseenMessagesBorderRadius:"7px",unseenMessagesColor:Pe.green,unseenMessagesBorderColor:"#27A43F",minWidthActive:148,minWidthInactive:78,slopeWidth:6,slopeHeight:3.8125,slopeMaxHeight:3.0625,slopeCornerBottomLocation:.9375,distance:5},chatTranscriptor:{loading:Ye.primary,outgoingMsgBg:Pe.lightBlue,incomingMsgBg:Pe.whisper,outgoingMsg:"\n        color: ".concat(Pe.secondaryBlack,";\n        background: ").concat(Pe.lightBlue,";\n        "),incomingMsg:"\n        color: ".concat(Pe.secondaryBlack,";\n        background: ").concat(Pe.whisper,";\n        "),msgStatusWidth:"3.4375rem"},softphoneAgentStatusBarTextColors:{hold:Pe.white,connected:Pe.black},softphoneAgentStatusBarBackgroundColors:{hold:Pe.darkgold,connected:Pe.alabaster}},Qe=function(e){Object(A.a)(t,e);var n=Object(G.a)(t);function t(){return Object(z.a)(this,t),n.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){var e=this.props,n=e.theme,t=e.children;return Object(p.jsx)(b.a,{theme:n,children:t})}}]),t}(c.Component);Qe.defaultProps={theme:Object(F.a)({},Ke)};var Xe,Ze,en=Object(b.c)(L)(qe||(qe=Object(s.a)(["\n  width: 100%;\n  @media screen and (max-width: ",") {\n    width: auto;\n  }\n  ","\n  ","\n"])),(function(e){var n=e.theme,t=e.collapseBreakpoint;return n.breakpoints[t]||0}),(function(e){return e.shaded&&"opacity: 0.4;"}),(function(e){return e.smallButton&&"\n    padding: 0 10px;\n    width: auto !important;\n    > div:first-child {\n      margin-right: 0;\n    }\n    > div:last-child {\n      display: none;\n    }\n  "})),nn="outboundCall",tn="Phone number",on=new(function(){function e(){Object(z.a)(this,e)}return Object(E.a)(e,[{key:"getAgent",value:function(){connect.core.onInitialized((function(){console.log("====\n\n\n\nHERE WE Initialized")})),console.log("Here!");var e=new connect.Agent;return console.log(e),e}},{key:"getConfiguration",value:function(){return this.getAgent().getConfiguration()}},{key:"getPermissions",value:function(){return this.getAgent().getPermissions()}},{key:"getSoftphoneAutoAccept",value:function(){return this.getAgent().getConfiguration().softphoneAutoAccept}},{key:"canAgentHandleOutboundCall",value:function(){return this.getPermissions().includes(nn)}},{key:"dial",value:function(e){this.canAgentHandleOutboundCall()?console.log(this.getAgent()):console.log("Agent cannot make outbound calls, please set the required permissions")}}]),e}()),rn=b.c.div(Xe||(Xe=Object(s.a)(["\n  height: 50px;\n  background-color: ","\n  width: 100%;\n"])),(function(e){return e.theme.palette.mercury})),an=b.c.div(Ze||(Ze=Object(s.a)(["\n  display: flex;\n  order: 3;\n  background: ",";\n  border: 0.5px solid ",";\n  border-left: 0;\n  border-right: 0;\n  width: 400px;\n  height: 600px;\n  flex-direction: column;\n"])),(function(e){return e.theme.palette.lightGray}),(function(e){return e.theme.palette.gray}));var cn=Object(u.f)((function(){var e=Object(c.useState)(""),n=Object(B.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(null),a=Object(B.a)(r,2),i=a[0],l=a[1],d=Object(c.useState)(!1),s=Object(B.a)(d,2),u=s[0],g=s[1],h=Object(c.useState)(null),m=Object(B.a)(h,2),b=(m[0],m[1]);Object(c.useEffect)((function(){setTimeout((function(){console.log("Waited here"),connect.agent((function(e){console.log("my agent",e),l(e)})),connect.core.onInitialized((function(){console.log("Initialized")})),connect.contact((function(e){console.log("Got contact? ",e),g(!0),b(e)})),connect.core.getEventBus().subscribe(connect.ContactEvents.INCOMING,(function(){console.log("INCOMING! ")})),connect.core.getEventBus().subscribe(connect.ContactEvents.INIT,(function(){console.log("INIT CONTACT! ")})),connect.core.getEventBus().subscribe(connect.ContactEvents.CONNECTING,(function(){console.log("CONNECTING CONTACT! ")}))}),1e4)}),[]);var f=function(e){return e.match(/^\+?\d{10}$/)};return Object(p.jsxs)(an,{className:"container",children:[u&&Object(p.jsx)(rn,{children:function(){var e=i.getContacts()[0].getInitialConnection().getEndpoint();return console.log(e),e.phoneNumber}()}),Object(p.jsx)(He,{label:tn,id:"phone-input",value:t,name:"name",onChange:function(e){console.log(e.currentTarget.value),o(e.currentTarget.value),console.log("Action taken")},required:!0,"aria-required":!0,placeholder:"Enter phone number"}),Object(p.jsx)(en,{onClick:function(){f(t)?on.dial(t):(on.getAgent(),console.log(connect.ContactEvents),console.log("It is not a valid number: ",t))},children:"Call"})]})})),ln=t(17);function dn(){return Object(p.jsx)(Qe,{theme:Ke,children:Object(p.jsx)("div",{children:Object(p.jsxs)(ln.a,{children:[Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(ln.b,{to:"/",children:"To Button"})}),Object(p.jsx)("li",{children:Object(p.jsx)(ln.b,{to:"/custom-softphone",children:"Custom"})}),Object(p.jsx)("li",{children:Object(p.jsx)(ln.b,{to:"/get-log-chunk",children:"Log Chunk"})})]}),Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{exact:!0,path:"/",component:C}),Object(p.jsx)(u.a,{exact:!0,path:"/custom-softphone",component:cn}),Object(p.jsx)(u.a,{path:"/get-log-chunk",component:C})]})]})})})}var sn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,86)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),a(e),c(e)}))};function un(){return Object(c.useEffect)((function(){var e=document.getElementById("ccp");connect.core.initCCP(e,{ccpUrl:"https://candeleteoct28.my.gamma.us-west-2.nonprod.connect.aws.a2z.com/connect-gamma/ccp-v2",loginUrl:"https://candeleteoct28.my.gamma.us-west-2.nonprod.connect.aws.a2z.com/connect-gamma/ccp-v2",loginPopup:!0,loginPopupAutoClose:!0,region:"us-west-2",softphone:{allowFramedSoftphone:!0}})}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)(dn,{}),Object(p.jsx)("div",{id:"ccp",style:{display:"none"}})]})}d.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(un,{})}),document.getElementById("root")),sn()}},[[85,1,2]]]);
//# sourceMappingURL=main.c7e29c8e.chunk.js.map