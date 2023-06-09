import { inputJSON } from "../interface/form.interface";

export class ComponentMeta {


   // static textMetaData: Array<inputJSON> = [{ displayName: 'displayName', fieldName: 'displayName', type: 'text', minLength: "", maxLength: "", isRequired: true }, 
   // { displayName: 'fieldName', fieldName: 'fieldName', type: 'text', minLength: "", maxLength: "", isRequired: true }, 
   // { displayName: 'type', fieldName: 'type', type: 'select', minLength: "", maxLength: "", isRequired: true ,options: [{ label: "text", value: "text" },{ label: "email", value: "email" },{ label: "phone", value: "phone" }]}, 
   // { displayName: 'minLength', fieldName: 'minLength', type: 'text', minLength: "", maxLength: "", isRequired: false },
   //  { displayName: 'maxLength', fieldName: 'maxLength', type: 'text', minLength: "", maxLength: "", isRequired: false },
   //   { displayName: 'required', fieldName: 'required', type: 'select', minLength: "", maxLength: "", isRequired: true, multipleSelection: false,
   //    options: [{ label: "true", value: "true" },{ label: "false", value: "false" }] },
   //    { displayName: 'defaultValue', fieldName: 'defaultValue', type: 'text', minLength: "", maxLength: "", isRequired: false }]

   // static textAreaMetaData: Array<inputJSON> = [{ displayName: 'displayName', fieldName: 'displayName', type: 'text', minLength: "", maxLength: "", isRequired: true }, 
   // { displayName: 'fieldName', fieldName: 'fieldName', type: 'text', minLength: "", maxLength: "", isRequired: true }, 
   // { displayName: 'type', fieldName: 'type', type: 'text', minLength: "", maxLength: "", isRequired: true,defaultValue:"textarea" }, 
   // { displayName: 'minLength', fieldName: 'minLength', type: 'text', minLength: "", maxLength: "", isRequired: false },
   //  { displayName: 'maxLength', fieldName: 'maxLength', type: 'text', minLength: "", maxLength: "", isRequired: false },
   //   { displayName: 'required', fieldName: 'required', type: 'select', minLength: "", maxLength: "", isRequired: true, multipleSelection: false,
   //    options: [{ label: "true", value: "true" },{ label: "false", value: "false" }] },
   //    { displayName: 'defaultValue', fieldName: 'defaultValue', type: 'text', minLength: "", maxLength: "", isRequired: false }]

   // static selectMetaData: Array<inputJSON> = [{ displayName: 'displayName', fieldName: 'displayName', type: 'text', minLength: "", maxLength: "", isRequired: true }, 
   // { displayName: 'fieldName', fieldName: 'fieldName', type: 'text', minLength: "", maxLength: "", isRequired: true }, 
   // { displayName: 'type', fieldName: 'type', type: 'text', minLength: "", maxLength: "", isRequired: true ,defaultValue:"select"},
   //  { displayName: 'minLength', fieldName: 'minLength', type: 'text', minLength: "", maxLength: "", isRequired: false },
   //   { displayName: 'maxLength', fieldName: 'maxLength', type: 'text', minLength: "", maxLength: "", isRequired: false },
   //    { displayName: 'required', fieldName: 'required', type: 'select', minLength: "", maxLength: "", isRequired: true, multipleSelection: false, options: [{ label: "true", value: "true" }, 
   //    { label: "false", value: "false" }] }, { displayName: 'multipleSelection', fieldName: 'multipleSelection', type: 'select', minLength: "", maxLength: "", isRequired: true, multipleSelection: false, options: [{ label: "true", value: "true" }, 
   //    { label: "false", value: "false" }]},{ displayName: 'options', fieldName: 'options', type: 'option', minLength: "", maxLength: "", isRequired: true },
   //    { displayName: 'defaultValue', fieldName: 'defaultValue', type: 'text', minLength: "", maxLength: "", isRequired: false }

   // ]

   static textMetaData: Array<inputJSON> = [{ displayName: 'displayName', fieldName: 'displayName', type: 'text', minLength: "", maxLength: "", isRequired: true }, { displayName: 'fieldName', fieldName: 'fieldName', type: 'text', minLength: "", maxLength: "", isRequired: true }, { displayName: 'type', fieldName: 'type', type: 'text', minLength: "", maxLength: "", isRequired: true }, { displayName: 'minLength', fieldName: 'minLength', type: 'text', minLength: "", maxLength: "", isRequired: false }, { displayName: 'maxLength', fieldName: 'maxLength', type: 'text', minLength: "", maxLength: "", isRequired: false }, { displayName: 'required', fieldName: 'required', type: 'select', minLength: "", maxLength: "", isRequired: true, multipleSelection: false, options: [{ label: "true", value: "true" }, { label: "false", value: "false" }] },{ displayName: 'defaultValue', fieldName: 'defaultValue', type: 'text', minLength: "", maxLength: "", isRequired: false }]
   static selectMetaData: Array<inputJSON> = [{ displayName: 'displayName', fieldName: 'displayName', type: 'text', minLength: "", maxLength: "", isRequired: true }, { displayName: 'fieldName', fieldName: 'fieldName', type: 'text', minLength: "", maxLength: "", isRequired: true }, { displayName: 'type', fieldName: 'type', type: 'text', minLength: "", maxLength: "", isRequired: true }, { displayName: 'minLength', fieldName: 'minLength', type: 'text', minLength: "", maxLength: "", isRequired: false }, { displayName: 'maxLength', fieldName: 'maxLength', type: 'text', minLength: "", maxLength: "", isRequired: false }, { displayName: 'required', fieldName: 'required', type: 'select', minLength: "", maxLength: "", isRequired: true, multipleSelection: false, options: [{ label: "true", value: "true" }, { label: "false", value: "false" }] }, { displayName: 'multipleSelection', fieldName: 'multipleSelection', type: 'select', minLength: "", maxLength: "", isRequired: true, multipleSelection: false, options: [{ label: "true", value: "true" }, { label: "false", value: "false" }]},{ displayName: 'options', fieldName: 'options', type: 'option', minLength: "", maxLength: "", isRequired: true },{ displayName: 'defaultValue', fieldName: 'defaultValue', type: 'text', minLength: "", maxLength: "", isRequired: false }

   ]


}



