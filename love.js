let final = `
我喜欢你是寂静的，仿佛你消失了一样。 
你从远处聆听我，我的声音却无法触及你。 
好像你的双眼已经飞离远去， 
如同一个吻，封缄了你的嘴。 
如同所有的事物充满了我的灵魂， 
你从所有的事物中浮现，充满了我的灵魂。 
你像我灵魂，一只梦的蝴蝶，
你如同忧郁这个字。 
我喜欢你是寂静的，好像你已远去。 
你听起来像在悲叹，一只如鸽悲鸣的蝴蝶。 
你从远处听见我，我的声音无法企及你。 
让我在你的沉默中安静无声。 
并且让我借你的沉默与你说话， 
你的沉默明亮如灯，简单如指环。 
你就像黑夜，拥有寂静与群星。 
你的沉默就是星星的沉默，遥远而明亮。 
我喜欢你是寂静的，仿佛你消失了一样，
遥远且哀伤，仿佛你已经死了。 
彼时，一个字，一个微笑，已经足够。 
而我会觉得幸福，因那不是真的而觉得幸福。 
`
let n = 0
var id = setInterval(
    function () {
        console.log(n)
        if (n === final.length) {
            clearInterval(id)
        }
        n = n + 1
        code.innerHTML = final.substring(0, n)
    }
    , 70)