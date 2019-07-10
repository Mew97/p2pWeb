function sleep(d) {
  return new Promise((resolve) => setTimeout(resolve, d))
}

async function loadJs() {
  let js1 = document.createElement('script')
  js1.setAttribute('src', 'static/script/jquery.min.js')
  document.head.appendChild(js1)

  await sleep(50);

  let js2 = document.createElement('script')
  js2.setAttribute('src', 'static/script/common.js')
  document.head.appendChild(js2)

  await sleep(50);

  let js4 = document.createElement('script')
  js4.setAttribute('src', 'static/script/jquery.flexslider-min.js')
  document.head.appendChild(js4)

  await sleep(50);

  let js3 = document.createElement('script')
  js3.setAttribute('src', 'static/script/custom1.js')
  document.head.appendChild(js3)

  await sleep(50);

  let js5 = document.createElement('script')
  js5.setAttribute('src', 'static/script/index.js')
  document.head.appendChild(js5)



}




export default {
  loadJs,
  sleep
}
