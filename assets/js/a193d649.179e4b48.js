"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[137],{821:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var t=i(5893),s=i(1151);const r={id:"data-structures",sidebar_label:"Data Structures",title:"Data Structures"},a="Data Structures",d={id:"commands/data-structures",title:"Data Structures",description:"Hash",source:"@site/docs/commands/data-structures.md",sourceDirName:"commands",slug:"/commands/data-structures",permalink:"/docs/commands/data-structures",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/Garnet/tree/main/website/docs/commands/data-structures.md",tags:[],version:"current",frontMatter:{id:"data-structures",sidebar_label:"Data Structures",title:"Data Structures"},sidebar:"garnetDocSidebar",previous:{title:"Raw String",permalink:"/docs/commands/raw-string"},next:{title:"Transactions",permalink:"/docs/extensions/transactions"}},l={},h=[{value:"Hash",id:"hash",level:2},{value:"HDEL",id:"hdel",level:3},{value:"Syntax",id:"syntax",level:4},{value:"More Information: <a>HDEL</a>",id:"more-information-hdel",level:4},{value:"HEXISTS",id:"hexists",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"More Information: <a>HEXISTS</a>",id:"more-information-hexists",level:4},{value:"HGET",id:"hget",level:3},{value:"Syntax",id:"syntax-2",level:4},{value:"More Information: <a>HGET</a>",id:"more-information-hget",level:4},{value:"HGETALL",id:"hgetall",level:3},{value:"Syntax",id:"syntax-3",level:4},{value:"More Information: <a>HGETALL</a>",id:"more-information-hgetall",level:4},{value:"HINCRBY",id:"hincrby",level:3},{value:"Syntax",id:"syntax-4",level:4},{value:"More Information: <a>HINCRBY</a>",id:"more-information-hincrby",level:4},{value:"HINCRBYFLOAT",id:"hincrbyfloat",level:3},{value:"Syntax",id:"syntax-5",level:4},{value:"More Information: <a>HINCRBYFLOAT</a>",id:"more-information-hincrbyfloat",level:4},{value:"HKEYS",id:"hkeys",level:3},{value:"Syntax",id:"syntax-6",level:4},{value:"More Information: <a>HKEYS</a>",id:"more-information-hkeys",level:4},{value:"HLEN",id:"hlen",level:3},{value:"Syntax",id:"syntax-7",level:4},{value:"More Information: <a>HLEN</a>",id:"more-information-hlen",level:4},{value:"HMGET",id:"hmget",level:3},{value:"Syntax",id:"syntax-8",level:4},{value:"More Information: <a>HMGET</a>",id:"more-information-hmget",level:4},{value:"HMSET",id:"hmset",level:3},{value:"Syntax",id:"syntax-9",level:4},{value:"More Information: <a>HMSET</a>",id:"more-information-hmset",level:4},{value:"HRANDFIELD",id:"hrandfield",level:3},{value:"Syntax",id:"syntax-10",level:4},{value:"More Information: <a>HRANDFIELD</a>",id:"more-information-hrandfield",level:4},{value:"HSCAN",id:"hscan",level:3},{value:"Syntax",id:"syntax-11",level:4},{value:"More Information: <a>HSCAN</a>",id:"more-information-hscan",level:4},{value:"HSET",id:"hset",level:3},{value:"Syntax",id:"syntax-12",level:4},{value:"More Information: <a>HSET</a>",id:"more-information-hset",level:4},{value:"HSETNX",id:"hsetnx",level:3},{value:"Syntax",id:"syntax-13",level:4},{value:"More Information: <a>HSETNX</a>",id:"more-information-hsetnx",level:4},{value:"HVALS",id:"hvals",level:3},{value:"Syntax",id:"syntax-14",level:4},{value:"More Information: <a>HVALS</a>",id:"more-information-hvals",level:4},{value:"List",id:"list",level:2},{value:"Sorted Sets",id:"sorted-sets",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"data-structures",children:"Data Structures"}),"\n",(0,t.jsx)(n.h2,{id:"hash",children:"Hash"}),"\n",(0,t.jsx)(n.h3,{id:"hdel",children:"HDEL"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HDEL ",(0,t.jsx)(n.code,{children:"<key>"})," ",(0,t.jsx)(n.code,{children:"<field>"})," ",(0,t.jsx)(n.code,{children:"[field ...]"})]}),"\n",(0,t.jsxs)(n.p,{children:["Removes the specified fields from the hash stored at ",(0,t.jsx)(n.strong,{children:"key"}),". Specified fields that do not exist within this hash are ignored. If ",(0,t.jsx)(n.strong,{children:"key"})," does not exist, it is treated as an empty hash and this command returns 0."]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hdel",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hdel/",target:"_blank",children:"HDEL"})]}),"\n",(0,t.jsx)(n.h3,{id:"hexists",children:"HEXISTS"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HEXISTS ",(0,t.jsx)(n.code,{children:"<key>"})," ",(0,t.jsx)(n.code,{children:"<field>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Returns if field is an existing field in the hash stored at ",(0,t.jsx)(n.strong,{children:"key"}),"."]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hexists",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hexists/",target:"_blank",children:"HEXISTS"})]}),"\n",(0,t.jsx)(n.h3,{id:"hget",children:"HGET"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-2",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HGET ",(0,t.jsx)(n.code,{children:"<key>"})," ",(0,t.jsx)(n.code,{children:"<field>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Returns the value associated with field in the hash stored at ",(0,t.jsx)(n.strong,{children:"key"}),"."]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hget",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hget/",target:"_blank",children:"HGET"})]}),"\n",(0,t.jsx)(n.h3,{id:"hgetall",children:"HGETALL"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-3",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HGETALL ",(0,t.jsx)(n.code,{children:"<key>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Returns all fields and values of the hash stored at ",(0,t.jsx)(n.strong,{children:"key"}),". In the returned value, every field name is followed by its value, so the length of the reply is twice the size of the hash."]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hgetall",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hgetall/",target:"_blank",children:"HGETALL"})]}),"\n",(0,t.jsx)(n.h3,{id:"hincrby",children:"HINCRBY"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-4",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HINCRBY ",(0,t.jsx)(n.code,{children:"<key>"})," ",(0,t.jsx)(n.code,{children:"<field>"})," ",(0,t.jsx)(n.code,{children:"<increment>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Increments the number stored at field in the hash stored at ",(0,t.jsx)(n.strong,{children:"key"})," by increment.\r\nIf ",(0,t.jsx)(n.strong,{children:"key"})," does not exist, a new ",(0,t.jsx)(n.strong,{children:"key"})," holding a hash is created. If field does not exist the value is set to 0 before the operation is performed.\r\nThe range of values supported by HINCRBY is limited to 64 bit signed integers."]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hincrby",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hincrby/",target:"_blank",children:"HINCRBY"})]}),"\n",(0,t.jsx)(n.h3,{id:"hincrbyfloat",children:"HINCRBYFLOAT"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-5",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HINCRBYFLOAT ",(0,t.jsx)(n.code,{children:"<key>"})," ",(0,t.jsx)(n.code,{children:"<field>"})," ",(0,t.jsx)(n.code,{children:"<increment>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Increment the specified field of a hash stored at ",(0,t.jsx)(n.strong,{children:"key"}),", and representing a floating point number, by the specified increment. If the increment value is negative, the result is to have the hash field value decremented instead of incremented. If the field does not exist, it is set to 0 before performing the operation. An error is returned if one of the following conditions occur:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The field contains a value of the wrong type (not a string)."}),"\n",(0,t.jsx)(n.li,{children:"The current field content or the specified increment are not parsable as a double precision floating point number."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hincrbyfloat",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hincrbyfloat/",target:"_blank",children:"HINCRBYFLOAT"})]}),"\n",(0,t.jsx)(n.h3,{id:"hkeys",children:"HKEYS"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-6",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HKEYS ",(0,t.jsx)(n.code,{children:"<key>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Returns all field names in the hash stored at ",(0,t.jsx)(n.strong,{children:"key"}),"."]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hkeys",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hkeys/",target:"_blank",children:"HKEYS"})]}),"\n",(0,t.jsx)(n.h3,{id:"hlen",children:"HLEN"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-7",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HLEN ",(0,t.jsx)(n.code,{children:"<key>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Returns the number of fields contained in the hash stored at ",(0,t.jsx)(n.strong,{children:"key"}),"."]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hlen",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hlen/",target:"_blank",children:"HLEN"})]}),"\n",(0,t.jsx)(n.h3,{id:"hmget",children:"HMGET"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-8",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HMGET ",(0,t.jsx)(n.code,{children:"<key>"})," ",(0,t.jsx)(n.code,{children:"<field>"})," ",(0,t.jsx)(n.code,{children:"[field ...]"})]}),"\n",(0,t.jsxs)(n.p,{children:["Returns the values associated with the specified fields in the hash stored at ",(0,t.jsx)(n.strong,{children:"key"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For every field that does not exist in the hash, a nil value is returned. Because non-existing keys are treated as empty hashes, running HMGET against a non-existing ",(0,t.jsx)(n.strong,{children:"key"})," will return a list of nil values."]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hmget",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hmget/",target:"_blank",children:"HMGET"})]}),"\n",(0,t.jsx)(n.h3,{id:"hmset",children:"HMSET"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-9",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HMSET ",(0,t.jsx)(n.code,{children:"<key>"})," ",(0,t.jsx)(n.code,{children:"<field>"})," ",(0,t.jsx)(n.code,{children:"<value>"})," ",(0,t.jsx)(n.code,{children:"[field value ...]"})]}),"\n",(0,t.jsx)(n.p,{children:"Deprecated in favor of HSET with multiple field-value pairs."}),"\n",(0,t.jsxs)(n.p,{children:["Sets the specified fields to their respective values in the hash stored at ",(0,t.jsx)(n.strong,{children:"key"}),". This command overwrites any specified fields already existing in the hash. If ",(0,t.jsx)(n.strong,{children:"key"})," does not exist, a new ",(0,t.jsx)(n.strong,{children:"key"})," holding a hash is created."]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hmset",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hmset/",target:"_blank",children:"HMSET"})]}),"\n",(0,t.jsx)(n.h3,{id:"hrandfield",children:"HRANDFIELD"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-10",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HRANDFIELD ",(0,t.jsx)(n.code,{children:"<key>"})," ",(0,t.jsx)(n.code,{children:"[count [WITHVALUES]]"})]}),"\n",(0,t.jsxs)(n.p,{children:["When called with just the ",(0,t.jsx)(n.strong,{children:"key"})," argument, return a random field from the hash value stored at ",(0,t.jsx)(n.strong,{children:"key"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If the provided count argument is positive, return an array of distinct fields. The array's length is either count or the hash's number of fields (HLEN), whichever is lower."}),"\n",(0,t.jsx)(n.p,{children:"If called with a negative count, the behavior changes and the command is allowed to return the same field multiple times. In this case, the number of returned fields is the absolute value of the specified count."}),"\n",(0,t.jsx)(n.p,{children:"The optional WITHVALUES modifier changes the reply so it includes the respective values of the randomly selected hash fields."}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hrandfield",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hrandfield/",target:"_blank",children:"HRANDFIELD"})]}),"\n",(0,t.jsx)(n.h3,{id:"hscan",children:"HSCAN"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-11",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HSCAN ",(0,t.jsx)(n.code,{children:"<key>"})," ",(0,t.jsx)(n.code,{children:"cursor"})," ",(0,t.jsx)(n.code,{children:"[MATCH pattern]"})," ",(0,t.jsx)(n.code,{children:"[COUNT count]"})]}),"\n",(0,t.jsxs)(n.p,{children:["Iterates over the fields and values of a hash stored at a given ",(0,t.jsx)(n.strong,{children:"key"}),". The cursor parameter represents the index of the element in the collection from where to start the scan. The match parameter is used for retrieving only the matched fields from the hash. The count parameter is the number of elements that will be returned at each iteration."]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hscan",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hscan/",target:"_blank",children:"HSCAN"})]}),"\n",(0,t.jsx)(n.h3,{id:"hset",children:"HSET"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-12",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HSET ",(0,t.jsx)(n.code,{children:"<key>"})," ",(0,t.jsx)(n.code,{children:"<field>"})," ",(0,t.jsx)(n.code,{children:"<value>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Sets the specified fields to their respective values in the hash stored at ",(0,t.jsx)(n.strong,{children:"key"}),". This command overwrites the values of specified fields that exist in the hash. If ",(0,t.jsx)(n.strong,{children:"key"})," does not exist, a new ",(0,t.jsx)(n.strong,{children:"key"})," holding a hash is created."]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hset",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hset/",target:"_blank",children:"HSET"})]}),"\n",(0,t.jsx)(n.h3,{id:"hsetnx",children:"HSETNX"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-13",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HSETNX ",(0,t.jsx)(n.code,{children:"<key>"})," ",(0,t.jsx)(n.code,{children:"<field>"})," ",(0,t.jsx)(n.code,{children:"<value>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Sets field in the hash stored at ",(0,t.jsx)(n.strong,{children:"key"})," to value, only if field does not yet exist. If ",(0,t.jsx)(n.strong,{children:"key"})," does not exist, a new ",(0,t.jsx)(n.strong,{children:"key"})," holding a hash is created. If field already exists, this operation has no effect."]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hsetnx",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hsetnx/",target:"_blank",children:"HSETNX"})]}),"\n",(0,t.jsx)(n.h3,{id:"hvals",children:"HVALS"}),"\n",(0,t.jsx)(n.h4,{id:"syntax-14",children:"Syntax"}),"\n",(0,t.jsxs)(n.p,{children:["HVALS ",(0,t.jsx)(n.code,{children:"<key>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Returns all values in the hash stored at ",(0,t.jsx)(n.strong,{children:"key"}),"."]}),"\n",(0,t.jsxs)(n.h4,{id:"more-information-hvals",children:["More Information: ",(0,t.jsx)("a",{href:"https://redis.io/commands/hvals/",target:"_blank",children:"HVALS"})]}),"\n",(0,t.jsx)(n.h2,{id:"list",children:"List"}),"\n",(0,t.jsx)(n.p,{children:"TODO"}),"\n",(0,t.jsx)(n.h2,{id:"sorted-sets",children:"Sorted Sets"}),"\n",(0,t.jsx)(n.p,{children:"TODO"})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>a});var t=i(7294);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);