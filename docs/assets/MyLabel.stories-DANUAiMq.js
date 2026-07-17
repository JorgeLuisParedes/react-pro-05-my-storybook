import{j as d}from"./jsx-runtime-u17CrQMm.js";const s=({label:o,size:t="normal",AllCaps:n=!1,color:c,fontColor:i})=>d.jsx("span",{className:`${t} ${c} label`,style:{color:i},children:n?o.toUpperCase():o});s.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text displayed by the label."},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Visual size of the label.",defaultValue:{value:"'normal'",computed:!1}},AllCaps:{required:!1,tsType:{name:"boolean"},description:"Converts the entire label to uppercase.",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Predefined color variant."},fontColor:{required:!1,tsType:{name:"string"},description:"Custom CSS color that overrides the predefined variant."}}};const p={title:"UI/labels/MyLabel",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"}}},e={args:{label:"Basic label",fontColor:"#de4d30",size:"normal"}},a={args:{label:"All Caps label",AllCaps:!0}},r={args:{label:"Secondary label",color:"text-secondary"}},l={args:{label:"Custom Color label",fontColor:"#2a2faf"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Basic label',
    fontColor: '#de4d30',
    size: 'normal'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'All Caps label',
    AllCaps: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    color: 'text-secondary'
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color label',
    fontColor: '#2a2faf'
  }
}`,...l.parameters?.docs?.source}}};const u=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,u as __namedExportsOrder,p as default};
