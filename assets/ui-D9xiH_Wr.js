import{f as r,e as s,b as i}from"./chrome-CVbVCWyU.js";import{c,S as l}from"./data-BVHu1XQM.js";const u=[{key:"watch",name:"Watch",makes:"Vod",does:"Pulls new VODs from each source the hour they end."},{key:"find",name:"Find",makes:"Moment",does:"Reads the transcript and the chat replay, and scores every second for “clip it”."},{key:"cut",name:"Cut",makes:"Clip",does:"Trims each top moment to its hook and payoff, then reframes to 9:16 on whoever is talking."},{key:"remix",name:"Remix",makes:"Clip",does:"Adds an AI layer on top of the real moment: a cartoon recreation, a trend template or a cold open. Labelled AI, and only for sources that allow it."},{key:"caption",name:"Caption",makes:"Clip",does:"Burns in word-by-word captions, a hook title, punch-ins and the source credit."},{key:"post",name:"Post",makes:"Post",does:"Publishes to the room’s TikTok, Shorts, Reels and X on a schedule."},{key:"collect",name:"Collect",makes:"Claim",does:"Submits the views to the streamer’s clipping program and banks the payout."}],d={preprod:{label:"Pre-production",note:"Coin on the curve. The room cuts sample clips; nothing is posted yet."},onair:{label:"On air",note:"Coin migrated. Accounts are live and posting every day."},paused:{label:"Paused",note:"Posting paused."}};function h(e){if(!e)return"";const a={whop:"Whop",discord:"Discord",clipping_net:"Clipping",vyro:"Vyro",contest:"Contest",direct:"Direct",agency:"Agency",other:"Other"}[e.type]||e.type,o=e.type==="clipping_net"?"clipping":e.type;return`<span class="badge ${s(o)}">${s(a)}</span>`}function y(e){return e?typeof e.cpm_usd=="number"&&e.cpm_usd>0?`$${e.cpm_usd<1||e.cpm_usd%1?e.cpm_usd.toFixed(2):e.cpm_usd} / 1K`:e.pool_usd?`$${r(e.pool_usd)} pool`:e.rate?e.rate.length>22?`${e.rate.slice(0,21)}…`:e.rate:"—":"—"}function f(e){const a={high:["ok","Verified"],medium:["mid","Documented"],low:["low","Unconfirmed"]}[e]||["low",e||"?"];return`<span class="badge ${a[0]}">${a[1]}</span>`}function v(e){var n;const a=d[e.state]||d.preprod,o=e.sources.map(t=>c[t]).filter(Boolean);return`<a class="ch-card reveal" href="/rooms/${encodeURIComponent(e.id)}">
    <div class="ch-thumb">
      <img src="${s(e.poster||`/frames/${e.frame}.webp`)}" alt="" loading="lazy">
      <span class="badge  ch-state">${s(a.label)}</span>
      <span class="ch-style mono">${s(((n=l[e.style])==null?void 0:n.name)||"")}</span>
    </div>
    <div class="ch-body">
      <div class="ch-title"><h3 class="h3">${s(e.name)}</h3><span class="mono y">$${s(e.ticker)}</span></div>
      <div class="ch-src">clips ${o.map(t=>`<b>${s(t.name)}</b>`).join(" + ")||"—"}</div>
      <dl class="ch-stats">
        <div><dt>Clips</dt><dd class="mono">${r(e.stats.clips)}</dd></div>
        <div><dt>Views</dt><dd class="mono">—</dd></div>
        <div><dt>Earned</dt><dd class="mono y">—</dd></div>
      </dl>
      ${`<div class="meter"><div class="meter-track"><i style="width:${Math.max(2,e.progress*100)}%"></i></div><div class="meter-row"><span><b class="mono">${Math.round(e.progress*100)}%</b> to on air</span><span class="mono">${i(e.marketCapUsd)} MC</span></div></div>`}
    </div>
  </a>`}export{u as S,v as a,f as c,h as p,y as r};
