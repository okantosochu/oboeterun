(function(){
  const C=window.APP_CONFIG;
  const localDate=(date=new Date())=>{const y=date.getFullYear(),m=String(date.getMonth()+1).padStart(2,'0'),d=String(date.getDate()).padStart(2,'0');return `${y}-${m}-${d}`};
  const parseLocal=s=>{const [y,m,d]=String(s).split('-').map(Number);return new Date(y,m-1,d)};
  const addDays=(s,n)=>{const d=parseLocal(s);d.setDate(d.getDate()+n);return localDate(d)};
  const dayDiff=(a,b)=>Math.round((parseLocal(b)-parseLocal(a))/86400000);
  const fresh=()=>({schemaVersion:C.schemaVersion,createdAt:localDate(),setupComplete:false,user:{grade:'',path:'',school:'',finalExamDate:'',memo:''},exams:[],cards:[],customCategories:{},learningDays:[],stories:{unlocked:[],read:[]},activity:{lastVisit:'',reviewCount:0,zeroSeen:false,celebrated:[]}});
  function normalizeCard(card){return {...card,direction:['front','reverse','both'].includes(card.direction)?card.direction:'front',tags:Array.isArray(card.tags)?card.tags:[],ratings:Array.isArray(card.ratings)?card.ratings:[]}}
  function normalize(data){const base=fresh(),activity=data.activity&&typeof data.activity==='object'?data.activity:{};return {...base,...data,schemaVersion:C.schemaVersion,user:{...base.user,...(data.user||{})},exams:Array.isArray(data.exams)?data.exams:[],cards:Array.isArray(data.cards)?data.cards.map(normalizeCard):[],customCategories:data.customCategories&&typeof data.customCategories==='object'?data.customCategories:{},learningDays:Array.isArray(data.learningDays)?[...new Set(data.learningDays)].sort():[],stories:{...base.stories,...(data.stories||{})},activity:{...base.activity,...activity,reviewCount:Number(activity.reviewCount)||0,celebrated:Array.isArray(activity.celebrated)?activity.celebrated:[]}}}
  function load(){try{const raw=localStorage.getItem(C.storageKey);return raw?normalize(JSON.parse(raw)):fresh()}catch(e){return fresh()}}
  function save(data){localStorage.setItem(C.storageKey,JSON.stringify(data))}
  function validImport(x){return x&&typeof x==='object'&&Number(x.schemaVersion)>=1&&x.user&&Array.isArray(x.cards)&&Array.isArray(x.exams)&&Array.isArray(x.learningDays)&&x.stories&&Array.isArray(x.stories.unlocked)}
  window.Store={load,save,fresh,normalize,normalizeCard,validImport,localDate,parseLocal,addDays,dayDiff};
})();
