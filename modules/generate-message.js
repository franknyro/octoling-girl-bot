'use strict'

// 0 late-night 4 early-morning 9 morning 12 afternoon 15 early-evening 18 evening 21 night 24
const UTC = new Date();
const JST = new Date(UTC.getTime() + 32400000);
const curHours = JST.getUTCHours();

// あいさつ（優先度高）時間帯によって返答が変わる
// ねぎらいのことば（優先度低）時間帯によって返答が変わらない
module.exports = (msg) => {
    if (Math.floor(Math.random() * msg.member.voice.channel.members.size) === 0) {
        if (msg.content.match(/\bo(ha|ah)|(お|オ)(は|ハ)|ｵﾊ/i)) {
            if (curHours < 4) {
                return 'zzz...';
            }
            if (curHours < 9) {
                return 'オハヨウゴザイマス ハヤイデス？';
            }
            if (curHours < 12) {
                return 'オハヨウゴザイマス';
            }
            if (curHours < 15) {
                return 'モウ オヒルデスカ？';
            }
            if (curHours < 18) {
                return 'オヒルネ シテイラッシャイマス？';
            }
            if (curHours < 21) {
                return 'イマ ヨルデス...';
            }
            if (curHours < 24) {
                return 'ネボケテマスカ？';
            }
        }
        if (msg.content.match(/\bkon|^((こ|コ)(ん|ン)|ｺﾝ)|\b(o|u)i*-*s+u|^((お|オ|う|ウ)(い|イ|ぃ|ィ)*ー*(っ|ッ)*(す|ス)|(ｵ|ｳ)(ｲ|ｨ)*ｰ*ｯ*?ｽ|押忍)|^((ち|チ)(わ|ワ|ゎ|ヮ|は|ハ|ゃ|ャ)|ﾁ(ﾜ|ﾊ|ｬ))|\bdou?mo|^((ど|ド)(う|ウ)?(も|モ)|ﾄﾞｳ?ﾓ)|^((や|ヤ|ゃ|ャ)(あ|ア|ぁ|ァ)|(ﾔ|ｬ)(ｱ|ｧ))/i)) {
            if (4 <= curHours && curHours < 18) {
                return 'コンニチワ';
            }
            else {
                return 'コンバンワ';
            }
        }
        if (msg.content.match(/\bots?u|(お|オ)(っ|ッ)?(つ|ツ|疲)|ｵｯ?ﾂ|乙|O2/i)) {
            return 'オツカレサマ';
        }
        if (msg.content.match(/\bneru|(ね)((る|ル)|(ま|マ)(す|ス))|ﾈ(ﾙ|ﾏｽ)|寝(る|ます)|\boyasu|(お|オ)(や|ヤ)(す|ス)|ｵﾔｽ/i)) {
            return 'オヤスミナサイ';
        }
        if (msg.content.match(/\bnemu|(ね|ネ)(む|ム)|ﾈﾑ|眠た?い|(ね|寝)たい/i)) {
            if (4 <= curHours && curHours < 12) {
                return 'ネブソク デス？';
            }
            if (12 <= curHours && curHours < 18) {
                return 'オヒルネ シマショウ';
            }
            return 'ソロソロ ネマショウ';
        }
        if (msg.content.match(/\b(t(s?u|i)|(c|ch)i)kare|(つ|ツ|ち|チ)(か|カ)(れ|レ)|(ﾂ|ﾁ)ｶﾚ|疲れ/i)) {
            return 'キュウケイ シマショウ';
        }
        if (msg.content.match(/\bts?uram?i|((つ|ツ)(ら|ラ)|辛)(い|イ|み|ミ)|ﾂﾗ(ｲ|ﾐ)/i)) {
            return 'ガンバルノハ ヨイコト！';
        }
        if (msg.content.match(/\bo(ch|ty)a|(お|オ)((ち|チ)(ゃ|ャ)|茶)|ｵﾁｬ/i)) {
            return 'ワタシモ ノマセテ イタダキマシタ？';
        }
    }
};