(function(){
  const chapters=[
    [1,20,'第1章「なんで、ここにいるんだろう」'],[21,45,'第2章「たこぴーの記憶」'],[46,70,'第3章「くらぴーの記憶」'],[71,100,'第4章「逃げてきたもの」'],[101,130,'第5章「あの日」'],[131,150,'第6章「9,999,999,999」'],[151,175,'第7章「君の道」'],[176,180,'最終章「いってらっしゃい」']
  ];
  const samples={
    1:['目が覚めた場所','白くて、どこまでも静かな場所だった。\n\n「ここ、どこや？」\n\nたこぴーの声だけが、少し遅れて返ってきた。そこには、自分が誰だったのか思い出せない二匹がいた。'],
    2:['吸い込んだもの','たこぴーは、君が書いた言葉をじっと見た。\n\n「覚えたいって思ったものは、もう一歩目を進んでるんやな」\n\n小さな光が、たこぴーの中へすっと吸い込まれた。'],
    3:['解き放つ声','くらぴーは答えを待っていた。正しいかどうかではなく、君が自分の記憶を確かめる、その瞬間を。\n\n「怪しくてもいい。見つけられたなら、また会えるから」'],
    4:['むかしのきおく','今日の学びが、古い扉を少しだけ開いた。\n\nたこぴーは湯気の向こうに、大きな鍋と誰かの笑い声を見た気がした。'],
    5:['押せなかったボタン','「分からない、って言うのは難しいな」\n\nくらぴーがぽつりと言った。たこぴーは答えず、ただ隣でうなずいた。']
  };
  const main=Array.from({length:180},(_,i)=>{const n=i+1,chapter=chapters.find(c=>n>=c[0]&&n<=c[1]);const sample=samples[n];return {episodeId:`MAIN-${String(n).padStart(3,'0')}`,type:'MAIN',chapter:chapter[2],sequence:n,title:sample?sample[0]:`記憶のかけら ${String(n).padStart(3,'0')}`,body:sample?sample[1]:'（本文は今後のアップデートで追加予定です）',character:n<=45?'たこぴー':n<=70?'くらぴー':'ふたり',unlockWindow:{order:n},spoilerLevel:Math.ceil(n/45)}});
  const side=[
    {episodeId:'SIDE-001',type:'SIDE',chapter:'寄り道',sequence:1,title:'深いうなずき',body:'分からない会議ほど、くらぴーは深くうなずいていたらしい。\n\n「首だけは鍛えられたよ」\n「そこやないやろ」',character:'くらぴー',unlockWindow:{any:true},spoilerLevel:0},
    {episodeId:'SIDE-002',type:'SIDE',chapter:'寄り道',sequence:2,title:'幻のまかない',body:'たこぴーは、冷蔵庫の残り物で作るまかないだけは得意だった。レシピは覚えていない。でも、手は少し覚えている。',character:'たこぴー',unlockWindow:{any:true},spoilerLevel:0},
    {episodeId:'SIDE-003',type:'SIDE',chapter:'無駄話',sequence:3,title:'どっちが先？',body:'「吸収してから解放や」\n「解放するから吸収したくなるんだよ」\n\n二匹の話は、夕方まで終わらなかった。',character:'ふたり',unlockWindow:{any:true},spoilerLevel:0},
    {episodeId:'SIDE-004',type:'SIDE',chapter:'寄り道',sequence:4,title:'名前のひみつ',body:'名前をつけたのが誰だったか、二匹とも覚えていない。けれど呼ばれるたびに、少しだけ帰ってきた気持ちになる。',character:'ふたり',unlockWindow:{any:true},spoilerLevel:0}
  ];
  window.STORY_EPISODES=[...main,...side];
})();
