import{m as R,f as m,e,t as y,o as C}from"./chrome-CvBQm9er.js";/* empty css             */import{R as x,A as f}from"./agents-CNOPjjWv.js";import{V as E}from"./cuts-CrnlMY5Q.js";import{E as j}from"./extras-BxtQe-ul.js";import{L as b}from"./lore-DteX0P91.js";import{K as A}from"./kickrates-CLFNjp1I.js";const $=Object.fromEntries(A.rates.map(s=>[s.kick,s.usd]));R({active:"Rooms"});const w=document.getElementById("room"),K=s=>s>=1e6?`$${(s/1e6).toFixed(2)}M`:s>=1e3?`$${(s/1e3).toFixed(1)}K`:`$${Math.round(s)}`;var L;const c=(location.pathname.match(/^\/rooms\/([a-z0-9_-]+)/i)||[])[1]||new URLSearchParams(location.search).get("id")||((L=x[0])==null?void 0:L.id);let t=x.find(s=>s.id===c);const k=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,M=s=>s?new Date(s*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}):"",O=s=>(s=Math.max(0,Math.floor(s||0)),`${String(Math.floor(s/3600)).padStart(2,"0")}:${String(Math.floor(s/60)%60).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`),N={ready:["cut","ok"],posted:["posted","ok"],submitted:["sent","ok"],paid:["paid","ok"],dropped:["dropped","low"],hidden:["held back","low"],failed:["failed","low"]},W={},H=s=>{var a;return((a=f[s.slug])==null?void 0:a.handle)||`cutroom${(W[s.slug]||s.name||s.slug).toLowerCase().replace(/[^a-z0-9]/g,"")}`},T=s=>{if(!s)return"not yet";const a=Math.max(0,(Date.now()/1e3-s)/60);return a<1?"just now":a<60?`${Math.round(a)} min ago`:a<2880?`${Math.round(a/60)} h ago`:`${Math.round(a/1440)} d ago`},S={live:["Watching live","live"],queued:["Live · waiting for a slot","mid"],digging:["Digging past streams","dig"],offline:["Offline · checking every 5 min",""],idle:["Caught up",""],stopped:["Paused",""],starting:["Starting",""]};function I(s,a,n,i){if(!s&&a.platform!=="Kick")return"";const r=(s==null?void 0:s.mode)||"offline",[l,p]=S[r]||S.offline,v=((s==null?void 0:s.log)||[]).slice(-8).reverse();return`<section class="ag-sec"><div class="wrap"><div class="ag panel">
    <div class="ag-h"><span class="ag-mode ${p}"><i></i>${l}</span>
      <span class="mono muted">checks kick.com/${e(a.slug)} every 5 minutes${s!=null&&s.checked?` · last check ${T(s.checked)}`:""} · snapshot</span></div>
    <p class="ag-doing">${e((s==null?void 0:s.doing)||`Offline. When ${a.name} goes live the room watches the whole stream; in between it digs through past streams for evergreen cuts.`)}</p>
    <div class="ag-cols"><dl class="ag-nums">
      <div><dt>Past moments read</dt><dd class="mono">${(s==null?void 0:s.dug_n)??0}</dd></div>
      <div><dt>Cut from past streams</dt><dd class="mono y">${((s==null?void 0:s.cuts)||[]).length}</dd></div>
      <div><dt>Live sessions</dt><dd class="mono">${a.stats.sessions}</dd></div>
      <div><dt>Last dig</dt><dd class="mono">${T(s==null?void 0:s.last_dig)}</dd></div></dl>
    <ol class="ag-log mono">${v.map(o=>`<li><span>${e(new Date(o.t*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}))}</span>${e(o.msg)}</li>`).join("")||'<li class="muted">No activity yet.</li>'}</ol></div>
  </div></div></section>`}const _=s=>{if(!s)return"";const[a,n]=String(s).split("-");return n?`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+n-1]} ${a}`:a};function P(s){const a=b[s.slug],n=b._meta||{};return!a||!(a.arcs.length||a.cast.length)?"":`<section class="kn-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">What the room knows</span><h2 class="h2" style="margin-top:14px">${e(a.name)}'s <em>world.</em></h2></div>
      <p class="lede" style="max-width:30em">Before it cuts anything, a room reads the streamer's world: who's around them, the running jokes, the storylines fans follow. That's how a hook names the right person and a story edit follows an arc across months. The library holds ${n.storylines||"dozens of"} storylines on ${n.streamers||"dozens of"} streamers, every moment sourced.</p></div>
    <div class="kn">
      <div class="kn-side">
        ${a.cast.length?`<div class="kn-block"><span class="k mono">Regular cast</span><div class="kn-chips">${a.cast.map(i=>`<span class="chip">${e(i)}</span>`).join("")}</div></div>`:""}
        ${a.jokes.length?`<div class="kn-block"><span class="k mono">Running jokes</span><ul>${a.jokes.map(i=>`<li>${e(i)}</li>`).join("")}</ul></div>`:""}
      </div>
      <div class="kn-arcs">${a.arcs.map(i=>`<article class="kn-arc">
        <div class="kn-arc-h"><span class="mono">${e(_(i.start))}${i.end&&i.end!==i.start?` – ${e(_(i.end))}`:i.start?" – now":""}</span>${i.tone.slice(0,3).map(r=>`<span class="badge">${e(r)}</span>`).join("")}</div>
        <b>${e(i.title)}</b><p>${e(i.summary)}${i.summary.length>=259?"…":""}</p>
        <span class="mono kn-n">${i.beats} dated moments · ${i.sources} sources</span></article>`).join("")}</div>
    </div>
  </div></section>`}const z={hype:"Hype edit",story:"Story edit",ranking:"Ranking"};function D(s){const a=j.filter(n=>n.slug===s.slug);return a.length?`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">Edits</span><h2 class="h2" style="margin-top:14px">More than <em>one moment.</em></h2></div>
      <p class="lede" style="max-width:28em">Stories told across months of streams, the month's best counted down, and the big IRL clip-page edit. Each one made by the room from ${e(s.name)}'s own streams.</p></div>
    <div class="real-grid">${a.map(n=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(n.file)}" poster="${e(n.poster)}" controls playsinline preload="none"></video>
      <span class="real-tag mono">${e(z[n.kind]||n.kind)}</span></div>
      <figcaption><b>${e(n.title||"")}</b><span class="mono">${e(n.from||"")} · ${Math.round(n.duration)} s</span></figcaption></figure>`).join("")}</div>
  </div></section>`:""}function U(s){const a=E.filter(n=>n.slug===s.slug);return a.length?`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">While offline</span><h2 class="h2" style="margin-top:14px">Cut from <em>past streams.</em></h2></div>
      <p class="lede" style="max-width:28em">Between streams the room goes back through ${e(s.name)}'s recent streams, starting with the moments viewers clipped most, and recuts them its own way.</p></div>
    <div class="real-grid">${a.map(n=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(n.file)}" poster="${e(n.poster)}" controls playsinline preload="none"></video></div>
      <figcaption><b>${e(n.hook)}</b><span class="mono">${n.date?`from the ${e(n.date)} stream · `:""}${n.layout==="hooksplit"?"facecam split":"auto-framed"} · ${Math.round(n.duration)} s</span>
      <span class="real-how">from <a href="${e(n.source_url)}" target="_blank" rel="noopener noreferrer">the viewer clip</a> watched ${m(n.source_views||0)} times · editor ${n.score}/10</span></figcaption></figure>`).join("")}</div>
  </div></section>`:""}function B(s,a,n){const i=f[c],r=j.find(o=>o.slug===c);if(!t&&!s&&i&&(s={name:i.name,live:!1,category:i.category||"Kick",rate:$[c]}),!t&&!s&&r&&(s={name:r.streamer,live:!1,category:r.platform,rate:$[c],program:r.program,platform:r.platform}),!t&&s&&(t={id:c,slug:c,name:s.name||c,platform:s.platform||"Kick",category:s.category||"IRL",program:s.program||"Kick Clipping (clipping.net)",program_url:"https://clipping.net/c/kick-clipping",rate:s.rate||$[c],title:s.title,sessions:[],clips:[],moments:[],since:null,stats:{sessions:0,minutes:0,words:0,chat:0,moments:0,kept:0,dropped:0,clips:0,held:0,posted:0}}),!t){w.innerHTML='<section><div class="wrap"><h1 class="h2">No room <em>by that name.</em></h1><a class="btn btn-y" href="/rooms" style="margin-top:20px">All rooms</a></div></section>';return}document.title=`${t.name} room · cutroom`;const l=t.stats,p=t.clips[0],v=[["Watch",`${l.minutes} min`,`live, ${l.sessions} session${l.sessions===1?"":"s"}`],["Hear",m(l.words),"words transcribed"],["Read",m(l.chat),"chat messages"],["Find",l.moments,"moments flagged"],["Edit",`${l.kept} / ${l.dropped}`,"kept / dropped by the editor"],["Cut",l.clips,`clips on this page${l.held?`, ${l.held} held back (see below)`:""}${l.median_after_s?` · ~${k(l.median_after_s)} after the moment`:""}`],["Post + collect",l.posted?`${l.posted}`:"—",l.posted?"posted":"posting not connected yet",!0]];w.innerHTML=`
  <section class="ch-head">
    <div class="wrap ch-head-grid">
      <div class="ch-poster">${s!=null&&s.live?`<div class="ch-live"><iframe src="https://player.kick.com/${encodeURIComponent(t.slug)}?muted=true&autoplay=true" title="${e(t.name)} live on Kick" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`:p?`<div class="real-vid"><video src="${e(p.file)}" poster="${e(p.poster)}" controls playsinline preload="none"></video></div>`:""}</div>
      <div class="ch-info">
        <div class="ch-meta">${s!=null&&s.live?`<span class="badge live"><span class="dot-live"></span>Live · ${m(s.viewers)} watching</span>`:'<span class="badge">Offline</span>'}<span class="badge mid">Test room</span><a class="mono muted" href="https://${t.platform==="Twitch"?"twitch.tv":"kick.com"}/${encodeURIComponent(t.slug)}" target="_blank" rel="noopener">${t.platform==="Twitch"?"twitch.tv":"kick.com"}/${e(t.slug)} ↗</a></div>
        <h1 class="cap ch-cap">${e(t.name)} <span class="hl">room</span></h1>
        <div class="ch-sub"><span>clips <b>${e(t.name)}</b> on ${e(t.platform)}</span><span>${e(t.category)}</span>${t.title?`<span class="muted">“${e(t.title)}”</span>`:""}</div>
        <div class="ch-coinbox">${t.coin?`<div><span class="k">Coin</span><b class="mono">$${e(t.coin.ticker)}</b></div><div><span class="k">Market cap</span><b class="mono y">${K(t.coin.mcap_usd||0)}</b></div>`:'<div><span class="k">Coin</span><b class="mono muted">no coin yet</b></div><div><span class="k">Market cap</span><b class="mono muted">opens at launch</b></div>'}
          <div><span class="k">Program</span><a href="${e(t.program_url)}" target="_blank" rel="noopener"><b>${e(t.program)}</b></a></div><div><span class="k">Pays</span><b class="mono y">${t.rate?`$${t.rate} / 100K views`:"—"}</b></div></div>
        <p class="lede" style="max-width:34em">${l.sessions?`This room watched ${e(t.name)} live for ${l.minutes} minutes across ${l.sessions} session${l.sessions===1?"":"s"}.`:`No session yet. A room starts on its own the next time ${e(t.name)} goes live with nothing else in the queue.`} ${l.sessions?" Everything on this page is what it actually did: the moments it flagged, what its editor kept or dropped and why, and the clips it cut while the stream was still going.":""}</p>
        <div class="ch-handles"><span class="k mono">Posts as</span><b class="mono">@${e(H(t))}</b><span class="muted">on TikTok · Instagram · YouTube</span><span class="badge">accounts open at launch</span></div>
        <div class="ch-actions"><a class="btn btn-y" href="/launch">Open a room like this</a><button class="btn btn-ghost" id="share">Copy link</button></div>
      </div>
    </div>
  </section>

  ${I(n,t)}

  ${P(t)}

  ${D(t)}

  ${U(t)}

  <section class="ch-pipe-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Pipeline</span><h2 class="h2" style="margin-top:14px">The room, <em>so far.</em></h2></div></div>
      <ol class="pipe">${v.map(([o,h,d,g],u)=>`<li><span class="mono pn">0${u+1} ${o}</span><b class="mono ${g?"y":""}">${e(String(h))}</b><span class="pl">${e(d)}</span></li>`).join("")}</ol>
    </div>
  </section>

  <section class="ch-clips-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Clips</span><h2 class="h2" style="margin-top:14px">What the room <em>cut.</em></h2></div>
        <p class="lede" style="max-width:26em">Cut live. Each one was ready about a minute after it happened, before any human saw it.</p></div>
      <div class="real-grid">${t.clips.map(o=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(o.file)}" poster="${e(o.poster)}" controls playsinline preload="none"></video></div>
        <figcaption><b>${e(o.hook||"")}</b><span class="mono">${o.after_moment_s?`ready ${k(o.after_moment_s)} after it happened`:""}${o.forced?" · operator pressed clip":""}</span>
        <span class="real-how">${e(o.why||"")}</span><span class="real-how">${e(o.post&&o.post.url?"posted":"not posted yet: TikTok not connected")}</span></figcaption></figure>`).join("")||'<p class="muted">No clips yet.</p>'}</div>
    </div>
  </section>

  <section class="ch-vod-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Every moment</span><h2 class="h2" style="margin-top:14px">What it flagged, <em>and the call.</em></h2></div>
        <p class="lede" style="max-width:28em">The editor drops more than it keeps: anything that needs context, punches down, or that chat reacted to off camera.</p></div>
      <div class="panel"><table class="moments"><thead><tr><th>When</th><th>Signals</th><th>Chat said</th><th>Call</th><th>Why</th></tr></thead>
        <tbody>${t.moments.map(o=>{const h=N[o.stage]||[o.stage,"low"],d=o.signals||{};return`<tr><td class="mono">${e(M(o.found))}<br><span class="muted">${O(o.at)} in</span></td>
          <td class="mono" style="font-size:12px">${d.chat_x?`chat ×${d.chat_x}`:""}${d.laughs?` · ${d.laughs} laughs`:""}${d.clip_it?` · ${d.clip_it}× clip it`:""}${d.forced?" · operator":""}</td>
          <td style="font-size:13px">${(o.chat_top||[]).map(([g,u])=>`“${e(g)}” ×${u}`).join(", ")}</td>
          <td><span class="badge ${h[1]}">${e(h[0])}</span>${o.hook?`<div style="margin-top:6px;font-size:13px"><b>${e(o.hook)}</b></div>`:""}</td>
          <td style="font-size:13px;color:var(--text-2)">${e(o.why||"")}</td></tr>`}).join("")}</tbody></table></div>
      <div class="panel" style="margin-top:16px"><table class="moments"><thead><tr><th>Session</th><th>Watched</th><th>Viewers</th><th>Moments</th><th>Kept</th><th>Heard with</th></tr></thead>
        <tbody>${t.sessions.slice().reverse().map(o=>`<tr><td class="mono">${e(M(o.started))}</td><td class="mono">${o.minutes} min</td><td class="mono">${o.viewers?m(o.viewers):"—"}</td><td class="mono">${o.moments}</td><td class="mono">${o.kept}</td><td class="mono muted">${e(o.model||"")}</td></tr>`).join("")}</tbody></table></div>
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
  </section>`,document.getElementById("share").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),y("Link copied")}catch{y(location.href)}}),C()}async function F(){var r;let s=null;const a=(r=s==null?void 0:s.streamers)==null?void 0:r[c],n=!1;let i=f[c]||null;B(a,n,i)}F();
