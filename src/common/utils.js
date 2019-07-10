function sleep(d) {
  return new Promise((resolve) => setTimeout(resolve, d))
}

async function loadJsFirst() {


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

async function loadHelpJs(){
  let js1 = document.createElement('script')
  js1.setAttribute('src', 'static/script/jquery.min.js')
  document.head.appendChild(js1)

  await sleep(500);

  let js2 = document.createElement('script')
  js2.setAttribute('src', 'static/script/common.js')
  document.head.appendChild(js2)
  await sleep(500);

  let js5 = document.createElement('script')
  js5.setAttribute('src', 'static/script/custom2.js')
  document.head.appendChild(js5)
}

async function loadMainJs() {

  let js1 = document.createElement('script')
  js1.setAttribute('src', 'static/js/jquery.js')
  document.head.appendChild(js1);

  await sleep(500);

  let js2 = document.createElement('script')
  js2.setAttribute('src', 'static/js/plugins.js')
  document.head.appendChild(js2);

  await sleep(500);

  let js3 = document.createElement('script')
  js3.setAttribute('src', 'static/js/functions.js')
  document.head.appendChild(js3);

  await sleep(500);

}


export default {
  loadMainJs,
  loadJsFirst,
  loadHelpJs,
  loadJs,
  sleep
}
