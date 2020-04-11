'use strict'

// 0 late-night 4 early-morning 9 morning 12 afternoon 15 early-evening 18 evening 21 night 24
const curDate = new Date();
const curHour = curDate.getHours();

module.exports = (msg) => {
    if (msg.member.voice.channel.members.size === 1) {
        if (msg.content.match(/\bo(ha|ah)|(お|オ)(は|ハ)|ｵﾊ/i)) {
            if (curHour < 4) {
                msg.channel.send('zzz...');
                return;
            }
            if (curHour < 9) {
                msg.channel.send('オハヨウゴザイマス ハヤイデス？');
                return;
            }
            if (curHour < 12) {
                msg.channel.send('オハヨウゴザイマス');
                return;
            }
            if (curHour < 15) {
                msg.channel.send('モウ オヒルデスカ？');
                return;
            }
            if (curHour < 18) {
                msg.channel.send('オヒルネ シテイラッシャイマス？');
                return;
            }
            if (curHour < 21) {
                msg.channel.send('イマ ヨルデス...');
                return;
            }
            if (curHour < 24) {
                msg.channel.send('ネボケテマスカ？');
                return;
            }
        }
        if (msg.content.match(/\bkon|^((こ|コ)(ん|ン)|ｺﾝ)|\b(o|u)i*-*s+u|^((お|オ|う|ウ)(い|イ|ぃ|ィ)*ー*(っ|ッ)*(す|ス)|(ｵ|ｳ)(ｲ|ｨ)*ｰ*ｯ*?ｽ|押忍)|^((ち|チ)(わ|ワ|ゎ|ヮ|は|ハ|ゃ|ャ)|ﾁ(ﾜ|ﾊ|ｬ))|\bdou?mo|^((ど|ド)(う|ウ)?(も|モ)|ﾄﾞｳ?ﾓ)|^((や|ヤ|ゃ|ャ)(あ|ア|ぁ|ァ)|(ﾔ|ｬ)(ｱ|ｧ))/i)) {
            if (4 <= curHour && curHour < 18) {
                msg.channel.send('コンニチワ');
            }
            else {
                msg.channel.send('コンバンワ');
            }
            return;
        }
        if (msg.content.match(/\bots?u|(お|オ)(っ|ッ)?(つ|ツ|疲)|ｵｯ?ﾂ|乙|O2/i)) {
            msg.channel.send('オツカレサマ');
            return;
        }
        if (msg.content.match(/\bneru|(ね|ネ)((る|ル)|(ま|マ)(す|ス))|ﾈ(ﾙ|ﾏｽ)|寝(る|ます)/i)) {
            msg.channel.send('オヤスミナサイ');
            return;
        }
        if (msg.content.match(/\bnemu|(ね|ネ)(む|ム)|ﾈﾑ|眠た?い|(ね|寝)たい/i)) {
            if (4 <= curHour && curHour < 12) {
                msg.channel.send('ネブソク デス？');
                return;
            }
            if (curHour <= 12 && curHour < 18) {
                msg.channel.send('オヒルネ シマショウ');
                return;
            }
            msg.channel.send('ソロソロ ネマショウ');
            return;
        }
        if (msg.content.match(/\b(t(s?u|i)|(c|ch)i)kare|(つ|ツ|ち|チ)(か|カ)(れ|レ)|(ﾂ|ﾁ)ｶﾚ|疲れ/i)) {
            msg.channel.send('キュウケイ シマショウ');
            return;
        }
    }
};