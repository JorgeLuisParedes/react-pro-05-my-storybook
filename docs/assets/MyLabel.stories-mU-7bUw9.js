import{j as p}from"./jsx-runtime-u17CrQMm.js";const t=({label:s,size:n="normal",AllCaps:c=!1,color:i,fontColor:d,backgroundColor:u="transparent"})=>p.jsx("span",{className:`${n} ${i} label`,style:{color:d,backgroundColor:u},children:c?s.toUpperCase():s});t.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text displayed by the label."},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Visual size of the label.",defaultValue:{value:"'normal'",computed:!1}},AllCaps:{required:!1,tsType:{name:"boolean"},description:"Converts the entire label to uppercase.",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Predefined color variant."},fontColor:{required:!1,tsType:{name:"string"},description:"Custom CSS color that overrides the predefined variant."},backgroundColor:{required:!1,tsType:{name:"string"},description:"Custom CSS background color. Defaults to transparent.",defaultValue:{value:"'transparent'",computed:!1}}}};const C={title:"UI/labels/MyLabel",component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"}}},e={args:{label:"Basic label",fontColor:"#de4d30",size:"normal"}},a={args:{label:"All Caps label",AllCaps:!0}},r={args:{label:"Secondary label",color:"text-secondary"}},o={args:{label:"Custom Color label",fontColor:"#2a2faf"}},l={args:{label:"Background Color label",fontColor:"white",backgroundColor:"black"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color label',
    fontColor: '#2a2faf'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Background Color label',
    fontColor: 'white',
    backgroundColor: 'black'
  }
}`,...l.parameters?.docs?.source}}};const b=["Basic","AllCaps","Secondary","CustomColor","CustomBackgroundColor"];export{a as AllCaps,e as Basic,l as CustomBackgroundColor,o as CustomColor,r as Secondary,b as __namedExportsOrder,C as default};
