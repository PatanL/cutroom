import{m as y,f as r,e as s,t as p,o as u}from"./chrome-CvBQm9er.js";/* empty css             */import{R as b}from"./rooms-BqFtmKIS.js";y({active:"Rooms"});const h=document.getElementById("room"),f=o=>o>=1e6?`$${(o/1e6).toFixed(2)}M`:o>=1e3?`$${(o/1e3).toFixed(1)}K`:`$${Math.round(o)}`;var v;const w=(location.pathname.match(/^\/rooms\/([a-z0-9_-]+)/i)||[])[1]||new URLSearchParams(location.search).get("id")||((v=b[0])==null?void 0:v.id);let t=b.find(o=>o.id===w);const m=o=>`${Math.floor(o/60)}:${String(Math.round(o%60)).padStart(2,"0")}`,$=o=>o?new Date(o*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}):"",k=o=>(o=Math.max(0,Math.floor(o||0)),`${String(Math.floor(o/3600)).padStart(2,"0")}:${String(Math.floor(o/60)%60).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`),x={ready:["cut","ok"],posted:["posted","ok"],submitted:["sent","ok"],paid:["paid","ok"],dropped:["dropped","low"],hidden:["held back","low"],failed:["failed","low"]};function _(o,S){if(!t){h.innerHTML='<section><div class="wrap"><h1 class="h2">No room <em>by that name.</em></h1><a class="btn btn-y" href="/rooms" style="margin-top:20px">All rooms</a></div></section>';return}document.title=`${t.name} room · cutroom`;const a=t.stats,d=t.clips[0],g=[["Watch",`${a.minutes} min`,`live, ${a.sessions} session${a.sessions===1?"":"s"}`],["Hear",r(a.words),"words transcribed"],["Read",r(a.chat),"chat messages"],["Find",a.moments,"moments flagged"],["Edit",`${a.kept} / ${a.dropped}`,"kept / dropped by the editor"],["Cut",a.clips,`clips on this page${a.held?`, ${a.held} held back (see below)`:""}${a.median_after_s?` · ~${m(a.median_after_s)} after the moment`:""}`],["Post + collect",a.posted?`${a.posted}`:"—",a.posted?"posted":"posting not connected yet",!0]];h.innerHTML=`
  <section class="ch-head">
    <div class="wrap ch-head-grid">
      <div class="ch-poster">${d?`<div class="real-vid"><video src="${s(d.file)}" poster="${s(d.poster)}" controls playsinline preload="none"></video></div>`:""}</div>
      <div class="ch-info">
        <div class="ch-meta"><span class="badge">Offline</span><span class="badge mid">Test room</span><a class="mono muted" href="https://kick.com/${encodeURIComponent(t.slug)}" target="_blank" rel="noopener">kick.com/${s(t.slug)} ↗</a></div>
        <h1 class="cap ch-cap">${s(t.name)} <span class="hl">room</span></h1>
        <div class="ch-sub"><span>clips <b>${s(t.name)}</b> on ${s(t.platform)}</span><span>${s(t.category)}</span>${t.title?`<span class="muted">“${s(t.title)}”</span>`:""}</div>
        <div class="ch-coinbox">${t.coin?`<div><span class="k">Coin</span><b class="mono">$${s(t.coin.ticker)}</b></div><div><span class="k">Market cap</span><b class="mono y">${f(t.coin.mcap_usd||0)}</b></div>`:'<div><span class="k">Coin</span><b class="mono muted">no coin yet</b></div><div><span class="k">Market cap</span><b class="mono muted">opens at launch</b></div>'}
          <div><span class="k">Program</span><a href="${s(t.program_url)}" target="_blank" rel="noopener"><b>${s(t.program)}</b></a></div><div><span class="k">Pays</span><b class="mono y">${t.rate?`$${t.rate} / 100K views`:"—"}</b></div></div>
        <p class="lede" style="max-width:34em">${a.sessions?`This room watched ${s(t.name)} live for ${a.minutes} minutes across ${a.sessions} session${a.sessions===1?"":"s"}.`:`No session yet. A room starts on its own the next time ${s(t.name)} goes live with nothing else in the queue.`} ${a.sessions?" Everything on this page is what it actually did: the moments it flagged, what its editor kept or dropped and why, and the clips it cut while the stream was still going.":""}</p>
        <div class="ch-actions"><a class="btn btn-y" href="/launch">Open a room like this</a><button class="btn btn-ghost" id="share">Copy link</button></div>
      </div>
    </div>
  </section>

  <section class="ch-pipe-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Pipeline</span><h2 class="h2" style="margin-top:14px">The room, <em>so far.</em></h2></div></div>
      <ol class="pipe">${g.map(([e,i,n,l],c)=>`<li><span class="mono pn">0${c+1} ${e}</span><b class="mono ${l?"y":""}">${s(String(i))}</b><span class="pl">${s(n)}</span></li>`).join("")}</ol>
    </div>
  </section>

  <section class="ch-clips-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Clips</span><h2 class="h2" style="margin-top:14px">What the room <em>cut.</em></h2></div>
        <p class="lede" style="max-width:26em">Cut live. Each one was ready about a minute after it happened, before any human saw it.</p></div>
      <div class="real-grid">${t.clips.map(e=>`<figure class="real-card reveal"><div class="real-vid"><video src="${s(e.file)}" poster="${s(e.poster)}" controls playsinline preload="none"></video></div>
        <figcaption><b>${s(e.hook||"")}</b><span class="mono">${e.after_moment_s?`ready ${m(e.after_moment_s)} after it happened`:""}${e.forced?" · operator pressed clip":""}</span>
        <span class="real-how">${s(e.why||"")}</span><span class="real-how">${s(e.post&&e.post.url?"posted":"not posted yet: TikTok not connected")}</span></figcaption></figure>`).join("")||'<p class="muted">No clips yet.</p>'}</div>
    </div>
  </section>

  <section class="ch-vod-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Every moment</span><h2 class="h2" style="margin-top:14px">What it flagged, <em>and the call.</em></h2></div>
        <p class="lede" style="max-width:28em">The editor drops more than it keeps: anything that needs context, punches down, or that chat reacted to off camera.</p></div>
      <div class="panel"><table class="moments"><thead><tr><th>When</th><th>Signals</th><th>Chat said</th><th>Call</th><th>Why</th></tr></thead>
        <tbody>${t.moments.map(e=>{const i=x[e.stage]||[e.stage,"low"],n=e.signals||{};return`<tr><td class="mono">${s($(e.found))}<br><span class="muted">${k(e.at)} in</span></td>
          <td class="mono" style="font-size:12px">${n.chat_x?`chat ×${n.chat_x}`:""}${n.laughs?` · ${n.laughs} laughs`:""}${n.clip_it?` · ${n.clip_it}× clip it`:""}${n.forced?" · operator":""}</td>
          <td style="font-size:13px">${(e.chat_top||[]).map(([l,c])=>`“${s(l)}” ×${c}`).join(", ")}</td>
          <td><span class="badge ${i[1]}">${s(i[0])}</span>${e.hook?`<div style="margin-top:6px;font-size:13px"><b>${s(e.hook)}</b></div>`:""}</td>
          <td style="font-size:13px;color:var(--text-2)">${s(e.why||"")}</td></tr>`}).join("")}</tbody></table></div>
      <div class="panel" style="margin-top:16px"><table class="moments"><thead><tr><th>Session</th><th>Watched</th><th>Viewers</th><th>Moments</th><th>Kept</th><th>Heard with</th></tr></thead>
        <tbody>${t.sessions.slice().reverse().map(e=>`<tr><td class="mono">${s($(e.started))}</td><td class="mono">${e.minutes} min</td><td class="mono">${e.viewers?r(e.viewers):"—"}</td><td class="mono">${e.moments}</td><td class="mono">${e.kept}</td><td class="mono muted">${s(e.model||"")}</td></tr>`).join("")}</tbody></table></div>
    </div>
  </section>

  <section class="ch-money-sec">
    <div class="wrap money-grid">
      <div><span class="eyebrow">Money</span><h2 class="h2" style="margin-top:14px">Nothing to <em>collect yet.</em></h2>
        <p class="lede" style="margin-top:16px">${s(t.name)} already pays clippers through ${s(t.program)}${t.rate?`, $${t.rate} per 100K views`:""}. Once the room's TikTok is connected, every clip it keeps is posted, submitted to the program, and its views tracked here. After running costs, the profit buys back the room's coin.</p>
        <ol class="mflow mono"><li><b>Payouts in</b><span>per view, from ${s(t.program)}</span></li><li><b>− costs</b><span>machine time, storage, posting</span></li><li><b>= profit</b><span>counted per room, per week</span></li><li class="bb"><b>→ buyback</b><span>buys the coin on the open market, tx linked here</span></li></ol>
      </div>
      <div class="panel"><div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>submissions + payouts</span></div>
        <p class="panel-body muted">None yet. This is a test room: nothing has been posted, so nothing has been submitted or paid. Rows appear here as they happen, with the post link, views and the program's payout.</p>
      </div>
    </div>
  </section>`,document.getElementById("share").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),p("Link copied")}catch{p(location.href)}}),u()}async function M(){_()}M();
