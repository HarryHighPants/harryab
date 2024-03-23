export default `
let                          s=(
 e,a)/*     In binary      */=>
  {let/*   and         */i=Math
   .sin/*     black     */(a),
      n=Math          .round
        (10         *i+
          10)    ,r=
             Math
          .abs   (i)
        >.85        ?"*"
     :Math            .cos
    (a)/*    Lie       */>0?
   "-"/*   creatures   */:"@"
 return/*    of glyph      */e.
 slice                     (0,n
)+r/*                      */+e
.slice/*    Its orbit    */(n+1)
 };for/*  rhythmed       */(let
  eye/*      systolic   */=0;;
   eye++                ){
     await            new
       Promise     ((e)=>
           setTimeout
             (e,60))
           let     e=
        s(            " ".
     repeat            (25),
   (eye/*       A      */+15)
  *.2);/*   creature   */console
.log/*    built  from       */(s
(e,/*       ones           */.21*
eye                           ))}
`
