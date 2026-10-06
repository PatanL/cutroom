import{m as x,f as m,e,t as $,o as S}from"./chrome-CvBQm9er.js";/* empty css             */import{R as T,A as u}from"./agents-BFuzeM86.js";import{V as C}from"./cuts-C55MWwC4.js";import{K as L}from"./kickrates-CLFNjp1I.js";const f=Object.fromEntries(L.rates.map(s=>[s.kick,s.usd]));x({active:"Rooms"});const b=document.getElementById("room"),A=s=>s>=1e6?`$${(s/1e6).toFixed(2)}M`:s>=1e3?`$${(s/1e3).toFixed(1)}K`:`$${Math.round(s)}`;var M;const d=(location.pathname.match(/^\/rooms\/([a-z0-9_-]+)/i)||[])[1]||new URLSearchParams(location.search).get("id")||((M=T[0])==null?void 0:M.id);let t=T.find(s=>s.id===d);const y=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,w=s=>s?new Date(s*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}):"",E=s=>(s=Math.max(0,Math.floor(s||0)),`${String(Math.floor(s/3600)).padStart(2,"0")}:${String(Math.floor(s/60)%60).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`),R={ready:["cut","ok"],posted:["posted","ok"],submitted:["sent","ok"],paid:["paid","ok"],dropped:["dropped","low"],hidden:["held back","low"],failed:["failed","low"]},K={},O=s=>{var i;return((i=u[s.slug])==null?void 0:i.handle)||`cutroom${(K[s.slug]||s.name||s.slug).toLowerCase().replace(/[^a-z0-9]/g,"")}`},k=s=>{if(!s)return"not yet";const i=Math.max(0,(Date.now()/1e3-s)/60);return i<1?"just now":i<60?`${Math.round(i)} min ago`:i<2880?`${Math.round(i/60)} h ago`:`${Math.round(i/1440)} d ago`},_={live:["Watching live","live"],queued:["Live · waiting for a slot","mid"],digging:["Digging past streams","dig"],offline:["Offline · checking every 5 min",""],idle:["Caught up",""],stopped:["Paused",""],starting:["Starting",""]};function j(s,i,n,r){const o=(s==null?void 0:s.mode)||"offline",[p,h]=_[o]||_.offline,a=((s==null?void 0:s.log)||[]).slice(-8).reverse();return`<section class="ag-sec"><div class="wrap"><div class="ag panel">
    <div class="ag-h"><span class="ag-mode ${h}"><i></i>${p}</span>
      <span class="mono muted">checks kick.com/${e(i.slug)} every 5 minutes${s!=null&&s.checked?` · last check ${k(s.checked)}`:""} · snapshot</span></div>
    <p class="ag-doing">${e((s==null?void 0:s.doing)||`Offline. When ${i.name} goes live the room watches the whole stream; in between it digs through past streams for evergreen cuts.`)}</p>
    <div class="ag-cols"><dl class="ag-nums">
      <div><dt>Past moments read</dt><dd class="mono">${(s==null?void 0:s.dug_n)??0}</dd></div>
      <div><dt>Cut from past streams</dt><dd class="mono y">${((s==null?void 0:s.cuts)||[]).length}</dd></div>
      <div><dt>Live sessions</dt><dd class="mono">${i.stats.sessions}</dd></div>
      <div><dt>Last dig</dt><dd class="mono">${k(s==null?void 0:s.last_dig)}</dd></div></dl>
    <ol class="ag-log mono">${a.map(c=>`<li><span>${e(new Date(c.t*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}))}</span>${e(c.msg)}</li>`).join("")||'<li class="muted">No activity yet.</li>'}</ol></div>
  </div></div></section>`}function P(s){const i=C.filter(n=>n.slug===s.slug);return i.length?`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">While offline</span><h2 class="h2" style="margin-top:14px">Cut from <em>past streams.</em></h2></div>
      <p class="lede" style="max-width:28em">Between streams the room goes back through ${e(s.name)}'s recent streams, starting with the moments viewers clipped most, and recuts them its own way.</p></div>
    <div class="real-grid">${i.map(n=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(n.file)}" poster="${e(n.poster)}" controls playsinline preload="none"></video></div>
      <figcaption><b>${e(n.hook)}</b><span class="mono">${n.date?`from the ${e(n.date)} stream · `:""}${n.layout==="hooksplit"?"facecam split":"auto-framed"} · ${Math.round(n.duration)} s</span>
      <span class="real-how">from <a href="${e(n.source_url)}" target="_blank" rel="noopener noreferrer">the viewer clip</a> watched ${m(n.source_views||0)} times · editor ${n.score}/10</span></figcaption></figure>`).join("")}</div>
  </div></section>`:""}function W(s,i,n){const r=u[d];if(!t&&!s&&r&&(s={name:r.name,live:!1,category:r.category||"Kick",rate:f[d]}),!t&&s&&(t={id:d,slug:d,name:s.name||d,platform:"Kick",category:s.category||"IRL",program:"Kick Clipping (clipping.net)",program_url:"https://clipping.net/c/kick-clipping",rate:s.rate||f[d],title:s.title,sessions:[],clips:[],moments:[],since:null,stats:{sessions:0,minutes:0,words:0,chat:0,moments:0,kept:0,dropped:0,clips:0,held:0,posted:0}}),!t){b.innerHTML='<section><div class="wrap"><h1 class="h2">No room <em>by that name.</em></h1><a class="btn btn-y" href="/rooms" style="margin-top:20px">All rooms</a></div></section>';return}document.title=`${t.name} room · cutroom`;const o=t.stats,p=t.clips[0],h=[["Watch",`${o.minutes} min`,`live, ${o.sessions} session${o.sessions===1?"":"s"}`],["Hear",m(o.words),"words transcribed"],["Read",m(o.chat),"chat messages"],["Find",o.moments,"moments flagged"],["Edit",`${o.kept} / ${o.dropped}`,"kept / dropped by the editor"],["Cut",o.clips,`clips on this page${o.held?`, ${o.held} held back (see below)`:""}${o.median_after_s?` · ~${y(o.median_after_s)} after the moment`:""}`],["Post + collect",o.posted?`${o.posted}`:"—",o.posted?"posted":"posting not connected yet",!0]];b.innerHTML=`
  <section class="ch-head">
    <div class="wrap ch-head-grid">
      <div class="ch-poster">${s!=null&&s.live?`<div class="ch-live"><iframe src="https://player.kick.com/${encodeURIComponent(t.slug)}?muted=true&autoplay=true" title="${e(t.name)} live on Kick" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`:p?`<div class="real-vid"><video src="${e(p.file)}" poster="${e(p.poster)}" controls playsinline preload="none"></video></div>`:""}</div>
      <div class="ch-info">
        <div class="ch-meta">${s!=null&&s.live?`<span class="badge live"><span class="dot-live"></span>Live · ${m(s.viewers)} watching</span>`:'<span class="badge">Offline</span>'}<span class="badge mid">Test room</span><a class="mono muted" href="https://kick.com/${encodeURIComponent(t.slug)}" target="_blank" rel="noopener">kick.com/${e(t.slug)} ↗</a></div>
        <h1 class="cap ch-cap">${e(t.name)} <span class="hl">room</span></h1>
        <div class="ch-sub"><span>clips <b>${e(t.name)}</b> on ${e(t.platform)}</span><span>${e(t.category)}</span>${t.title?`<span class="muted">“${e(t.title)}”</span>`:""}</div>
        <div class="ch-coinbox">${t.coin?`<div><span class="k">Coin</span><b class="mono">$${e(t.coin.ticker)}</b></div><div><span class="k">Market cap</span><b class="mono y">${A(t.coin.mcap_usd||0)}</b></div>`:'<div><span class="k">Coin</span><b class="mono muted">no coin yet</b></div><div><span class="k">Market cap</span><b class="mono muted">opens at launch</b></div>'}
          <div><span class="k">Program</span><a href="${e(t.program_url)}" target="_blank" rel="noopener"><b>${e(t.program)}</b></a></div><div><span class="k">Pays</span><b class="mono y">${t.rate?`$${t.rate} / 100K views`:"—"}</b></div></div>
        <p class="lede" style="max-width:34em">${o.sessions?`This room watched ${e(t.name)} live for ${o.minutes} minutes across ${o.sessions} session${o.sessions===1?"":"s"}.`:`No session yet. A room starts on its own the next time ${e(t.name)} goes live with nothing else in the queue.`} ${o.sessions?" Everything on this page is what it actually did: the moments it flagged, what its editor kept or dropped and why, and the clips it cut while the stream was still going.":""}</p>
        <div class="ch-handles"><span class="k mono">Posts as</span><b class="mono">@${e(O(t))}</b><span class="muted">on TikTok · Instagram · YouTube</span><span class="badge">accounts open at launch</span></div>
        <div class="ch-actions"><a class="btn btn-y" href="/launch">Open a room like this</a><button class="btn btn-ghost" id="share">Copy link</button></div>
      </div>
    </div>
  </section>

  ${j(n,t)}

  ${P(t)}

  <section class="ch-pipe-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Pipeline</span><h2 class="h2" style="margin-top:14px">The room, <em>so far.</em></h2></div></div>
      <ol class="pipe">${h.map(([a,c,l,g],v)=>`<li><span class="mono pn">0${v+1} ${a}</span><b class="mono ${g?"y":""}">${e(String(c))}</b><span class="pl">${e(l)}</span></li>`).join("")}</ol>
    </div>
  </section>

  <section class="ch-clips-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Clips</span><h2 class="h2" style="margin-top:14px">What the room <em>cut.</em></h2></div>
        <p class="lede" style="max-width:26em">Cut live. Each one was ready about a minute after it happened, before any human saw it.</p></div>
      <div class="real-grid">${t.clips.map(a=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(a.file)}" poster="${e(a.poster)}" controls playsinline preload="none"></video></div>
        <figcaption><b>${e(a.hook||"")}</b><span class="mono">${a.after_moment_s?`ready ${y(a.after_moment_s)} after it happened`:""}${a.forced?" · operator pressed clip":""}</span>
        <span class="real-how">${e(a.why||"")}</span><span class="real-how">${e(a.post&&a.post.url?"posted":"not posted yet: TikTok not connected")}</span></figcaption></figure>`).join("")||'<p class="muted">No clips yet.</p>'}</div>
    </div>
  </section>

  <section class="ch-vod-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Every moment</span><h2 class="h2" style="margin-top:14px">What it flagged, <em>and the call.</em></h2></div>
        <p class="lede" style="max-width:28em">The editor drops more than it keeps: anything that needs context, punches down, or that chat reacted to off camera.</p></div>
      <div class="panel"><table class="moments"><thead><tr><th>When</th><th>Signals</th><th>Chat said</th><th>Call</th><th>Why</th></tr></thead>
        <tbody>${t.moments.map(a=>{const c=R[a.stage]||[a.stage,"low"],l=a.signals||{};return`<tr><td class="mono">${e(w(a.found))}<br><span class="muted">${E(a.at)} in</span></td>
          <td class="mono" style="font-size:12px">${l.chat_x?`chat ×${l.chat_x}`:""}${l.laughs?` · ${l.laughs} laughs`:""}${l.clip_it?` · ${l.clip_it}× clip it`:""}${l.forced?" · operator":""}</td>
          <td style="font-size:13px">${(a.chat_top||[]).map(([g,v])=>`“${e(g)}” ×${v}`).join(", ")}</td>
          <td><span class="badge ${c[1]}">${e(c[0])}</span>${a.hook?`<div style="margin-top:6px;font-size:13px"><b>${e(a.hook)}</b></div>`:""}</td>
          <td style="font-size:13px;color:var(--text-2)">${e(a.why||"")}</td></tr>`}).join("")}</tbody></table></div>
      <div class="panel" style="margin-top:16px"><table class="moments"><thead><tr><th>Session</th><th>Watched</th><th>Viewers</th><th>Moments</th><th>Kept</th><th>Heard with</th></tr></thead>
        <tbody>${t.sessions.slice().reverse().map(a=>`<tr><td class="mono">${e(w(a.started))}</td><td class="mono">${a.minutes} min</td><td class="mono">${a.viewers?m(a.viewers):"—"}</td><td class="mono">${a.moments}</td><td class="mono">${a.kept}</td><td class="mono muted">${e(a.model||"")}</td></tr>`).join("")}</tbody></table></div>
    </div>
  </section>

  <section class="ch-money-sec">
    <div class="wrap money-grid">
      <div><span class="eyebrow">Money</span><h2 class="h2" style="margin-top:14px">Nothing to <em>collect yet.</em></h2>
        <p class="lede" style="margin-top:16px">${e(t.name)} already pays clippers through ${e(t.program)}${t.rate?`, $${t.rate} per 100K views`:""}. Once the room's TikTok is connected, every clip it keeps is posted, submitted to the program, and its views tracked here. After running costs, the profit buys back the room's coin.</p>
        <ol class="mflow mono"><li><b>Payouts in</b><span>per view, from ${e(t.program)}</span></li><li><b>− costs</b><span>machine time, storage, posting</span></li><li><b>= profit</b><span>counted per room, per week</span></li><li class="bb"><b>→ buyback</b><span>buys the coin on the open market, tx linked here</span></li></ol>
      </div>
      <div class="panel"><div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>submissions + payouts</span></div>
        <p class="panel-body muted">None yet. This is a test room: nothing has been posted, so nothing has been submitted or paid. Rows appear here as they happen, with the post link, views and the program's payout.</p>
      </div>
    </div>
  </section>`,document.getElementById("share").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),$("Link copied")}catch{$(location.href)}}),S()}async function N(){var o;let s=null;const i=(o=s==null?void 0:s.streamers)==null?void 0:o[d],n=!1;let r=u[d]||null;W(i,n,r)}N();
