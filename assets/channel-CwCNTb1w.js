const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/live-zN1DdlIV.js","assets/chrome-CvBQm9er.js","assets/chrome-BZiqIjL2.css","assets/live-CiQGga_D.css"])))=>i.map(i=>d[i]);
import{m as O,f as g,e,t as y,o as A}from"./chrome-CvBQm9er.js";/* empty css             */import{R as C,A as $}from"./agents-CNOPjjWv.js";import{V as W}from"./cuts-CrnlMY5Q.js";import{E as j}from"./extras-BxtQe-ul.js";import{L as w}from"./lore-DteX0P91.js";import{K as I}from"./kickrates-CLFNjp1I.js";const K="modulepreload",D=function(s){return"/"+s},k={},H=function(t,n,l){let p=Promise.resolve();if(n&&n.length>0){let r=function(m){return Promise.all(m.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),o=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));p=r(n.map(m=>{if(m=D(m),m in k)return;k[m]=!0;const d=m.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${u}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":K,d||(v.as="script"),v.crossOrigin="",v.href=m,o&&v.setAttribute("nonce",o),document.head.appendChild(v),d)return new Promise((x,P)=>{v.addEventListener("load",x),v.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${m}`)))})}))}function i(r){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r}return p.then(r=>{for(const c of r||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})},f=Object.fromEntries(I.rates.map(s=>[s.kick,s.usd]));O({active:"Rooms"});const b=document.getElementById("room"),T="https://nest-coral-comfort-integral.trycloudflare.com",U=s=>s>=1e6?`$${(s/1e6).toFixed(2)}M`:s>=1e3?`$${(s/1e3).toFixed(1)}K`:`$${Math.round(s)}`,N=`
  <section class="lv-embed" id="live-sec">
    <div class="wrap">
      <div class="lv-embed-head"><div class="lv-onair" id="onair"><span class="lv-dot"></span><b id="air-word">Connecting</b><span class="mono" id="air-clock">--:--:--</span></div>
        <span class="muted">The room is watching this stream right now: every word it hears, chat's pulse, and each moment it cuts.</span></div>
      <div class="lv-watch" id="watch"></div>
    </div>
    <section class="lv-board-sec">
      <div class="wrap">
        <div class="lv-counters" id="counters"></div>
        <div class="lv-board">
          <div class="panel lv-feed">
            <div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>source · <span id="src-name">kick</span></span><span class="tc" id="feed-tc">00:00:00</span></div>
            <div class="lv-screen"><img id="thumb" alt="Latest frame from the stream" hidden><div class="lv-screen-empty" id="thumb-empty">tuning in</div><span class="lv-rec"><i></i>REC</span></div>
            <div class="lv-hear"><div class="lv-label"><span>What the room hears</span><span class="mono" id="tx-meta"></span></div><ol class="lv-tx" id="tx"></ol></div>
          </div>
          <div class="panel lv-signal">
            <div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>signal · last 5 min</span><span class="tc" id="lag"></span></div>
            <div class="lv-chart"><canvas id="chart" aria-label="Loudness, chat speed and moment score over the last five minutes"></canvas></div>
            <p class="lv-key mono"><span><i class="k-loud"></i>loudness</span><span><i class="k-chat"></i>chat msgs/sec</span><span><i class="k-score"></i>moment score</span><span><i class="k-flag"></i>moment</span></p>
            <div class="lv-log"><div class="lv-label"><span>Progress log</span><span class="mono" id="log-n"></span></div><ol class="lv-logl" id="log"></ol></div>
          </div>
          <div class="panel lv-cuts">
            <div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>cut list</span><span class="tc" id="cut-n">0 clips</span></div>
            <div class="lv-cutlist" id="cuts"><p class="lv-empty">Watching. The first moments land after about two minutes of stream.</p></div>
          </div>
        </div>
      </div>
    </section>
  </section>`;var R;const h=(location.pathname.match(/^\/rooms\/([a-z0-9_-]+)/i)||[])[1]||new URLSearchParams(location.search).get("id")||((R=C[0])==null?void 0:R.id);let a=C.find(s=>s.id===h);const _=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,E=s=>s?new Date(s*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}):"",z=s=>(s=Math.max(0,Math.floor(s||0)),`${String(Math.floor(s/3600)).padStart(2,"0")}:${String(Math.floor(s/60)%60).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`),B={ready:["cut","ok"],posted:["posted","ok"],submitted:["sent","ok"],paid:["paid","ok"],dropped:["dropped","low"],hidden:["held back","low"],failed:["failed","low"]},V={},q=s=>{var t;return((t=$[s.slug])==null?void 0:t.handle)||`cutroom${(V[s.slug]||s.name||s.slug).toLowerCase().replace(/[^a-z0-9]/g,"")}`},S=s=>{if(!s)return"not yet";const t=Math.max(0,(Date.now()/1e3-s)/60);return t<1?"just now":t<60?`${Math.round(t)} min ago`:t<2880?`${Math.round(t/60)} h ago`:`${Math.round(t/1440)} d ago`},L={live:["Watching live","live"],queued:["Live · waiting for a slot","mid"],digging:["Digging past streams","dig"],offline:["Offline · checking every 5 min",""],idle:["Caught up",""],stopped:["Paused",""],starting:["Starting",""]};function F(s,t,n,l){if(!s&&!l&&t.platform!=="Kick")return"";const p=l?"live":(s==null?void 0:s.mode)||"offline",[i,r]=L[p]||L.offline,c=((s==null?void 0:s.log)||[]).slice(-8).reverse();return`<section class="ag-sec"><div class="wrap"><div class="ag panel">
    <div class="ag-h"><span class="ag-mode ${r}"><i></i>${i}</span>
      <span class="mono muted">checks kick.com/${e(t.slug)} every 5 minutes${s!=null&&s.checked?` · last check ${S(s.checked)}`:""}</span></div>
    <p class="ag-doing">${e(l?`Watching ${t.name} live right now: every word, chat's pulse, each moment it cuts. The board is above.`:(s==null?void 0:s.doing)||`Offline. When ${t.name} goes live the room watches the whole stream; in between it digs through past streams for evergreen cuts.`)}</p>
    <div class="ag-cols"><dl class="ag-nums">
      <div><dt>Past moments read</dt><dd class="mono">${(s==null?void 0:s.dug_n)??0}</dd></div>
      <div><dt>Cut from past streams</dt><dd class="mono y">${((s==null?void 0:s.cuts)||[]).length}</dd></div>
      <div><dt>Live sessions</dt><dd class="mono">${t.stats.sessions}</dd></div>
      <div><dt>Last dig</dt><dd class="mono">${S(s==null?void 0:s.last_dig)}</dd></div></dl>
    <ol class="ag-log mono">${c.map(o=>`<li><span>${e(new Date(o.t*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}))}</span>${e(o.msg)}</li>`).join("")||'<li class="muted">No activity yet.</li>'}</ol></div>
  </div></div></section>`}const M=s=>{if(!s)return"";const[t,n]=String(s).split("-");return n?`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+n-1]} ${t}`:t};function J(s){const t=w[s.slug],n=w._meta||{};return!t||!(t.arcs.length||t.cast.length)?"":`<section class="kn-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">What the room knows</span><h2 class="h2" style="margin-top:14px">${e(t.name)}'s <em>world.</em></h2></div>
      <p class="lede" style="max-width:30em">Before it cuts anything, a room reads the streamer's world: who's around them, the running jokes, the storylines fans follow. That's how a hook names the right person and a story edit follows an arc across months. The library holds ${n.storylines||"dozens of"} storylines on ${n.streamers||"dozens of"} streamers, every moment sourced.</p></div>
    <div class="kn">
      <div class="kn-side">
        ${t.cast.length?`<div class="kn-block"><span class="k mono">Regular cast</span><div class="kn-chips">${t.cast.map(l=>`<span class="chip">${e(l)}</span>`).join("")}</div></div>`:""}
        ${t.jokes.length?`<div class="kn-block"><span class="k mono">Running jokes</span><ul>${t.jokes.map(l=>`<li>${e(l)}</li>`).join("")}</ul></div>`:""}
      </div>
      <div class="kn-arcs">${t.arcs.map(l=>`<article class="kn-arc">
        <div class="kn-arc-h"><span class="mono">${e(M(l.start))}${l.end&&l.end!==l.start?` – ${e(M(l.end))}`:l.start?" – now":""}</span>${l.tone.slice(0,3).map(p=>`<span class="badge">${e(p)}</span>`).join("")}</div>
        <b>${e(l.title)}</b><p>${e(l.summary)}${l.summary.length>=259?"…":""}</p>
        <span class="mono kn-n">${l.beats} dated moments · ${l.sources} sources</span></article>`).join("")}</div>
    </div>
  </div></section>`}const G={hype:"Hype edit",story:"Story edit",ranking:"Ranking"};function X(s){const t=j.filter(n=>n.slug===s.slug);return t.length?`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">Edits</span><h2 class="h2" style="margin-top:14px">More than <em>one moment.</em></h2></div>
      <p class="lede" style="max-width:28em">Stories told across months of streams, the month's best counted down, and the big IRL clip-page edit. Each one made by the room from ${e(s.name)}'s own streams.</p></div>
    <div class="real-grid">${t.map(n=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(n.file)}" poster="${e(n.poster)}" controls playsinline preload="none"></video>
      <span class="real-tag mono">${e(G[n.kind]||n.kind)}</span></div>
      <figcaption><b>${e(n.title||"")}</b><span class="mono">${e(n.from||"")} · ${Math.round(n.duration)} s</span></figcaption></figure>`).join("")}</div>
  </div></section>`:""}function Y(s){const t=W.filter(n=>n.slug===s.slug);return t.length?`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">While offline</span><h2 class="h2" style="margin-top:14px">Cut from <em>past streams.</em></h2></div>
      <p class="lede" style="max-width:28em">Between streams the room goes back through ${e(s.name)}'s recent streams, starting with the moments viewers clipped most, and recuts them its own way.</p></div>
    <div class="real-grid">${t.map(n=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(n.file)}" poster="${e(n.poster)}" controls playsinline preload="none"></video></div>
      <figcaption><b>${e(n.hook)}</b><span class="mono">${n.date?`from the ${e(n.date)} stream · `:""}${n.layout==="hooksplit"?"facecam split":"auto-framed"} · ${Math.round(n.duration)} s</span>
      <span class="real-how">from <a href="${e(n.source_url)}" target="_blank" rel="noopener noreferrer">the viewer clip</a> watched ${g(n.source_views||0)} times · editor ${n.score}/10</span></figcaption></figure>`).join("")}</div>
  </div></section>`:""}function Q(s,t,n){const l=$[h],p=j.find(o=>o.slug===h);if(!a&&!s&&l&&(s={name:l.name,live:!1,category:l.category||"Kick",rate:f[h]}),!a&&!s&&p&&(s={name:p.streamer,live:!1,category:p.platform,rate:f[h],program:p.program,platform:p.platform}),!a&&s&&(a={id:h,slug:h,name:s.name||h,platform:s.platform||"Kick",category:s.category||"IRL",program:s.program||"Kick Clipping (clipping.net)",program_url:"https://clipping.net/c/kick-clipping",rate:s.rate||f[h],title:s.title,sessions:[],clips:[],moments:[],since:null,stats:{sessions:0,minutes:0,words:0,chat:0,moments:0,kept:0,dropped:0,clips:0,held:0,posted:0}}),!a){b.innerHTML='<section><div class="wrap"><h1 class="h2">No room <em>by that name.</em></h1><a class="btn btn-y" href="/rooms" style="margin-top:20px">All rooms</a></div></section>';return}document.title=`${a.name} room · cutroom`;const i=a.stats,r=a.clips[0],c=[["Watch",`${i.minutes} min`,`live, ${i.sessions} session${i.sessions===1?"":"s"}`],["Hear",g(i.words),"words transcribed"],["Read",g(i.chat),"chat messages"],["Find",i.moments,"moments flagged"],["Edit",`${i.kept} / ${i.dropped}`,"kept / dropped by the editor"],["Cut",i.clips,`clips on this page${i.held?`, ${i.held} held back (see below)`:""}${i.median_after_s?` · ~${_(i.median_after_s)} after the moment`:""}`],["Post + collect",i.posted?`${i.posted}`:"—",i.posted?"posted":"posting not connected yet",!0]];b.innerHTML=`
  <section class="ch-head">
    <div class="wrap ch-head-grid">
      <div class="ch-poster">${s!=null&&s.live&&!t?`<div class="ch-live"><iframe src="https://player.kick.com/${encodeURIComponent(a.slug)}?muted=true&autoplay=true" title="${e(a.name)} live on Kick" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`:r?`<div class="real-vid"><video src="${e(r.file)}" poster="${e(r.poster)}" controls playsinline preload="none"></video></div>`:""}</div>
      <div class="ch-info">
        <div class="ch-meta">${s!=null&&s.live?`<span class="badge live"><span class="dot-live"></span>Live · ${g(s.viewers)} watching</span>`:'<span class="badge">Offline</span>'}${t?'<span class="badge room">Room on air · cutting now</span>':'<span class="badge mid">Test room</span>'}<a class="mono muted" href="https://${a.platform==="Twitch"?"twitch.tv":"kick.com"}/${encodeURIComponent(a.slug)}" target="_blank" rel="noopener">${a.platform==="Twitch"?"twitch.tv":"kick.com"}/${e(a.slug)} ↗</a></div>
        <h1 class="cap ch-cap">${e(a.name)} <span class="hl">room</span></h1>
        <div class="ch-sub"><span>clips <b>${e(a.name)}</b> on ${e(a.platform)}</span><span>${e(a.category)}</span>${a.title?`<span class="muted">“${e(a.title)}”</span>`:""}</div>
        <div class="ch-coinbox">${a.coin?`<div><span class="k">Coin</span><b class="mono">$${e(a.coin.ticker)}</b></div><div><span class="k">Market cap</span><b class="mono y">${U(a.coin.mcap_usd||0)}</b></div>`:'<div><span class="k">Coin</span><b class="mono muted">no coin yet</b></div><div><span class="k">Market cap</span><b class="mono muted">opens at launch</b></div>'}
          <div><span class="k">Program</span><a href="${e(a.program_url)}" target="_blank" rel="noopener"><b>${e(a.program)}</b></a></div><div><span class="k">Pays</span><b class="mono y">${a.rate?`$${a.rate} / 100K views`:"—"}</b></div></div>
        <p class="lede" style="max-width:34em">${i.sessions?`This room watched ${e(a.name)} live for ${i.minutes} minutes across ${i.sessions} session${i.sessions===1?"":"s"}.`:`No session yet. A room starts on its own the next time ${e(a.name)} goes live with nothing else in the queue.`} ${i.sessions?" Everything on this page is what it actually did: the moments it flagged, what its editor kept or dropped and why, and the clips it cut while the stream was still going.":""}</p>
        <div class="ch-handles"><span class="k mono">Posts as</span><b class="mono">@${e(q(a))}</b><span class="muted">on TikTok · Instagram · YouTube</span><span class="badge">accounts open at launch</span></div>
        <div class="ch-actions"><a class="btn btn-y" href="/launch">Open a room like this</a><button class="btn btn-ghost" id="share">Copy link</button></div>
      </div>
    </div>
  </section>

  ${F(n,a,s,t)}

  ${J(a)}

  ${X(a)}

  ${Y(a)}

  <section class="ch-pipe-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Pipeline</span><h2 class="h2" style="margin-top:14px">The room, <em>so far.</em></h2></div></div>
      <ol class="pipe">${c.map(([o,m,d,u],v)=>`<li><span class="mono pn">0${v+1} ${o}</span><b class="mono ${u?"y":""}">${e(String(m))}</b><span class="pl">${e(d)}</span></li>`).join("")}</ol>
    </div>
  </section>

  <section class="ch-clips-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Clips</span><h2 class="h2" style="margin-top:14px">What the room <em>cut.</em></h2></div>
        <p class="lede" style="max-width:26em">Cut live. Each one was ready about a minute after it happened, before any human saw it.</p></div>
      <div class="real-grid">${a.clips.map(o=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(o.file)}" poster="${e(o.poster)}" controls playsinline preload="none"></video></div>
        <figcaption><b>${e(o.hook||"")}</b><span class="mono">${o.after_moment_s?`ready ${_(o.after_moment_s)} after it happened`:""}${o.forced?" · operator pressed clip":""}</span>
        <span class="real-how">${e(o.why||"")}</span><span class="real-how">${e(o.post&&o.post.url?"posted":"not posted yet: TikTok not connected")}</span></figcaption></figure>`).join("")||'<p class="muted">No clips yet.</p>'}</div>
    </div>
  </section>

  <section class="ch-vod-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Every moment</span><h2 class="h2" style="margin-top:14px">What it flagged, <em>and the call.</em></h2></div>
        <p class="lede" style="max-width:28em">The editor drops more than it keeps: anything that needs context, punches down, or that chat reacted to off camera.</p></div>
      <div class="panel"><table class="moments"><thead><tr><th>When</th><th>Signals</th><th>Chat said</th><th>Call</th><th>Why</th></tr></thead>
        <tbody>${a.moments.map(o=>{const m=B[o.stage]||[o.stage,"low"],d=o.signals||{};return`<tr><td class="mono">${e(E(o.found))}<br><span class="muted">${z(o.at)} in</span></td>
          <td class="mono" style="font-size:12px">${d.chat_x?`chat ×${d.chat_x}`:""}${d.laughs?` · ${d.laughs} laughs`:""}${d.clip_it?` · ${d.clip_it}× clip it`:""}${d.forced?" · operator":""}</td>
          <td style="font-size:13px">${(o.chat_top||[]).map(([u,v])=>`“${e(u)}” ×${v}`).join(", ")}</td>
          <td><span class="badge ${m[1]}">${e(m[0])}</span>${o.hook?`<div style="margin-top:6px;font-size:13px"><b>${e(o.hook)}</b></div>`:""}</td>
          <td style="font-size:13px;color:var(--text-2)">${e(o.why||"")}</td></tr>`}).join("")}</tbody></table></div>
      <div class="panel" style="margin-top:16px"><table class="moments"><thead><tr><th>Session</th><th>Watched</th><th>Viewers</th><th>Moments</th><th>Kept</th><th>Heard with</th></tr></thead>
        <tbody>${a.sessions.slice().reverse().map(o=>`<tr><td class="mono">${e(E(o.started))}</td><td class="mono">${o.minutes} min</td><td class="mono">${o.viewers?g(o.viewers):"—"}</td><td class="mono">${o.moments}</td><td class="mono">${o.kept}</td><td class="mono muted">${e(o.model||"")}</td></tr>`).join("")}</tbody></table></div>
    </div>
  </section>

  <section class="ch-money-sec">
    <div class="wrap money-grid">
      <div><span class="eyebrow">Money</span><h2 class="h2" style="margin-top:14px">Nothing to <em>collect yet.</em></h2>
        <p class="lede" style="margin-top:16px">${e(a.name)} already pays clippers through ${e(a.program)}${a.rate?`, $${a.rate} per 100K views`:""}. Once the room's TikTok is connected, every clip it keeps is posted, submitted to the program, and its views tracked here. After running costs, the profit buys back the room's coin.</p>
        <ol class="mflow mono"><li><b>Payouts in</b><span>per view, from ${e(a.program)}</span></li><li><b>− costs</b><span>machine time, storage, posting</span></li><li><b>= profit</b><span>counted per room, per week</span></li><li class="bb"><b>→ buyback</b><span>buys the coin on the open market, tx linked here</span></li></ol>
      </div>
      <div class="panel"><div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>submissions + payouts</span></div>
        <p class="panel-body muted">None yet. This is a test room: nothing has been posted, so nothing has been submitted or paid. Rows appear here as they happen, with the post link, views and the program's payout.</p>
      </div>
    </div>
  </section>`,document.getElementById("share").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),y("Link copied")}catch{y(location.href)}}),A()}async function Z(){var p,i;let s=null;try{const r=new AbortController;setTimeout(()=>r.abort(),4e3);const c=await fetch(`${T}/status`,{signal:r.signal,cache:"no-store"});c.ok&&(s=await c.json())}catch{}const t=(p=s==null?void 0:s.streamers)==null?void 0:p[h],n=!!((i=s==null?void 0:s.rooms)!=null&&i[h]);let l=$[h]||null;if($[h])try{const r=await fetch(`${T}/agent/${encodeURIComponent(h)}`,{cache:"no-store"});if(r.ok){const c=await r.json();l={...c,dug_n:Object.keys(c.dug||{}).length}}}catch{}Q(t,n,l),n&&(b.insertAdjacentHTML("afterbegin",N),window.__CUTROOM_EMBED=!0,await H(()=>import("./live-zN1DdlIV.js"),__vite__mapDeps([0,1,2,3])))}Z();
