/** Draw a fully offline, shareable PNG ticket. No remote services or uploads. */
export type TicketInfo={to:string,from:string,destination:string,kind:string,drink:string,dessert:string,when:string,note:string};
function round(ctx:CanvasRenderingContext2D,x:number,y:number,w:number,h:number,r:number){ctx.beginPath();ctx.roundRect(x,y,w,h,r);}
export async function makeTicket(info:TicketInfo):Promise<Blob>{
  await document.fonts.ready;
  const c=document.createElement('canvas');c.width=1080;c.height=1500;
  const g=c.getContext('2d');if(!g)throw Error('Canvas unavailable');
  const bg=g.createLinearGradient(0,0,1080,1500);bg.addColorStop(0,'#fffaf1');bg.addColorStop(.5,'#fbe9e1');bg.addColorStop(1,'#eed5d1');g.fillStyle=bg;g.fillRect(0,0,1080,1500);
  g.fillStyle='#dfb0a9';g.globalAlpha=.16;g.beginPath();g.arc(80,180,280,0,Math.PI*2);g.fill();g.beginPath();g.arc(1070,1210,320,0,Math.PI*2);g.fill();g.globalAlpha=1;
  g.shadowColor='#915f6440';g.shadowBlur=46;g.shadowOffsetY=18;g.fillStyle='#fffcf6';round(g,66,64,948,1370,58);g.fill();g.shadowBlur=0;g.shadowOffsetY=0;
  g.strokeStyle='#d8a5a4';g.lineWidth=3;g.setLineDash([8,12]);round(g,91,89,898,1320,44);g.stroke();g.setLineDash([]);
  g.textAlign='center';g.fillStyle='#b17e81';g.font='600 25px Georgia, serif';g.fillText('A LITTLE AUTUMN LOVE STORY',540,160);
  g.fillStyle='#75565b';g.font='bold 65px Vazirmatn, Tahoma, sans-serif';g.direction='rtl';g.fillText('دعوت‌نامه‌ی مخصوص تو',540,246);
  // Illustrated autumn leaves / hot cocoa / friendly elephant drawn as shapes.
  g.fillStyle='#d2a17d';for(const [x,y,a] of [[185,345,-.55],[878,356,.6],[210,560,.4],[865,583,-.5]] as const){g.save();g.translate(x,y);g.rotate(a);g.beginPath();g.ellipse(0,0,22,47,.4,0,Math.PI*2);g.fill();g.restore();}
  g.strokeStyle='#a77576';g.lineWidth=7;g.lineCap='round';for(const x of [460,540,620]){g.beginPath();g.moveTo(x,390);g.bezierCurveTo(x-19,368,x+24,348,x,328);g.stroke();}
  g.fillStyle='#d2a29a';round(g,407,408,266,155,35);g.fill();g.fillStyle='#875c60';round(g,420,418,240,130,23);g.fill();g.strokeStyle='#bb8380';g.lineWidth=24;g.beginPath();g.arc(683,477,43,-1.3,1.3);g.stroke();
  g.fillStyle='#b7b8bd';g.beginPath();g.ellipse(300,520,98,102,0,0,7);g.fill();g.beginPath();g.ellipse(250,510,52,74,-.35,0,7);g.fill();g.beginPath();g.ellipse(356,510,52,74,.35,0,7);g.fill();g.beginPath();g.ellipse(300,525,70,75,0,0,7);g.fill();round(g,296,520,40,108,20);g.fill();g.fillStyle='#fff8f4';g.beginPath();g.arc(283,498,9,0,7);g.arc(329,498,9,0,7);g.fill();g.fillStyle='#73575e';g.beginPath();g.arc(284,499,4,0,7);g.arc(330,499,4,0,7);g.fill();
  g.fillStyle='#ad7c87';g.font='bold 40px Vazirmatn, Tahoma, sans-serif';g.fillText('دو نفر، یک قرار، کلی لبخند',540,680);
  g.fillStyle='#73565a';g.font='bold 52px Vazirmatn, Tahoma, sans-serif';writeFit(g,info.destination,540,773,810,52);
  g.fillStyle='#a27d80';g.font='32px Vazirmatn, Tahoma, sans-serif';writeFit(g,info.kind,540,830,790,32);
  g.strokeStyle='#ddc0b7';g.setLineDash([14,10]);g.beginPath();g.moveTo(144,870);g.lineTo(936,870);g.stroke();g.setLineDash([]);
  g.textAlign='right';g.direction='rtl';drawPair(g,'نوشیدنی انتخابی',info.drink,910,936);drawPair(g,'شیرینی خوشمزه',info.dessert,910,1041);drawPair(g,'زمان قرار',info.when,910,1146);
  g.fillStyle='#f7e8e2';round(g,135,1216,810,102,25);g.fill();g.fillStyle='#805d60';g.textAlign='center';g.font='bold 28px Vazirmatn, Tahoma, sans-serif';writeFit(g,'پیشنهاد من: هات‌چاکلت توی هوای سرد پاییزی',540,1276,770,28);
  g.fillStyle='#a17a7d';g.font='23px Vazirmatn, Tahoma, sans-serif';writeFit(g,`از طرف ${info.from}، برای ${info.to}`,540,1375,810,23);
  return new Promise((resolve,reject)=>c.toBlob(blob=>blob?resolve(blob):reject(Error('Could not encode PNG')),'image/png'));
}
function writeFit(g:CanvasRenderingContext2D,s:string,x:number,y:number,max:number,base:number){let size=base;while(g.measureText(s).width>max&&size>18){size-=2;g.font=g.font.replace(/\d+px/,`${size}px`);}g.fillText(s,x,y);}
function drawPair(g:CanvasRenderingContext2D,label:string,value:string,x:number,y:number){g.fillStyle='#af8989';g.font='24px Vazirmatn, Tahoma, sans-serif';g.fillText(label,x,y);g.fillStyle='#64484e';g.font='bold 33px Vazirmatn, Tahoma, sans-serif';g.textAlign='left';writeFit(g,value,155,y+45,695,33);g.textAlign='right';}
