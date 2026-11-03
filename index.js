#!/usr/bin/env node
// word-count - zero-dependency developer tool
let s="";process.stdin.on("data",d=>s+=d.toString().replace(/\uFEFF/g,"")).on("end",()=>{const w=s.trim()?s.trim().split(/\s+/).length:0;console.log(JSON.stringify({lines:s?s.split(/\r?\n/).length:0,words:w,chars:s.length}))})
