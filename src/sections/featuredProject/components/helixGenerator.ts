// Modified Typescript version of the helix poem
const addSprialToLine = (line: string, frame: number) => {
  const sin = Math.sin(frame),
    x = Math.round(sin * 10 + 10),
    char = Math.abs(sin) > 0.85 ? "*" : Math.cos(frame) > 0 ? "-" : "@"
  return line.slice(0, x) + char + line.slice(x + 1)
}

export const generateHelixLine = (frame: number) => {
  const line = addSprialToLine(" ".repeat(22), (frame + 15) * 0.2)
  return addSprialToLine(line, frame * 0.21)
}

// Original js console version:

// let                          s=(
//  e,a)/*     In binary      */=>
//   {let/*   and         */i=Math
//    .sin/*     black     */(a),
//       n=Math          .round
//         (10         *i+
//           10)    ,r=
//              Math
//           .abs   (i)
//         >.85        ?"*"
//      :Math            .cos
//     (a)/*    Lie       */>0?
//    "-"/*   creatures   */:"@"
//  return/*    of glyph      */e.
//  slice                     (0,n
// )+r/*                      */+e
// .slice/*    Its orbit    */(n+1)
//  };for/*  rhythmed       */(let
//   eye/*      systolic   */=0;;
//    eye++                ){
//      await            new
//        Promise     ((e)=>
//            setTimeout
//              (e,60))
//            let     e=
//         s(            " ".
//      repeat            (25),
//    (eye/*       A      */+15)
//   *.2);/*   creature   */console
// .log/*    built  from       */(s
// (e,/*       ones           */.21*
// eye                           ))}
