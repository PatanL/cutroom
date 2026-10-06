import{m,e as a,o as i}from"./chrome-Bhr1zJcL.js";import{R as t}from"./rooms-DbEVdv3E.js";m({active:"Rooms"});const e=s=>document.querySelector(s),o=s=>`/channel.html?id=${encodeURIComponent(s.id)}`,p=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,l=s=>`<span class="av" style="${s.poster?`background-image:url('${a(s.poster)}')`:""}"></span>`,c=s=>s.rate?`$${s.rate} / 100K views`:"";e("#side").innerHTML=t.map(s=>`<li><a href="${o(s)}">${l(s)}<span class="sn"><b>${a(s.name)}</b><span>${a(s.category)}</span></span>
  <span class="sv"><span class="mono pp">${s.stats.clips} clip${s.stats.clips===1?"":"s"}</span></span></a></li>`).join("")||'<li class="muted" style="padding:8px 14px">No rooms yet.</li>';function r(s){const n=s.stats;return`<a class="b-card reveal" href="${o(s)}">
    <div class="b-thumb">${s.cover||s.poster?`<img src="${a(s.cover||s.poster)}" alt="" loading="lazy">`:""}
      <span class="b-badge test">TEST ROOM</span>
      <span class="b-count mono">${n.minutes} min watched live · ${n.moments} moments</span>
    </div>
    <div class="b-meta">${l(s)}
      <div class="b-txt"><b class="b-title">${a(s.title||`${s.name} on ${s.platform}`)}</b>
        <span class="b-name">${a(s.name)} room <span class="mono muted">no coin yet</span></span>
        <span class="b-cat">clips ${a(s.name)} · ${a(s.program)} ${s.rate?`· <span class="y">${a(c(s))}</span>`:""}</span>
        <span class="b-tags"><span>${a(s.category)}</span><span>${a(s.platform)}</span><span>${n.clips} clips cut</span>${n.median_after_s?`<span>~${p(n.median_after_s)} moment → clip</span>`:""}</span></div></div></a>`}e("#onair").innerHTML='<div class="b-empty"><b>No rooms on air yet.</b><span>The first rooms open at launch. Until then, the test rooms below show exactly what one does: real streams, watched live, cut by the room.</span></div>';e("#preprod").innerHTML=t.map(r).join("");const $=t.flatMap(s=>s.clips.map(n=>({...n,room:s}))).sort((s,n)=>(n.at||0)-(s.at||0)).slice(0,10);e("#cuts").innerHTML=$.map(s=>`<a class="cut-card reveal" href="${o(s.room)}"><div class="real-vid sm"><img src="${a(s.poster)}" alt="" loading="lazy"></div>
  <b>${a(s.hook)}</b><span class="mono">${a(s.room.name)} · ${s.after_moment_s?`ready ${p(s.after_moment_s)} after it happened`:`${Math.round(s.duration||0)} s`}</span></a>`).join("");i();
