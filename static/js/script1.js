function myale(){
alert("Changes saved Successfully");
};

rd.event.rowMoved = function () {
    // set opacity for moved row
    // rd.obj is reference of cloned row (mini table)
    rd.rowOpacity(rd.obj, 85);
    // set opacity for source row and change source row background color
    // rd.objOld is reference of source row
    rd.rowOpacity(rd.objOld, 20, 'White');
    // display message
    msg.innerHTML = 'Moved';
};

var e = document.getElementById('1');
e.innerHTML=localStorage.getItem('e');
e.addEventListener('blur', function(){
        localStorage.setItem('e', this.innerHTML);
        });


var edit = document.getElementById('2');
edit.innerHTML=localStorage.getItem('edit');
edit.addEventListener('blur', function(){
        localStorage.setItem('edit', this.innerHTML);
        });


var edits = document.getElementById('3');
edits.innerHTML=localStorage.getItem('edits');
edits.addEventListener('blur', function(){
        localStorage.setItem('edits', this.innerHTML);
        });
var aa = document.getElementById('4');aa.innerHTML=localStorage.getItem('aa');aa.addEventListener('blur', function(){localStorage.setItem('aa', this.innerHTML);});

var ab = document.getElementById('5');
ab.innerHTML=localStorage.getItem('ab');
ab.addEventListener('blur', function(){
        localStorage.setItem('ab', this.innerHTML);
        });
        
        
var ac = document.getElementById('6');
ac.innerHTML=localStorage.getItem('ac');
ac.addEventListener('blur', function(){
        localStorage.setItem('ac', this.innerHTML);
        });
        
        
var ad = document.getElementById('7');
ad.innerHTML=localStorage.getItem('ad');
ad.addEventListener('blur', function(){
        localStorage.setItem('ad', this.innerHTML);
        });
        

