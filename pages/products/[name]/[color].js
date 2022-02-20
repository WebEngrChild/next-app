// 下記と内容は同じ
// import { useRouter } from "next/router";
// export default function Color() {
//   const router = useRouter();
//   console.log(router.query)
//   return <h1>{router.query.name}の{router.query.color}カラーです</h1>;
// }

import { useRouter } from "next/router";
export default function Color() {
  const router = useRouter();
  // 分割代入の形
  const { name, color } = router.query
  console.log(router.query)
  return <h1>{ name }の{ color }カラーです</h1>;
}