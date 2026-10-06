import{m as b,f as r,e as t,t as p,o as g}from"./chrome-Bhr1zJcL.js";/* empty css             */import{R as $}from"./rooms-DbEVdv3E.js";b({active:"Rooms"});const h=document.getElementById("room");var v;const u=new URLSearchParams(location.search).get("id")||((v=$[0])==null?void 0:v.id),a=$.find(s=>s.id===u),m=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,c=s=>s?new Date(s*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}):"",f=s=>(s=Math.max(0,Math.floor(s||0)),`${String(Math.floor(s/3600)).padStart(2,"0")}:${String(Math.floor(s/60)%60).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`),w={ready:["cut","ok"],posted:["posted","ok"],submitted:["sent","ok"],paid:["paid","ok"],dropped:["dropped","low"],hidden:["held back","low"],failed:["failed","low"]};function k(){if(!a){h.innerHTML='<section><div class="wrap"><h1 class="h2">No room <em>by that name.</em></h1><a class="btn btn-y" href="/channels.html" style="margin-top:20px">All rooms</a></div></section>';return}document.title=`${a.name} room · cutroom`;const s=a.stats,n=a.clips[0],y=[["Watch",`${s.minutes} min`,`live, ${s.sessions} session${s.sessions===1?"":"s"}`],["Hear",r(s.words),"words transcribed"],["Read",r(s.chat),"chat messages"],["Find",s.moments,"moments flagged"],["Edit",`${s.kept} / ${s.dropped}`,"kept / dropped by the editor"],["Cut",s.clips,`clips on this page${s.held?`, ${s.held} held back (see below)`:""}${s.median_after_s?` · ~${m(s.median_after_s)} after the moment`:""}`],["Post + collect",s.posted?`${s.posted}`:"—",s.posted?"posted":"posting not connected yet",!0]];h.innerHTML=`
  <section class="ch-head">
    <div class="wrap ch-head-grid">
      <div class="ch-poster">${n?`<div class="real-vid"><video src="${t(n.file)}" poster="${t(n.poster)}" controls playsinline preload="none"></video></div>`:""}</div>
      <div class="ch-info">
        <div class="ch-meta"><span class="badge mid">Test room</span><span class="mono muted">no coin yet · first session ${t(c(a.since))}</span></div>
        <h1 class="cap ch-cap">${t(a.name)} <span class="hl">room</span></h1>
        <div class="ch-sub"><span>clips <b>${t(a.name)}</b> on ${t(a.platform)}</span><span>${t(a.category)}</span>${a.title?`<span class="muted">“${t(a.title)}”</span>`:""}</div>
        <div class="ch-sources"><a class="src" href="${t(a.program_url)}" target="_blank" rel="noopener"><b>${t(a.program)}</b>${a.rate?`<span class="mono y">$${a.rate} / 100K views</span>`:""}</a></div>
        <p class="lede" style="max-width:34em">This room watched ${t(a.name)} live for ${s.minutes} minutes across ${s.sessions} session${s.sessions===1?"":"s"}. Everything on this page is what it actually did: the moments it flagged, what its editor kept or dropped and why, and the clips it cut while the stream was still going.</p>
        <div class="ch-actions"><a class="btn btn-y" href="/launch.html">Open a room like this</a><button class="btn btn-ghost" id="share">Copy link</button></div>
      </div>
    </div>
  </section>

  <section class="ch-pipe-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Pipeline</span><h2 class="h2" style="margin-top:14px">The room, <em>so far.</em></h2></div></div>
      <ol class="pipe">${y.map(([e,i,o,d],l)=>`<li><span class="mono pn">0${l+1} ${e}</span><b class="mono ${d?"y":""}">${t(String(i))}</b><span class="pl">${t(o)}</span></li>`).join("")}</ol>
    </div>
  </section>

  <section class="ch-clips-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Clips</span><h2 class="h2" style="margin-top:14px">What the room <em>cut.</em></h2></div>
        <p class="lede" style="max-width:26em">Cut live. Each one was ready about a minute after it happened, before any human saw it.</p></div>
      <div class="real-grid">${a.clips.map(e=>`<figure class="real-card reveal"><div class="real-vid"><video src="${t(e.file)}" poster="${t(e.poster)}" controls playsinline preload="none"></video></div>
        <figcaption><b>${t(e.hook||"")}</b><span class="mono">${e.after_moment_s?`ready ${m(e.after_moment_s)} after it happened`:""}${e.forced?" · operator pressed clip":""}</span>
        <span class="real-how">${t(e.why||"")}</span><span class="real-how">${t(e.post&&e.post.url?"posted":"not posted yet: TikTok not connected")}</span></figcaption></figure>`).join("")||'<p class="muted">No clips yet.</p>'}</div>
    </div>
  </section>

  <section class="ch-vod-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Every moment</span><h2 class="h2" style="margin-top:14px">What it flagged, <em>and the call.</em></h2></div>
        <p class="lede" style="max-width:28em">The editor drops more than it keeps: anything that needs context, punches down, or that chat reacted to off camera.</p></div>
      <div class="panel"><table class="moments"><thead><tr><th>When</th><th>Signals</th><th>Chat said</th><th>Call</th><th>Why</th></tr></thead>
        <tbody>${a.moments.map(e=>{const i=w[e.stage]||[e.stage,"low"],o=e.signals||{};return`<tr><td class="mono">${t(c(e.found))}<br><span class="muted">${f(e.at)} in</span></td>
          <td class="mono" style="font-size:12px">${o.chat_x?`chat ×${o.chat_x}`:""}${o.laughs?` · ${o.laughs} laughs`:""}${o.clip_it?` · ${o.clip_it}× clip it`:""}${o.forced?" · operator":""}</td>
          <td style="font-size:13px">${(e.chat_top||[]).map(([d,l])=>`“${t(d)}” ×${l}`).join(", ")}</td>
          <td><span class="badge ${i[1]}">${t(i[0])}</span>${e.hook?`<div style="margin-top:6px;font-size:13px"><b>${t(e.hook)}</b></div>`:""}</td>
          <td style="font-size:13px;color:var(--text-2)">${t(e.why||"")}</td></tr>`}).join("")}</tbody></table></div>
      <div class="panel" style="margin-top:16px"><table class="moments"><thead><tr><th>Session</th><th>Watched</th><th>Viewers</th><th>Moments</th><th>Kept</th><th>Heard with</th></tr></thead>
        <tbody>${a.sessions.slice().reverse().map(e=>`<tr><td class="mono">${t(c(e.started))}</td><td class="mono">${e.minutes} min</td><td class="mono">${e.viewers?r(e.viewers):"—"}</td><td class="mono">${e.moments}</td><td class="mono">${e.kept}</td><td class="mono muted">${t(e.model||"")}</td></tr>`).join("")}</tbody></table></div>
    </div>
  </section>

  <section class="ch-money-sec">
    <div class="wrap money-grid">
      <div><span class="eyebrow">Money</span><h2 class="h2" style="margin-top:14px">Nothing to <em>collect yet.</em></h2>
        <p class="lede" style="margin-top:16px">${t(a.name)} already pays clippers through ${t(a.program)}${a.rate?`, $${a.rate} per 100K views`:""}. Once the room's TikTok is connected, every clip it keeps is posted, submitted to the program, and its views tracked here. After running costs, the profit buys back the room's coin.</p>
        <ol class="mflow mono"><li><b>Payouts in</b><span>per view, from ${t(a.program)}</span></li><li><b>− costs</b><span>machine time, storage, posting</span></li><li><b>= profit</b><span>counted per room, per week</span></li><li class="bb"><b>→ buyback</b><span>buys the coin on the open market, tx linked here</span></li></ol>
      </div>
      <div class="panel"><div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>submissions + payouts</span></div>
        <p class="panel-body muted">None yet. This is a test room: nothing has been posted, so nothing has been submitted or paid. Rows appear here as they happen, with the post link, views and the program's payout.</p>
      </div>
    </div>
  </section>`,document.getElementById("share").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),p("Link copied")}catch{p(location.href)}}),g()}k();