var ae = document.getElementById('11');ae.innerHTML=localStorage.getItem('ae');ae.addEventListener('blur', function(){localStorage.setItem('ae', this.innerHTML);});
var af = document.getElementById('12');af.innerHTML=localStorage.getItem('af');af.addEventListener('blur', function(){localStorage.setItem('af', this.innerHTML);});
var ag = document.getElementById('13');ag.innerHTML=localStorage.getItem('ag');ag.addEventListener('blur', function(){localStorage.setItem('ag', this.innerHTML);});
var ah = document.getElementById('14');ah.innerHTML=localStorage.getItem('ah');ah.addEventListener('blur', function(){localStorage.setItem('ah', this.innerHTML);});
var ai = document.getElementById('15');ai.innerHTML=localStorage.getItem('ai');ai.addEventListener('blur', function(){localStorage.setItem('ai', this.innerHTML);});
var aj = document.getElementById('15');aj.innerHTML=localStorage.getItem('aj');aj.addEventListener('blur', function(){localStorage.setItem('aj', this.innerHTML);});
var ak = document.getElementById('16');ak.innerHTML=localStorage.getItem('ak');ak.addEventListener('blur', function(){localStorage.setItem('ak', this.innerHTML);});
var al = document.getElementById('17');al.innerHTML=localStorage.getItem('al');al.addEventListener('blur', function(){localStorage.setItem('al', this.innerHTML);});
var am = document.getElementById('21');am.innerHTML=localStorage.getItem('am');am.addEventListener('blur', function(){localStorage.setItem('am', this.innerHTML);});
var an = document.getElementById('22');an.innerHTML=localStorage.getItem('an');an.addEventListener('blur', function(){localStorage.setItem('an', this.innerHTML);});
var ao = document.getElementById('23');ao.innerHTML=localStorage.getItem('ao');ao.addEventListener('blur', function(){localStorage.setItem('ao', this.innerHTML);});
var ap = document.getElementById('24');ap.innerHTML=localStorage.getItem('ap');ap.addEventListener('blur', function(){localStorage.setItem('ap', this.innerHTML);});
var aq = document.getElementById('25');aq.innerHTML=localStorage.getItem('aq');aq.addEventListener('blur', function(){localStorage.setItem('aq', this.innerHTML);});
var ar = document.getElementById('26');ar.innerHTML=localStorage.getItem('ar');ar.addEventListener('blur', function(){localStorage.setItem('ar', this.innerHTML);});
var as = document.getElementById('27');as.innerHTML=localStorage.getItem('as');as.addEventListener('blur', function(){localStorage.setItem('as', this.innerHTML);});
var at = document.getElementById('31');at.innerHTML=localStorage.getItem('at');at.addEventListener('blur', function(){localStorage.setItem('at', this.innerHTML);});
var au = document.getElementById('32');au.innerHTML=localStorage.getItem('au');au.addEventListener('blur', function(){localStorage.setItem('au', this.innerHTML);});
var aw = document.getElementById('33');aw.innerHTML=localStorage.getItem('aw');aw.addEventListener('blur', function(){localStorage.setItem('aw', this.innerHTML);});
var ax = document.getElementById('34');ax.innerHTML=localStorage.getItem('ax');ax.addEventListener('blur', function(){localStorage.setItem('ax', this.innerHTML);});
var ay = document.getElementById('35');ay.innerHTML=localStorage.getItem('ay');ay.addEventListener('blur', function(){localStorage.setItem('ay', this.innerHTML);});
var az = document.getElementById('36');az.innerHTML=localStorage.getItem('az');az.addEventListener('blur', function(){localStorage.setItem('az', this.innerHTML);});
var ba = document.getElementById('37');ba.innerHTML=localStorage.getItem('ba');ba.addEventListener('blur', function(){localStorage.setItem('ba', this.innerHTML);});
var bb = document.getElementById('41');bb.innerHTML=localStorage.getItem('bb');bb.addEventListener('blur', function(){localStorage.setItem('bb', this.innerHTML);});
var bc = document.getElementById('42');bc.innerHTML=localStorage.getItem('bc');bc.addEventListener('blur', function(){localStorage.setItem('bc', this.innerHTML);});
var bd = document.getElementById('43');bd.innerHTML=localStorage.getItem('bd');bd.addEventListener('blur', function(){localStorage.setItem('bd', this.innerHTML);});
var be = document.getElementById('44');be.innerHTML=localStorage.getItem('be');be.addEventListener('blur', function(){localStorage.setItem('be', this.innerHTML);});
var bf = document.getElementById('45');bf.innerHTML=localStorage.getItem('bf');bf.addEventListener('blur', function(){localStorage.setItem('bf', this.innerHTML);});
var bg = document.getElementById('46');bg.innerHTML=localStorage.getItem('bg');bg.addEventListener('blur', function(){localStorage.setItem('bg', this.innerHTML);});
var bh = document.getElementById('47');bh.innerHTML=localStorage.getItem('bh');bh.addEventListener('blur', function(){localStorage.setItem('bh', this.innerHTML);});
var bi = document.getElementById('51');bi.innerHTML=localStorage.getItem('bi');bi.addEventListener('blur', function(){localStorage.setItem('bi', this.innerHTML);});
var bj = document.getElementById('52');bj.innerHTML=localStorage.getItem('bj');bj.addEventListener('blur', function(){localStorage.setItem('bj', this.innerHTML);});
var bk = document.getElementById('53');bk.innerHTML=localStorage.getItem('bk');bk.addEventListener('blur', function(){localStorage.setItem('bk', this.innerHTML);});
var bl = document.getElementById('54');bl.innerHTML=localStorage.getItem('bl');bl.addEventListener('blur', function(){localStorage.setItem('bl', this.innerHTML);});
var bm = document.getElementById('55');bm.innerHTML=localStorage.getItem('bm');bm.addEventListener('blur', function(){localStorage.setItem('bm', this.innerHTML);});
var bn = document.getElementById('56');bn.innerHTML=localStorage.getItem('bn');bn.addEventListener('blur', function(){localStorage.setItem('bn', this.innerHTML);});
var bo = document.getElementById('57');bo.innerHTML=localStorage.getItem('bo');bo.addEventListener('blur', function(){localStorage.setItem('bo', this.innerHTML);});
